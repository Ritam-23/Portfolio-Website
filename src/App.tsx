import {useEffect,useState} from 'react'
import Loading_Screen from './Components/Loading_Screen/Loading_Screen.js'
import './index.css'
import Navbar from './Components/Navbar/Navbar.js'
import SplashCursor from './Components/Cursor/SplashCursor.js'



const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 7500) 
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
     {loading ? (
  <Loading_Screen />
) : (
  <>
      
    <SplashCursor />
      <Navbar />
  
      
      
  </>
)}

      
      
      
    </>
  )
}

export default App
