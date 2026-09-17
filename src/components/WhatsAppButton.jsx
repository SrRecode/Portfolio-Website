import { MessageCircle } from 'lucide-react'
import { profile } from '../data/profile'

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hi Shams, I saw your portfolio and would like to connect!')
  return <a href={`https://wa.me/${profile.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat with Shams on WhatsApp" className="wa-pulse fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink shadow-[0_12px_30px_rgba(184,243,107,.2)] transition hover:scale-105 hover:bg-copy"><MessageCircle size={21} /></a>
}
