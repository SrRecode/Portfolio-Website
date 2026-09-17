import { ArrowUpRight, Layers3 } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

const glow = (accent) => accent === 'cyan'
  ? 'hover:shadow-[0_0_38px_rgba(86,217,255,.14)]'
  : 'hover:shadow-[0_0_38px_rgba(139,124,255,.16)]'

export default function Projects() {
  return (
    <section id="work" className="cv-section section-rule px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.22em] text-cyan">Selected work</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] text-copy md:text-6xl">Built with intent.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">A small selection of full-stack products that demonstrate ownership from architecture to delivery.</p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <article className={`group relative overflow-hidden border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-line-strong md:p-9 ${glow(project.accent)}`}>
                <div className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-[80px] ${project.accent === 'cyan' ? 'bg-cyan/15 group-hover:bg-cyan/25' : 'bg-violet/20 group-hover:bg-violet/30'}`} />
                <div className="relative">
                  <div className="mb-16 flex items-center justify-between">
                    <span className="font-mono text-sm text-muted">{project.number}</span>
                    <Layers3 size={20} className={project.accent === 'cyan' ? 'text-cyan' : 'text-violet'} />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[.18em] text-muted">{project.kind}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em] text-copy">{project.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-copy">{project.description}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{project.details}</p>
                  <div className="mt-8 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="border border-line px-2.5 py-1 font-mono text-xs text-muted">{item}</span>)}</div>
                  {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm text-lime transition hover:text-copy">View code <ArrowUpRight size={16} /></a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}