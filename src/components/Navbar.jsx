import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [['Work', '#work'], ['About', '#about'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-xl transition-colors duration-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex min-h-11 items-center font-display text-lg font-bold tracking-tight">SU<span className="text-cyan">.</span></a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link inline-flex min-h-11 items-center text-sm text-muted transition hover:text-copy">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 md:flex">
            <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm text-copy transition hover:border-cyan hover:text-cyan">Let&apos;s talk <ArrowUpRight size={15} /></a>
          </nav>
          <ThemeToggle />
          <button type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center text-copy md:hidden">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu-open border-t border-line px-6 py-3 md:hidden">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-11 items-center text-muted transition hover:text-copy">{label}</a>)}
        </nav>
      )}
    </header>
  )
}