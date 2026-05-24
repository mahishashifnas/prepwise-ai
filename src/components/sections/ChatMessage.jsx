function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>

      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
        isUser
          ? 'bg-gradient-to-br from-blue-500 to-purple-600'
          : 'bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600'
      }`}>
        {isUser ? '👤' : '🤖'}
      </div>

      {/* Message Bubble */}
      <div className={`max-w-lg ${isUser ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
        <span className="text-xs text-slate-400 px-1">
          {isUser ? 'You' : 'PrepWise AI'}
        </span>
        <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white rounded-tr-none'
            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm'
        }`}>
          {message.text}
        </div>

        {/* Feedback Badge */}
        {message.feedback && (
          <div className="flex items-center gap-2 mt-1 px-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              message.feedback === 'excellent' ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400' :
              message.feedback === 'good' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400' :
              'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400'
            }`}>
              {message.feedback === 'excellent' ? '⭐ Excellent answer' :
               message.feedback === 'good' ? '👍 Good answer' :
               '💡 Could be better'}
            </span>
          </div>
        )}

      </div>
    </div>
  )
}

export default ChatMessage