import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedInIcon } from './SocialIcons'

export default function Hero() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [spot, setSpot] = useState({ x: -600, y: -600 })

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect()
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <section
      onMouseMove={onMove}
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 md:pb-24"
    >
      <div className="dot-field absolute inset-0 opacity-30" />
      <div className="animate-drift absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="animate-drift-2 absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      {!reduce && (
        <div
          aria-hidden="true"
          style={{ background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, rgba(86, 217, 255, 0.09), transparent 70%)` }}
          className="pointer-events-none absolute inset-0 hidden md:block"
        />
      )}
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.4fr_.6fr] md:items-end">
        <div className="max-w-4xl">
          <p className="animate-rise mb-6 font-mono text-xs uppercase tracking-[.22em] text-cyan">Available for an entry-level full-stack role</p>
          <h1 className="animate-rise delay-1 max-w-4xl font-display text-5xl font-semibold leading-[.96] tracking-[-.055em] text-copy md:text-8xl">Building digital products that <span className="text-lime">hold together.</span></h1>
          <p className="animate-rise delay-2 mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          <div className="animate-rise delay-3 mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex min-h-11 items-center gap-3 bg-lime px-5 py-3 font-medium text-ink transition hover:bg-copy">See selected work <ArrowDownRight size={18} /></a>
            <a href="#contact" className="inline-flex min-h-11 items-center gap-3 border border-line-strong px-5 py-3 text-copy transition hover:border-cyan hover:text-cyan">Start a conversation <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="hidden justify-self-end md:flex md:flex-col md:items-end md:gap-6">
          <div className="animate-float h-32 w-32 border border-cyan/50 p-3"><div className="flex h-full items-end justify-end bg-cyan/10 p-3"><span className="font-mono text-4xl text-cyan">01</span></div></div>
          <div className="flex gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center border border-line text-muted transition hover:border-cyan hover:text-cyan"><GithubIcon size={19} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center border border-line text-muted transition hover:border-cyan hover:text-cyan"><LinkedInIcon size={19} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}