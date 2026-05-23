import { useState, useEffect } from 'react'
import { questions } from '../utils/questions'
import QuizCard from '../components/sections/QuizCard'
import ResultScreen from '../components/sections/ResultScreen'

const categories = [
  { id: 'quantitative', label: 'Quantitative', icon: '📊', color: 'blue', desc: 'Numbers, percentages, ratios' },
  { id: 'logical', label: 'Logical Reasoning', icon: '🧠', color: 'purple', desc: 'Patterns, sequences, puzzles' },
  { id: 'verbal', label: 'Verbal Ability', icon: '📝', color: 'green', desc: 'Grammar, vocabulary, comprehension' },
]

const colorMap = {
  blue: 'border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800',
  purple: 'border-purple-200 bg-purple-50 dark:bg-purple-950 dark:border-purple-800',
  green: 'border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800',
}

const TIME_PER_QUESTION = 30

function Aptitude() {
  const [phase, setPhase] = useState('select')
  const [category, setCategory] = useState(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [score, setScore] = useState(0)

  const quizQuestions = category ? questions[category] : []

  useEffect(() => {
    if (phase !== 'quiz') return
    if (timeLeft === 0) {
      handleNext()
      return
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, phase])

  const handleStart = (cat) => {
    setCategory(cat)
    setPhase('quiz')
    setCurrentQ(0)
    setAnswers([])
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    setScore(0)
  }

  const handleSelect = (index) => {
    setSelected(index)
  }

  const handleNext = () => {
    const newAnswers = [...answers, selected]
    const isCorrect = selected === quizQuestions[currentQ].correct
    if (isCorrect) setScore(s => s + 1)

    if (currentQ + 1 >= quizQuestions.length) {
      setAnswers(newAnswers)
      setPhase('result')
    } else {
      setAnswers(newAnswers)
      setCurrentQ(q => q + 1)
      setSelected(null)
      setTimeLeft(TIME_PER_QUESTION)
    }
  }

  const handleRetry = () => {
    handleStart(category)
  }

  const handleHome = () => {
    setPhase('select')
    setCategory(null)
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
            Aptitude Practice
          </span>
        </div>
      </nav>

      {/* Category Selection */}
      {phase === 'select' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Choose a Category
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Select a category to start your timed quiz. Each question has 30 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleStart(cat.id)}
                className={`card text-left border-2 hover:scale-105 transition-transform duration-200 ${colorMap[cat.color]}`}
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {cat.label}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {cat.desc}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>5 Questions</span>
                  <span>30 sec each</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quiz Phase */}
      {phase === 'quiz' && quizQuestions.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 py-8">

          {/* Timer and Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {categories.find(c => c.id === category)?.label}
              </span>
              <div className={`flex items-center gap-2 text-sm font-bold ${
                timeLeft <= 10 ? 'text-red-500' : 'text-slate-900 dark:text-white'
              }`}>
                ⏱️ {timeLeft}s
              </div>
            </div>

            {/* Timer Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ${
                  timeLeft <= 10 ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{ width: `${(timeLeft / TIME_PER_QUESTION) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Quiz Card */}
          <QuizCard
            question={quizQuestions[currentQ]}
            selected={selected}
            onSelect={handleSelect}
            questionNumber={currentQ + 1}
            total={quizQuestions.length}
          />

          {/* Next Button */}
          <div className="flex justify-end mt-6 max-w-2xl mx-auto">
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="btn-primary px-8 py-3 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {currentQ + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question →'}
            </button>
          </div>

        </div>
      )}

      {/* Result Phase */}
      {phase === 'result' && (
        <ResultScreen
          score={score}
          total={quizQuestions.length}
          answers={answers}
          questions={quizQuestions}
          onRetry={handleRetry}
          onHome={handleHome}
        />
      )}

    </div>
  )
}

export default Aptitude