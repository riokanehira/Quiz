import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import Home from './pages/homePages'
import QuizPages from './pages/quizPages'
import ResultPages from './pages/resultPages'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element ={<Home />}/>
      <Route path={ROUTES.QUIZ} element ={<QuizPages />}/>
      <Route path={ROUTES.RESULT} element ={<ResultPages />}/>
    </Routes>

    </BrowserRouter>
  ) 
}

export default App 
