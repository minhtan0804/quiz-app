import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from './container/notFound/NotFound'
// import Dashboard from './container/dashboard/Dashboard'
import Dashboard from './container/dashboard/Dashboard'
import Exam from './container/exam/Exam'
import ExamFinish from './container/examFinish/ExamFinish'
import Login from "./container/login/Login"

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: '/exam',
    element: <Exam />,
  },
  {
    path: '/examFinish',
    element: <ExamFinish />,
  },
  {
    path: '/',
    element: <div>Helllo</div>,
  },
  {
    path: '*',
    element: <NotFound />,
  }
])

function App() {  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
