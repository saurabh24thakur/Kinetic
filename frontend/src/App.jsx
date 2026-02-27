import { useState } from 'react'
import './App.css'
import LandingPage from './pages/landingPage/landingPage.jsx'
import WorkSpace from './pages/workspace/WorkSpace.jsx';
import { BrowserRouter,Route, Routes} from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/workspace" element={<WorkSpace/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
    </BrowserRouter>
      
    </>
  )
}

export default App
