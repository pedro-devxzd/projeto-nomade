'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'guhfb7da'
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'xxpf3luv'

async function uploadToCloudinary(file, categoria) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('folder', `dra-maria-alice/${categoria}`)
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: 'POST', body: formData }
  )
  return await res.json()
}

export default function AdminPanel() {
  const router = useRouter()
  const [casos, setCasos] = useState([])
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState('')
  const [novoTitulo, setNovoTitulo] = useState('')
  const [novoCategoria, setNovoCategoria] = useState('estetica')
  const [fileAntes, setFileAntes] = useState(null)
  const [fileDepois, setFileDepois] = useState(null)

  async function loadCasos() {
    setLoading(true)
    const { data, error } = await supabase
      .from('casos')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setCasos(data)
    setLoading(false)
  }

  useEffect(() => { loadCasos() }, [])

  async function handleUpload() {
    if (!novoTitulo || !fileAntes) {
      setMsg('Informe o título e a foto Antes.')
      return
    }
    setUploading(true)
    setMsg('Enviando fotos...')
    try {
      const resAntes = await uploadToCloudinary(fileAntes, novoCategoria)
      let urlDepois = null
      if (fileDepois) {
        const resDepois = await uploadToCloudinary(fileDepois, novoCategoria)
        urlDepois = resDepois.secure_url
      }
      const { error } = await supabase.from('casos').insert({
        titulo: novoTitulo,
        categoria: novoCategoria,
        antes: resAntes.secure_url,
        depois: urlDepois,
      })
      if (error) throw error
      setMsg('✓ Caso publicado!')
      setNovoTitulo('')
      setFileAntes(null)
      setFileDepois(null)
      await loadCasos()
    } catch (e) {
      console.error(e)
      setMsg('Erro ao enviar. Tente novamente.')
    }
    setUploading(false)
  }

  async function handleDelete(id) {
    const { error } = await supabase.from('casos').delete().eq('id', id)
    if (!error) {
      setMsg('Caso removido.')
      await loadCasos()
    } else {
      setMsg('Erro ao remover.')
    }
  }

  async function handleLogout() {
    await fetch('/api/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  const labelStyle = 'block text-[#555] text-xs uppercase tracking-[2px] mb-2'
  const inputStyle = 'w-full bg-transparent border-b border-[#1A1A1A] text-[#F5F5F5] text-sm py-3 outline-none placeholder:text-[#333] focus:border-[#C9A84C] transition-colors'

  return (
    <div className="min-h-screen bg-[#000] text-[#F5F5F5] p-6">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#111]">
          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[4px] mb-1">Painel</p>
            <h1 className="font-playfair text-3xl">Gestão de Casos</h1>
          </div>
          <div className="flex gap-6">
            <a href="/" className="text-[#555] text-xs uppercase tracking-[2px] hover:text-[#C9A84C] transition-colors">← Site</a>
            <button onClick={handleLogout} className="text-[#555] text-xs uppercase tracking-[2px] hover:text-red-400 transition-colors">Sair</button>
          </div>
        </div>

        <div className="bg-[#0D0D0D] border border-[#111] p-6 mb-10">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[3px] mb-6">Adicionar novo caso</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelStyle}>Título do caso</label>
              <input type="text" placeholder="Ex: Facetas em Resina — Caso 3" className={inputStyle} value={novoTitulo} onChange={(e) => setNovoTitulo(e.target.value)} />
            </div>
            <div>
              <label className={labelStyle}>Categoria</label>
              <select className="w-full bg-[#111] border-b border-[#1A1A1A] text-[#F5F5F5] text-sm py-3 outline-none focus:border-[#C9A84C] transition-colors" value={novoCategoria} onChange={(e) => setNovoCategoria(e.target.value)}>
                <option value="estetica">Estética</option>
                <option value="restauracao">Restauração</option>
                <option value="clareamento">Clareamento</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { label: 'Antes *', file: fileAntes, set: setFileAntes },
              { label: 'Depois (opcional)', file: fileDepois, set: setFileDepois },
            ].map(({ label, file, set }) => (
              <div key={label}>
                <label className={labelStyle}>Foto — {label}</label>
                <label className="block border border-dashed border-[#2A2A2A] hover:border-[#C9A84C] transition-colors p-6 text-center cursor-pointer">
                  {file ? (
                    <div>
                      <img src={URL.createObjectURL(file)} alt="preview" style={{ maxHeight: '120px', margin: '0 auto', objectFit: 'cover' }} />
                      <p className="text-[#C9A84C] text-xs mt-2 truncate">{file.name}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[#333] text-2xl mb-2">+</p>
                      <p className="text-[#555] text-xs uppercase tracking-[2px]">Clique para selecionar</p>
                    </div>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => set(e.target.files[0])} />
                </label>
              </div>
            ))}
          </div>

          {msg && (
            <p className={`text-xs uppercase tracking-[2px] mb-4 ${msg.includes('✓') ? 'text-green-400' : msg.includes('Erro') ? 'text-red-400' : 'text-[#C9A84C]'}`}>
              {msg}
            </p>
          )}

          <button onClick={handleUpload} disabled={uploading} className="bg-[#C9A84C] text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors disabled:opacity-50">
            {uploading ? 'Enviando...' : 'Publicar Caso'}
          </button>
        </div>

        <p className="text-[#C9A84C] text-xs uppercase tracking-[3px] mb-6">
          Casos publicados ({loading ? '...' : casos.length})
        </p>

        {loading && <p className="text-[#333] text-sm text-center py-12">Carregando...</p>}
        {!loading && casos.length === 0 && <p className="text-[#333] text-sm text-center py-12">Nenhum caso publicado ainda.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {casos.map((caso) => (
            <div key={caso.id} className="bg-[#0D0D0D] border border-[#111] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#111]">
                <img src={caso.antes} alt="antes" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
                {caso.depois
                  ? <img src={caso.depois} alt="depois" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
                  : <div className="bg-[#0D0D0D] flex items-center justify-center" style={{ aspectRatio: '1' }}>
                      <p className="text-[#333] text-xs uppercase tracking-[2px]">Sem depois</p>
                    </div>
                }
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[2px] mb-1">{caso.categoria}</p>
                  <p className="text-[#F5F5F5] text-sm font-playfair">{caso.titulo}</p>
                  <p className="text-[#333] text-xs mt-1">{new Date(caso.created_at).toLocaleDateString('pt-BR')}</p>
                </div>
                <button onClick={() => handleDelete(caso.id)} className="text-[#555] text-xs uppercase tracking-[2px] hover:text-red-400 transition-colors ml-4">
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
