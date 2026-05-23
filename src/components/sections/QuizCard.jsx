function QuizCard({ question, selected, onSelect, questionNumber, total }) {
  return (
    <div className="card max-w-2xl mx-auto">

      {/* Question Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Question {questionNumber} of {total}
        </span>
        <div className="flex gap-1">
          {[...Array(total)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors duration-300 ${
                i < questionNumber
                  ? 'bg-blue-500'
                  : 'bg-slate-200 dark:bg-slate-700'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Question Text */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 leading-relaxed">
        {question.question}
      </h3>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium text-sm ${
              selected === index
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 ${
              selected === index
                ? 'bg-blue-500 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
            }`}>
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>

    </div>
  )
}

export default QuizCard