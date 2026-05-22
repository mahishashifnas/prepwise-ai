import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Routes>
          <Route path="/" element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold gradient-text mb-4">
                  PrepWise AI
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                  Phase 1 Complete ✅ — Setup Successful
                </p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App