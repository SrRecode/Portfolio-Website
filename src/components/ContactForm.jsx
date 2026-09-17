import { useState } from 'react'
import { Check, Copy, Loader2, Send } from 'lucide-react'
import { profile } from '../data/profile'

const isEmpty = (v) => v.trim().length === 0
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY || profile.contactAccessKey
const canUseService = Boolean(web3formsKey)

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')
    if (honeypot) return
    if (isEmpty(name)) { setErrorMsg('Please add your name so I know who is writing.'); return }
    if (isEmpty(email) || !isEmail(email)) { setErrorMsg('That email address does not look right — check it and try again.'); return }
    if (isEmpty(message)) { setErrorMsg('Add a short message so I can reply with something useful.'); return }

    setStatus('sending')

    if (canUseService) {
      try {
        const form = new FormData()
        form.append('access_key', web3formsKey)
        form.append('name', name)
        form.append('email', email)
        form.append('message', message)
        form.append('subject', `Portfolio message from ${name}`)
        form.append('from_name', name)
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: form })
        const data = await res.json()
        if (data.success) {
          setStatus('success')
          setName(''); setEmail(''); setMessage('')
        } else {
          setStatus('error')
          setErrorMsg(data.message || 'The message could not be sent. Please try again in a moment, or email me directly.')
        }
      } catch {
        setStatus('error')
        setErrorMsg('Could not reach the send service. Please try again, or email me directly using the address below.')
      }
    } else {
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = profile.email
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const inputCls =
    'w-full min-h-11 rounded-lg border border-line bg-ink px-4 py-2.5 text-sm text-copy placeholder:text-muted transition focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan'

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">Name</label>
            <input id="cf-name" name="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">Email</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">Message</label>
          <textarea id="cf-message" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputCls} min-h-32 resize-y`} placeholder="What are you building?" />
        </div>

        <input type="text" name="_honeypot" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        {errorMsg && (
          <p role="alert" className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">{errorMsg}</p>
        )}
        {status === 'success' && (
          <p role="status" className="flex items-center gap-2 rounded-lg border border-lime/40 bg-lime/10 px-4 py-3 text-sm text-lime"><Check size={16} />{canUseService ? 'Message sent — thank you. I will get back to you soon.' : 'Opening your email app with the message pre-filled. If nothing opened, use the copy button below.'}</p>
        )}

        <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-lime px-6 py-3 font-medium text-ink transition hover:bg-copy disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'sending' ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </form>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
        <span>Prefer email?</span>
        <button type="button" onClick={copyEmail} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 py-2 text-copy transition hover:border-cyan hover:text-cyan">
          {copied ? <Check size={15} className="text-lime" /> : <Copy size={15} />}
          {copied ? 'Copied!' : profile.email}
        </button>
      </div>
    </div>
  )
}