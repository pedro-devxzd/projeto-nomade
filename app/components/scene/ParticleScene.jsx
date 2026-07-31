'use client'
import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

async function loadToothPixels(url, maxParticles = 30000) {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const size = 512
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, size, size)
      const { data } = ctx.getImageData(0, 0, size, size)

      const candidates = []
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const idx = (y * size + x) * 4
          if (data[idx + 3] > 30) {
            candidates.push({ x, y })
          }
        }
      }

      const step = Math.max(1, candidates.length / maxParticles)
      const sampled = []
      for (let i = 0; i < candidates.length && sampled.length < maxParticles; i += step) {
        sampled.push(candidates[Math.floor(i)])
      }

      const scale = 2.6 / size
      const points = sampled.map(p => ({
        x: (p.x - size / 2) * scale,
        y: -(p.y - size / 2) * scale,
        z: (Math.random() - 0.5) * 0.20,
      }))

      resolve(points)
    }
    img.onerror = () => resolve([])
    img.src = url
  })
}

function Particles({ progress, toothPoints }) {
  const mesh = useRef()

  const { actual, positions, colors, originalPositions, toothPositions } = useMemo(() => {
    const actual = toothPoints.length
    const positions         = new Float32Array(actual * 3)
    const colors            = new Float32Array(actual * 3)
    const originalPositions = new Float32Array(actual * 3)
    const toothPositions    = new Float32Array(actual * 3)

    const white  = new THREE.Color('#FFFFFF')
    const ivory  = new THREE.Color('#F0E8D0')
    const softG  = new THREE.Color('#E8C97A')
    const gold   = new THREE.Color('#C9A84C')
    const deepG  = new THREE.Color('#A67C2E')
    const richG  = new THREE.Color('#8B6820')

    for (let i = 0; i < actual; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 3.0 + Math.random() * 3.5

      originalPositions[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      originalPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
      originalPositions[i*3+2] = r * Math.cos(phi)

      positions[i*3]   = originalPositions[i*3]
      positions[i*3+1] = originalPositions[i*3+1]
      positions[i*3+2] = originalPositions[i*3+2]

      toothPositions[i*3]   = toothPoints[i].x
      toothPositions[i*3+1] = toothPoints[i].y
      toothPositions[i*3+2] = toothPoints[i].z

      // Gradiente dourado em toda a extensão
      const yNorm = (toothPoints[i].y + 1.3) / 2.6 // 0=baixo 1=topo

      let color
      if (yNorm > 0.80) {
        // Pico da coroa — branco/marfim com toque dourado
        color = ivory.clone().lerp(softG, Math.random() * 0.4)
      } else if (yNorm > 0.60) {
        // Coroa superior — dourado suave
        color = softG.clone().lerp(gold, Math.random() * 0.5)
      } else if (yNorm > 0.35) {
        // Coroa inferior — ouro pleno
        color = gold.clone().lerp(softG, Math.random() * 0.3)
      } else if (yNorm > 0.15) {
        // Transição para raízes — ouro profundo
        color = gold.clone().lerp(deepG, Math.random() * 0.5)
      } else {
        // Raízes — ouro rico e escuro
        color = deepG.clone().lerp(richG, Math.random() * 0.5)
      }

      // Especular: brilhos dourados espalhados
      if (Math.random() > 0.90) {
        color = color.clone().lerp(white, 0.5 + Math.random() * 0.3)
      }

      colors[i*3]   = color.r
      colors[i*3+1] = color.g
      colors[i*3+2] = color.b
    }

    return { actual, positions, colors, originalPositions, toothPositions }
  }, [toothPoints])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    const pos  = mesh.current.geometry.attributes.position.array

    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2

    for (let i = 0; i < actual; i++) {
      const ix = i*3, iy = i*3+1, iz = i*3+2
      const tx = originalPositions[ix] * (1 - eased) + toothPositions[ix] * eased
      const ty = originalPositions[iy] * (1 - eased) + toothPositions[iy] * eased
      const tz = originalPositions[iz] * (1 - eased) + toothPositions[iz] * eased
      const float = Math.sin(time * 0.5 + i * 0.02) * 0.006 * (1 - eased)

      pos[ix] += (tx - pos[ix]) * 0.05
      pos[iy] += (ty + float - pos[iy]) * 0.05
      pos[iz] += (tz - pos[iz]) * 0.05
    }

    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = time * 0.05 * (1 - progress * 0.95)
    mesh.current.rotation.x = Math.sin(time * 0.03) * 0.02 * (1 - progress)
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={actual} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color"    count={actual} array={colors}    itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.013} vertexColors transparent opacity={0.96} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Ring({ radius, speed, delay }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime + delay
    ref.current.rotation.x = t * speed * 0.3
    ref.current.rotation.y = t * speed * 0.2
    ref.current.material.opacity = 0.04 + Math.sin(t * 0.5) * 0.02
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.002, 16, 200]} />
      <meshBasicMaterial color="#C9A84C" transparent opacity={0.05} />
    </mesh>
  )
}

function CameraRig({ progress }) {
  const { camera } = useThree()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    camera.position.x = Math.sin(t * 0.08) * 0.3 * (1 - progress * 0.7)
    camera.position.y = Math.cos(t * 0.06) * 0.15
    camera.position.z = 5 - progress * 0.8
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function ParticleScene({ progress = 0 }) {
  const [toothPoints, setToothPoints] = useState(null)

  useEffect(() => {
    loadToothPixels("/tooth.png", 30000).then(pts => {
      if (pts.length > 0) setToothPoints(pts)
    })
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} gl={{ antialias: true, alpha: false }} dpr={[1, 1.5]}>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[2, 4, 2]}    color="#C9A84C" intensity={4} />
      <pointLight position={[-3, -2, 1]}  color="#ffffff" intensity={0.5} />
      <pointLight position={[0, 0, 3]}    color="#F5F0E8" intensity={1.0} />
      <pointLight position={[0, 2, -2]}   color="#C9A84C" intensity={1.5} />
      <CameraRig progress={progress} />
      {toothPoints && <Particles progress={progress} toothPoints={toothPoints} />}
      <Ring radius={2.8} speed={0.3}  delay={0} />
      <Ring radius={2.0} speed={-0.2} delay={1} />
    </Canvas>
  )
}
