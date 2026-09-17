import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const facts = [[MapPin, 'Based in', profile.location], [GraduationCap, 'Education', 'BS, Computer Science · KUST'], [Sparkles, 'Focus', 'Full-stack + AI workflows']]

export default function About() {
  return (
    <section id="about" className="cv-section section-rule px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.22em] text-cyan">A little context</p>
          <h2 className="mt-5 max-w-sm text-4xl font-semibold tracking-[-.04em] text-copy md:text-5xl">Curious by default. Reliable by design.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-xl leading-relaxed text-muted">I am a full-stack developer who enjoys the space between systems thinking and thoughtful interface work. I like taking ambiguous ideas, shaping the architecture, and shipping a complete experience.</p>
          <div className="mt-12 grid gap-5 border-t border-line pt-7 sm:grid-cols-3">
            {facts.map(([Icon, label, value], i) => (
              <Reveal key={label} delay={0.18 + i * 0.08}>
                <div className="space-y-3"><Icon size={19} className="text-lime" /><p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p><p className="text-sm leading-relaxed text-copy">{value}</p></div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}