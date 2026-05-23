const steps = [
  {
    step: '01',
    title: 'Create Your Profile',
    description: 'Sign up and tell us your target role, dream companies, and current skill level.',
    icon: '👤',
  },
  {
    step: '02',
    title: 'Follow Your Roadmap',
    description: 'Get a personalized study plan with daily goals, quizzes, and mock interviews.',
    icon: '🗺️',
  },
  {
    step: '03',
    title: 'Track and Improve',
    description: 'Monitor your progress, review weak areas, and improve your score every day.',
    icon: '📈',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get Started in
            <span className="gradient-text"> 3 Simple Steps</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            No complicated setup. Just sign up and start preparing immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>

          {steps.map((item, index) => (
            <div key={item.step} className="text-center relative">

              {/* Step Number Circle */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                <span className="text-3xl mb-1">{item.icon}</span>
                <span className="text-xs font-bold text-blue-200">{item.step}</span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks