'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin() {
    if (!senha) return
    setLoading(true)
    setErro(false)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ senha }),
      })

      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setErro(true)
        setSenha('')
      }
    } catch {
      setErro(true)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="font-playfair text-[#C9A84C] text-lg mb-1">
            Dra. Maria Alice
          </p>
          <p className="text-[#333] text-xs uppercase tracking-[3px]">
            Painel Administrativo
          </p>
        </div>
        <div className="bg-[#0D0D0D] border border-[#111] p-8">
          <label className="block text-[#555] text-xs uppercase tracking-[2px] mb-2">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => { setSenha(e.target.value); setErro(false) }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-transparent border-b border-[#1A1A1A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#333] focus:border-[#C9A84C] transition-colors mb-6"
          />
          {erro && (
            <p className="text-red-400 text-xs uppercase tracking-[2px] mb-4">
              Senha incorreta.
            </p>
          )}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#C9A84C] text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors disabled:opacity-50"
          >
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </div>
      </div>
    </div>
  )
}
