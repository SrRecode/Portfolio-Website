import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from './SocialIcons'
import { profile } from '../data/profile'
import ContactForm from './ContactForm'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="cv-section px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl border border-line bg-panel p-6 md:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-cyan">Have a problem worth solving?</p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-.05em] text-copy md:text-6xl">Let&apos;s make the next build count.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">Tell me what you&apos;re working on. I usually reply within a day — through the form or straight to my inbox.</p>
            <div className="mt-9 grid gap-3">
              <a href={`mailto:${profile.email}`} className="flex min-h-11 items-center gap-3 text-sm text-muted transition hover:text-copy"><Mail size={17} />{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex min-h-11 items-center gap-3 text-sm text-muted transition hover:text-copy"><Phone size={17} />{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-3 text-sm text-muted transition hover:text-copy"><LinkedInIcon size={17} />LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-3 text-sm text-muted transition hover:text-copy"><GithubIcon size={17} />GitHub</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}