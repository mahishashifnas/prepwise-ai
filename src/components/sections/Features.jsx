const features = [
  {
    icon: '🧠',
    title: 'AI Mock Interviews',
    description: 'Practice with our AI interviewer that gives real-time feedback on your answers, tone, and confidence.',
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Aptitude Practice',
    description: 'Timed quizzes across quantitative, logical, and verbal reasoning with detailed explanations.',
    color: 'purple',
  },
  {
    icon: '📄',
    title: 'Resume Analyzer',
    description: 'Upload your resume and get an ATS score, skill gap analysis, and improvement suggestions instantly.',
    color: 'green',
  },
  {
    icon: '🔥',
    title: 'Daily Streaks',
    description: 'Stay consistent with daily challenges, streak tracking, and motivational reminders.',
    color: 'orange',
  },
  {
    icon: '🗺️',
    title: 'Interview Roadmap',
    description: 'Personalized learning path based on your target company, role, and current skill level.',
    color: 'pink',
  },
  {
    icon: '📝',
    title: 'Smart Notes',
    description: 'Bookmark questions, add personal notes, and review your weak areas with smart suggestions.',
    color: 'teal',
  },
]

const colorMap = {
  blue: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
  green: 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400',
  orange: 'bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400',
  pink: 'bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400',
  teal: 'bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400',
}

function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Everything You Need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Prepare Smarter,
            <span className="gradient-text"> Not Harder</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            All the tools you need to crack your dream company interview — in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card group hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${colorMap[feature.color]}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features