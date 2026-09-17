import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const metaColor = (theme) => {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f7fa' : '#0b0d12')
}

const initialTheme = () => document.documentElement.getAttribute('data-theme') || 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    metaColor(theme)
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button type="button" onClick={() => setTheme(next)} aria-label={`Switch to ${next} mode`} className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-copy transition hover:border-cyan hover:text-cyan">
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}