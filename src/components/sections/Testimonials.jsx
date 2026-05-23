const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'SDE Intern at Amazon',
    avatar: '👩‍💻',
    content: 'PrepWise AI helped me crack my Amazon interview in just 3 weeks. The mock interviews felt so real and the feedback was incredibly detailed.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Frontend Intern at Flipkart',
    avatar: '👨‍💻',
    content: 'The aptitude practice module is amazing. I went from scoring 60% to 92% in just 2 weeks of consistent practice.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'Data Analyst at TCS',
    avatar: '👩‍🎓',
    content: 'The resume analyzer gave me suggestions that completely transformed my resume. I started getting callbacks immediately after applying the changes.',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Loved by
            <span className="gradient-text"> Thousands of Students</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Join students who already landed their dream internships and jobs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col gap-4">

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">
                    {t.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials