import { useState, useEffect } from 'react'
import { RiMenuLine, RiCloseLine, RiBrainLine } from 'react-icons/ri'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <RiBrainLine className="text-white text-lg" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              Prep<span className="gradient-text">Wise</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <a href="/login" className="btn-secondary text-sm">
              Log in
            </a>
            <a href="/signup" className="btn-primary text-sm">
              Get Started Free
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              {isOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-200 dark:border-slate-800" />
            <a href="/login" className="btn-secondary text-sm text-center">
              Log in
            </a>
            <a href="/dashboard" className="btn-primary text-sm">
  Get Started Free
</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar