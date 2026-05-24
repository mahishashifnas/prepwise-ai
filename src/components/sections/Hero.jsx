function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-white dark:bg-slate-950">
      
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          AI-Powered Interview Preparation Platform
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Ace Your Next
          <span className="block gradient-text">
            Tech Interview
          </span>
          With AI
        </h1>

        {/* Subheading */}
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Practice aptitude tests, mock interviews, and resume analysis — 
          all powered by AI. Join thousands of candidates who landed their dream jobs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="/dashboard" className="w-full sm:w-auto btn-primary text-base px-8 py-3 rounded-xl">
  Start Preparing Free
</a>
          <a
            href="#features"
            className="w-full sm:w-auto btn-secondary text-base px-8 py-3 rounded-xl"
          >
            See How It Works
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              50K+
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Students Prepared
            </div>
          </div>
          <div className="text-center border-x border-slate-200 dark:border-slate-800">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              95%
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Success Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              200+
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Companies Covered
            </div>
          </div>
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            
            {/* Fake Browser Bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-1 bg-slate-700 rounded-md h-6 ml-2 flex items-center px-3">
                <span className="text-slate-400 text-xs">prepwise.ai/dashboard</span>
              </div>
            </div>

            {/* Fake Dashboard Content */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-4">
                <div className="text-xs text-slate-400 mb-1">Today's Score</div>
                <div className="text-2xl font-bold text-white">87%</div>
                <div className="text-xs text-green-400 mt-1">+12% from yesterday</div>
              </div>
              <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-4">
                <div className="text-xs text-slate-400 mb-1">Questions Solved</div>
                <div className="text-2xl font-bold text-white">142</div>
                <div className="text-xs text-blue-400 mt-1">Keep going!</div>
              </div>
              <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-4">
                <div className="text-xs text-slate-400 mb-1">Day Streak</div>
                <div className="text-2xl font-bold text-white">🔥 7</div>
                <div className="text-xs text-orange-400 mt-1">Personal best!</div>
              </div>
            </div>

            {/* Fake Progress Bar */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-4">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Interview Readiness</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>

          </div>

          {/* Glow Effect Under Card */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-500 opacity-20 blur-xl rounded-full"></div>
        </div>

      </div>
    </section>
  )
}

export default Hero