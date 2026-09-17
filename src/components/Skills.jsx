import { Code2, Database, GitBranch, Layers3, Server, WandSparkles } from 'lucide-react'
import { skills } from '../data/profile'
import Reveal from './Reveal'

const icons = [Code2, Layers3, Server, Server, Database, Layers3, GitBranch, GitBranch, WandSparkles, WandSparkles]

export default function Skills() {
  return (
    <section className="cv-section px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 border-y border-line py-7 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold tracking-[-.04em] text-copy">Tools I reach for</h2>
            <p className="max-w-sm text-sm leading-relaxed text-muted">A practical stack for shipping interfaces, APIs, and the systems behind them.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={skill} delay={index * 0.05}>
                <div className="group border-b border-r border-line px-4 py-7 transition hover:bg-panel">
                  <Icon size={20} className="mb-8 text-muted transition group-hover:text-cyan" />
                  <p className="text-sm leading-snug text-copy">{skill}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}