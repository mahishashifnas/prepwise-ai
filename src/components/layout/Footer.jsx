import { RiBrainLine } from 'react-icons/ri'

function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <RiBrainLine className="text-white text-sm" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">
              Prep<span className="gradient-text">Wise</span> AI
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © 2025 PrepWise AI. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer