function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none w-fit shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-xs text-slate-400 ml-2">AI is thinking...</span>
    </div>
  )
}

export default TypingIndicator