import { useState } from 'react'

const user = {
  name: 'Rahul Verma',
  role: 'Aspiring Frontend Developer',
  avatar: '👨‍💻',
  streak: 7,
  score: 87,
  solved: 142,
  rank: 234,
}

const stats = [
  { label: 'Questions Solved', value: '142', icon: '📊', color: 'blue', change: '+12 today' },
  { label: 'Average Score', value: '87%', icon: '🎯', color: 'green', change: '+5% this week' },
  { label: 'Day Streak', value: '🔥 7', icon: '🔥', color: 'orange', change: 'Personal best!' },
  { label: 'Global Rank', value: '#234', icon: '🏆', color: 'purple', change: 'Top 10%' },
]

const recentActivities = [
  { title: 'Completed Quantitative Quiz', time: '2 hours ago', score: '92%', icon: '📝' },
  { title: 'AI Mock Interview - HR Round', time: '5 hours ago', score: '85%', icon: '🤖' },
  { title: 'Resume Analysis', time: 'Yesterday', score: '78%', icon: '📄' },
  { title: 'Logical Reasoning Practice', time: 'Yesterday', score: '90%', icon: '🧠' },
]

const roadmap = [
  { title: 'Aptitude Basics', done: true },
  { title: 'Logical Reasoning', done: true },
  { title: 'Technical DSA', done: false },
  { title: 'HR Interview', done: false },
  { title: 'Mock Interviews', done: false },
]

const colorMap = {
  blue: 'bg-blue-50 dark:bg-blue-950 text-blue-600',
  green: 'bg-green-50 dark:bg-green-950 text-green-600',
  orange: 'bg-orange-50 dark:bg-orange-950 text-orange-600',
  purple: 'bg-purple-50 dark:bg-purple-950 text-purple-600',
}

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Top Navbar */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold text-xl text-slate-900 dark:text-white">
            Prep<span className="gradient-text">Wise</span> AI
          </span>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {user.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {user.role}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg">
              {user.avatar}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <p className="text-blue-100 text-sm font-medium mb-1">
              Good morning! 👋
            </p>
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-blue-100 text-sm mb-4">
              You're on a {user.streak}-day streak! Keep it up to reach your goal.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs text-blue-200 mb-1">
                  Interview Readiness
                </p>
                <div className="w-48 bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: '78%' }}
                  ></div>
                </div>
                <p className="text-xs text-blue-200 mt-1">78% Ready</p>
              </div>
              <a
                href="/aptitude"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Continue Practice →
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="card">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 ${colorMap[stat.color]}`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {stat.label}
              </p>
              <p className="text-xs font-medium text-green-500">
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* Recent Activity */}
          <div className="lg:col-span-2 card">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="flex flex-col gap-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-xl shadow-sm">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-green-500">
                    {activity.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Interview Roadmap
            </h2>
            <div className="flex flex-col gap-3">
              {roadmap.map((item, index) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    item.done
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                  }`}>
                    {item.done ? '✓' : index + 1}
                  </div>
                  <span className={`text-sm ${
                    item.done
                      ? 'text-slate-400 line-through'
                      : 'text-slate-900 dark:text-white font-medium'
                  }`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 btn-primary text-sm py-2 rounded-lg">
              Continue Learning
            </button>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Practice Aptitude', icon: '📊', color: 'blue', href: '/aptitude' },
            { title: 'Mock Interview', icon: '🤖', color: 'purple', href: '/interview' },
            { title: 'Analyze Resume', icon: '📄', color: 'green', href: '/resume' },
            { title: 'Daily Challenge', icon: '⚡', color: 'orange', href: '#' },
          ].map((action) => (
            <a
              key={action.title}
              href={action.href}
              className="card text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 ${colorMap[action.color]}`}>
                {action.icon}
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {action.title}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Dashboard