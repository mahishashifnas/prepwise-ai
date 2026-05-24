import { useState } from 'react'

const skillsData = {
  matched: [
    'React.js', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs'
  ],
  missing: [
    'TypeScript', 'Node.js', 'System Design', 'Docker'
  ],
}

const suggestions = [
  {
    icon: '📝',
    title: 'Add a stronger summary',
    desc: 'Your resume summary is too generic. Add specific technologies and achievements.',
    priority: 'High',
    color: 'red',
  },
  {
    icon: '🎯',
    title: 'Quantify your achievements',
    desc: 'Instead of "improved performance", say "improved load time by 40%".',
    priority: 'High',
    color: 'red',
  },
  {
    icon: '🔑',
    title: 'Add missing keywords',
    desc: 'Add TypeScript, Node.js and System Design to pass ATS filters.',
    priority: 'Medium',
    color: 'yellow',
  },
  {
    icon: '📄',
    title: 'Keep resume to 1 page',
    desc: 'For freshers, a single page resume performs 60% better with ATS systems.',
    priority: 'Medium',
    color: 'yellow',
  },
  {
    icon: '🔗',
    title: 'Add GitHub and LinkedIn',
    desc: 'Recruiters check GitHub for 80% of frontend developer applications.',
    priority: 'Low',
    color: 'green',
  },
]

const scoreBreakdown = [
  { label: 'Keywords Match', score: 72, color: 'blue' },
  { label: 'Formatting', score: 85, color: 'green' },
  { label: 'Readability', score: 90, color: 'green' },
  { label: 'ATS Compatibility', score: 68, color: 'yellow' },
  { label: 'Impact Statements', score: 55, color: 'red' },
]

const priorityColor = {
  High: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400',
  Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400',
  Low: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400',
}

const barColor = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
}

function Resume() {
  const [phase, setPhase] = useState('upload')
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFile = (file) => {
    if (!file) return
    setFileName(file.name)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    handleFile(file)
  }

  const handleAnalyze = () => {
    if (!fileName) return
    setLoading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          setPhase('result')
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Navbar */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/dashboard" className="font-bold text-xl text-slate-900 dark:text-white">
            Prep<span className="gradient-text">Wise</span> AI
          </a>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Resume Analyzer
          </span>
        </div>
      </nav>

      {/* Upload Phase */}
      {phase === 'upload' && (
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
              📄
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Resume Analyzer
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Upload your resume and get an instant ATS score, skill gap analysis, and improvement suggestions.
            </p>
          </div>

          {/* Upload Box */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 cursor-pointer ${
              dragging
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                : 'border-slate-300 dark:border-slate-700 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900'
            }`}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <input
              id="fileInput"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileInput}
            />

            <div className="text-5xl mb-4">
              {fileName ? '✅' : '📤'}
            </div>

            {fileName ? (
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {fileName}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  File ready for analysis!
                </p>
              </div>
            ) : (
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Drop your resume here
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  or click to browse files
                </p>
                <p className="text-xs text-slate-400">
                  Supports PDF, DOC, DOCX
                </p>
              </div>
            )}
          </div>

          {/* Loading Progress */}
          {loading && (
            <div className="mt-6 card">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Analyzing your resume...
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex flex-col gap-1 mt-4">
                {progress >= 20 && <p className="text-xs text-slate-500">✅ Parsing resume content...</p>}
                {progress >= 40 && <p className="text-xs text-slate-500">✅ Checking ATS compatibility...</p>}
                {progress >= 60 && <p className="text-xs text-slate-500">✅ Analyzing keywords...</p>}
                {progress >= 80 && <p className="text-xs text-slate-500">✅ Generating suggestions...</p>}
                {progress >= 100 && <p className="text-xs text-green-600">✅ Analysis complete!</p>}
              </div>
            </div>
          )}

          {/* Analyze Button */}
          {!loading && (
            <button
              onClick={handleAnalyze}
              disabled={!fileName}
              className="w-full btn-primary py-4 rounded-xl text-base font-semibold mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Analyze My Resume →
            </button>
          )}

          {/* Features List */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: '🎯', label: 'ATS Score' },
              { icon: '🔍', label: 'Skill Gap' },
              { icon: '💡', label: 'Suggestions' },
            ].map((f) => (
              <div key={f.label} className="text-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="text-2xl mb-1">{f.icon}</div>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Result Phase */}
      {phase === 'result' && (
        <div className="max-w-4xl mx-auto px-4 py-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Resume Analysis Report
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {fileName}
              </p>
            </div>
            <button
              onClick={() => { setPhase('upload'); setFileName(null) }}
              className="btn-secondary text-sm py-2"
            >
              Upload New
            </button>
          </div>

          {/* Overall Score */}
          <div className="card mb-6 bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Overall ATS Score</p>
                <div className="text-6xl font-bold mb-2">74</div>
                <p className="text-blue-100 text-sm">
                  Good score! A few improvements can push it above 90.
                </p>
              </div>
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10"/>
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - 74 / 100)}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">74%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="card mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Score Breakdown
            </h2>
            <div className="flex flex-col gap-4">
              {scoreBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.score}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`${barColor[item.color]} h-2 rounded-full transition-all duration-700`}
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* Matched Skills */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                ✅ Matched Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skillsData.matched.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                ❌ Missing Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skillsData.missing.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Suggestions */}
          <div className="card mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              💡 Improvement Suggestions
            </h2>
            <div className="flex flex-col gap-3">
              {suggestions.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {s.title}
                      </p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColor[s.priority]}`}>
                        {s.priority}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a href="/dashboard" className="flex-1 btn-primary py-3 rounded-xl text-center">
              Back to Dashboard
            </a>
            <button
              onClick={() => { setPhase('upload'); setFileName(null) }}
              className="flex-1 btn-secondary py-3 rounded-xl"
            >
              Analyze Another
            </button>
          </div>

        </div>
      )}

    </div>
  )
}

export default Resume