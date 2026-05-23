function ResultScreen({ score, total, answers, questions, onRetry, onHome }) {
  const percentage = Math.round((score / total) * 100)

  const getMessage = () => {
    if (percentage >= 80) return { text: 'Excellent Work!', emoji: '🏆', color: 'text-green-500' }
    if (percentage >= 60) return { text: 'Good Job!', emoji: '👍', color: 'text-blue-500' }
    if (percentage >= 40) return { text: 'Keep Practicing!', emoji: '💪', color: 'text-yellow-500' }
    return { text: 'Never Give Up!', emoji: '🔥', color: 'text-red-500' }
  }

  const message = getMessage()

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">

      {/* Score Card */}
      <div className="card text-center mb-6">
        <div className="text-6xl mb-4">{message.emoji}</div>
        <h2 className={`text-3xl font-bold mb-2 ${message.color}`}>
          {message.text}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          You scored {score} out of {total} questions correctly
        </p>

        {/* Score Circle */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60" cy="60" r="50"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="10"
            />
            <circle
              cx="60" cy="60" r="50"
              fill="none"
              stroke={percentage >= 80 ? '#22c55e' : percentage >= 60 ? '#3b82f6' : percentage >= 40 ? '#eab308' : '#ef4444'}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (1 - percentage / 100)}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-3">
            <p className="text-2xl font-bold text-green-600">{score}</p>
            <p className="text-xs text-green-600">Correct</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-3">
            <p className="text-2xl font-bold text-red-500">{total - score}</p>
            <p className="text-xs text-red-500">Wrong</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
            <p className="text-2xl font-bold text-blue-600">{total}</p>
            <p className="text-xs text-blue-600">Total</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onRetry}
            className="flex-1 btn-primary py-3 rounded-xl"
          >
            Try Again
          </button>
          <button
            onClick={onHome}
            className="flex-1 btn-secondary py-3 rounded-xl"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Answer Review */}
      <div className="card">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Answer Review
        </h3>
        <div className="flex flex-col gap-4">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className={`p-4 rounded-xl border-2 ${
                answers[index] === q.correct
                  ? 'border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800'
                  : 'border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">
                  {answers[index] === q.correct ? '✅' : '❌'}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    {q.question}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                    Your answer: <span className="font-medium">{q.options[answers[index]] ?? 'Not answered'}</span>
                  </p>
                  {answers[index] !== q.correct && (
                    <p className="text-xs text-green-700 dark:text-green-400 mb-1">
                      Correct answer: <span className="font-medium">{q.options[q.correct]}</span>
                    </p>
                  )}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
                    💡 {q.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ResultScreen