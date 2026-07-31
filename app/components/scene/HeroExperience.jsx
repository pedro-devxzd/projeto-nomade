'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const ParticleScene = dynamic(() => import('./ParticleScene'), { ssr: false })

export default function HeroExperience({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('void')
  const [textVisible, setTextVisible] = useState(false)
  const [tagVisible, setTagVisible] = useState(false)
  const [scrollHint, setScrollHint] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setTagVisible(true), 600)
    const t2 = setTimeout(() => setTextVisible(true), 1200)
    const t3 = setTimeout(() => setScrollHint(true), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const winH = window.innerHeight

      if (scrollY < winH * 0.1) {
        setPhase('void')
        setProgress(0)
      } else if (scrollY < winH * 1.4) {
        setPhase('structure')
        const p = (scrollY - winH * 0.1) / (winH * 1.3)
        setProgress(Math.min(Math.max(p, 0), 1))
      } else if (scrollY < winH * 2.0) {
        setPhase('reveal')
        setProgress(1)
      } else {
        setPhase('done')
        setProgress(1)
        if (onComplete) onComplete()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onComplete])

  // opacity helpers
  const voidOpacity = phase === 'void' ? 1 : phase === 'structure' ? Math.max(0, 1 - progress * 4) : 0
  const revealOpacity = phase === 'reveal' ? 1 : phase === 'done' ? 1 : 0

  return (
    <div style={{ height: '320vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>

        {/* 3D Scene */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleScene progress={progress} />
        </div>

        {/* Ambient glow */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.03) 0%, transparent 65%)',
        }} />

        {/* NAV */}
        <nav style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '52px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 32px', zIndex: 50,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '13px', color: '#C9A84C', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Dra. Maria Alice
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '8px', color: '#444', letterSpacing: '2px' }}>
              CRO74548
            </p>
          </div>
          <a href="https://wa.me/5532984592632" target="_blank" style={{
            background: '#C9A84C', color: '#000', padding: '7px 18px',
            fontFamily: 'var(--font-inter)', fontSize: '9px', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
          }}>Contratar</a>
        </nav>

        {/* PHASE: VOID — main hero text */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          opacity: voidOpacity,
          transition: 'opacity 0.6s ease',
        }}>
          {/* Tag line */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px',
            opacity: tagVisible ? 1 : 0,
            transform: tagVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1s ease',
          }}>
            <div style={{ width: '28px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C' }}>
              Odontologia Estética · Precisão Digital
            </span>
            <div style={{ width: '28px', height: '1px', background: '#C9A84C' }} />
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-playfair)', fontWeight: 700, lineHeight: 1.1,
            fontSize: 'clamp(28px, 5.5vw, 68px)', textAlign: 'center',
            color: '#F5F5F5', padding: '0 32px',
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 1.2s ease',
          }}>
            Todo grande sorriso<br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>começa por uma estrutura.</em>
          </h1>

          {/* CRO */}
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '10px', letterSpacing: '3px',
            textTransform: 'uppercase', color: '#333', marginTop: '28px',
            opacity: tagVisible ? 1 : 0,
            transition: 'opacity 1s ease 0.8s',
          }}>Dra. Maria Alice · CRO74548</p>
        </div>

        {/* PHASE: STRUCTURE — forming label */}
        <div style={{
          position: 'absolute', bottom: '12%', left: 0, right: 0,
          textAlign: 'center', zIndex: 10, pointerEvents: 'none',
          opacity: phase === 'structure' && progress > 0.1 ? Math.min((progress - 0.1) * 5, 1) : 0,
          transition: 'opacity 0.5s',
        }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', opacity: 0.7 }}>
            Estrutura se formando
          </p>
          {/* Progress bar */}
          <div style={{ width: '80px', height: '1px', background: '#1A1A1A', margin: '12px auto 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#C9A84C', width: `${progress * 100}%`, transition: 'width 0.1s' }} />
          </div>
        </div>

        {/* PHASE: REVEAL — quote only, no overlap */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 15, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          opacity: revealOpacity,
          transition: 'opacity 1s ease',
          background: revealOpacity > 0 ? 'rgba(0,0,0,0.5)' : 'transparent',
        }}>
          <div style={{
            width: '40px', height: '1px', background: '#C9A84C',
            marginBottom: '32px',
            opacity: revealOpacity,
            transform: revealOpacity ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 1s ease 0.2s',
          }} />
          <p style={{
            fontFamily: 'var(--font-playfair)', fontStyle: 'italic',
            fontSize: 'clamp(18px, 2.5vw, 32px)', color: '#F5F5F5',
            textAlign: 'center', padding: '0 32px',
            opacity: revealOpacity,
            transform: revealOpacity ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease 0.3s',
          }}>
            "Precisão em cada detalhe."
          </p>
          <div style={{
            width: '40px', height: '1px', background: '#C9A84C',
            marginTop: '32px',
            opacity: revealOpacity,
            transition: 'opacity 1s ease 0.6s',
          }} />
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '9px', letterSpacing: '3px',
            textTransform: 'uppercase', color: '#555', marginTop: '20px',
            opacity: revealOpacity,
            transition: 'opacity 1s ease 0.9s',
          }}>Role para conhecer</p>
        </div>

        {/* SCROLL HINT */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          zIndex: 10, pointerEvents: 'none',
          opacity: scrollHint && phase === 'void' ? 1 : 0,
          transition: 'opacity 1s ease',
        }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase', color: '#2A2A2A' }}>
            Role para descobrir
          </p>
          <div style={{
            width: '1px', height: '36px',
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
          }} />
        </div>

      </div>
    </div>
  )
}
