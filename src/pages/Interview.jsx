import { useState, useEffect, useRef } from 'react'
import ChatMessage from '../components/sections/ChatMessage'
import TypingIndicator from '../components/sections/TypingIndicator'

const interviewTypes = [
  { id: 'hr', label: 'HR Round', icon: '👔', desc: 'Behavioral and situational questions', color: 'blue' },
  { id: 'technical', label: 'Technical Round', icon: '💻', desc: 'Frontend and DSA concepts', color: 'purple' },
  { id: 'managerial', label: 'Managerial Round', icon: '🎯', desc: 'Leadership and problem solving', color: 'green' },
]

const interviewQuestions = {
  hr: [
    "Hello! I'm your AI interviewer today. Let's start with a classic — Tell me about yourself.",
    "Great! Now, why do you want to work at our company specifically?",
    "Interesting! Can you describe a situation where you had to work under pressure?",
    "Good answer! Where do you see yourself in 5 years?",
    "Last question — What is your greatest weakness and how are you working on it?",
  ],
  technical: [
    "Welcome to the technical round! Let's begin — Can you explain the difference between let, const, and var in JavaScript?",
    "Good explanation! Now tell me — What is the Virtual DOM in React and why is it useful?",
    "Nice! Can you explain what CSS Flexbox is and when would you use it?",
    "Good! What is the difference between == and === in JavaScript?",
    "Final question — Can you explain what an API is and how you would fetch data from one in React?",
  ],
  managerial: [
    "Welcome! Let's start — Tell me about a time you led a team project or group assignment.",
    "Impressive! How do you handle disagreements with teammates or colleagues?",
    "Good approach! Describe a time when you had to learn something completely new in a short time.",
    "Nice! How do you prioritize tasks when you have multiple deadlines?",
    "Last one — What does success mean to you in a professional context?",
  ],
}

const aiFeedback = [
  { minLength: 150, feedback: 'excellent' },
  { minLength: 80, feedback: 'good' },
  { minLength: 0, feedback: 'improve' },
]

function Interview() {
  const [phase, setPhase] = useState('select')
  const [type, setType] = useState(null)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [score, setScore] = useState(0)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const startInterview = (selectedType) => {
    setType(selectedType)
    setPhase('interview')
    setQuestionIndex(0)
    setScore(0)
    setIsFinished(false)

    const firstQuestion = interviewQuestions[selectedType][0]
    setMessages([
      {
        id: 1,
        text: firstQuestion,
        isUser: false,
      }
    ])
  }

  const getFeedback = (text) => {
    for (const f of aiFeedback) {
      if (text.length >= f.minLength) return f.feedback
    }
    return 'improve'
  }

  const handleSend = () => {
    if (!input.trim() || isTyping || isFinished) return

    const userMessage = {
      id: messages.length + 1,
      text: input.trim(),
      isUser: true,
      feedback: getFeedback(input.trim()),
    }

    if (userMessage.feedback === 'excellent') setScore(s => s + 3)
    else if (userMessage.feedback === 'good') setScore(s => s + 2)
    else setScore(s => s + 1)

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    const nextIndex = questionIndex + 1
    const questions = interviewQuestions[type]

    setTimeout(() => {
      setIsTyping(false)

      if (nextIndex >= questions.length) {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "That's all the questions for today! You did a great job. Review your answers below and keep practicing. All the best! 🎉",
          isUser: false,
        }])
        setIsFinished(true)
      } else {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: questions[nextIndex],
          isUser: false,
        }])
        setQuestionIndex(nextIndex)
      }
    }, 2000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const maxScore = type ? interviewQuestions[type].length * 3 : 1
  const percentage = Math.round((score / maxScore) * 100)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">

      {/* Navbar */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/dashboard" className="font-bold text-xl text-slate-900 dark:text-white">
            Prep<span className="gradient-text">Wise</span> AI
          </a>
          {phase === 'interview' && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {interviewTypes.find(t => t.id === type)?.label}
              </span>
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  Live Interview
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Type Selection */}
      {phase === 'select' && (
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🤖
              </div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
                AI Mock Interview
              </h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                Practice with our AI interviewer. Get real-time feedback on your answers and improve your confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interviewTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => startInterview(t.id)}
                  className="card text-left hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700"
                >
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {t.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {t.desc}
                  </p>
                  <div className="text-xs text-slate-400">
                    5 Questions • AI Feedback
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interview Chat */}
      {phase === 'interview' && (
        <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 py-6">

          {/* Score Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 mb-4 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Performance
            </span>
            <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {percentage}%
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4 min-h-0 max-h-96 pr-2">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                isUser={msg.isUser}
              />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={bottomRef}></div>
          </div>

          {/* Input Area */}
          {!isFinished ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-3 flex items-end gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your answer here... (Press Enter to send)"
                rows={3}
                className="flex-1 resize-none bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="btn-primary px-4 py-2 rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              >
                Send →
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => startInterview(type)}
                className="flex-1 btn-primary py-3 rounded-xl"
              >
                Try Again
              </button>
              <a
                href="/dashboard"
                className="flex-1 btn-secondary py-3 rounded-xl text-center"
              >
                Back to Dashboard
              </a>
            </div>
          )}

          {/* Tip */}
          {!isFinished && (
            <p className="text-xs text-slate-400 text-center mt-2">
              💡 Tip: Longer, detailed answers get higher scores
            </p>
          )}

        </div>
      )}

    </div>
  )
}

export default Interview