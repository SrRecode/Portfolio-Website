import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-copy">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[55vh]" />}><About /></Suspense>
        <Suspense fallback={<div className="min-h-[45vh]" />}><Skills /></Suspense>
        <Suspense fallback={<div className="min-h-[70vh]" />}><Projects /></Suspense>
        <Suspense fallback={<div className="min-h-[70vh]" />}><Contact /></Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App