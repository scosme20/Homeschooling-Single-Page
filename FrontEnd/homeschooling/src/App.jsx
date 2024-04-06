import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/home'
import Student from './pages/student/student'
import Classes from  './pages/classes/classes'
import Disciplines from './pages/disciplines/disciplines'
import Teachers  from './pages/teachers/teachers'
import Root from './root'

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "student",
        element: <Student />,

      },
      {
        path: "disciplines",
        element: <Disciplines />,

      },
      {
        path: "classes",
        element: <Classes />,

      },
      {
        path: "teachers",
        element: <Teachers/>,
      },
      {
        path: "home",
        element: <Home />,

      },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App
