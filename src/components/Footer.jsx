import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return <footer className="border-t border-line px-6 py-7 transition-colors duration-500"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-muted sm:flex-row"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#" className="flex items-center gap-2 hover:text-copy">Back to top <ArrowUpRight size={14} /></a></div></footer>
}
