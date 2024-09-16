import './App.css'
import { BrowserRouter } from "react-router-dom"
import { PageRoutes } from './components/PageRoutes'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <PageRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
