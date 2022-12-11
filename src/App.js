import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './container/login/Login'
import NotFound from './container/notFound/NotFound'
import Dashboard from './container/dashboard/Dashboard'
import Exam from './container/exam/Exam'
import ExamFinish from './container/examFinish/ExamFinish'

function App() {
  // const [count, setCount] = useState(60)

  // const timerId = useRef()
  // const prevCo = useRef()

  // useEffect(() => {
  //   //prevCo.current = count
  // }, [count])

  // const handleStart = () => {
  //     timerId.current = setInterval(() => {
  //       setCount(prevCo => prevCo - 1)
  //     }, 1000)
  // }

  // const handleStop = () => {
  //   clearInterval(timerId.current)
  // }


  //console.log(count, prevCo.current);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" component={<Login/>} />
        <Route exact path="/dashboard" component={<Dashboard/>} />
        <Route exact path="/exam" component={<Exam/>} />
        <Route exact path="/examFinish" component={<ExamFinish/>} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
