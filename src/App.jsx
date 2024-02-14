import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import './index.css'
import ProfilePage from "./pages/ProfilePage"
import SearchPage from "./pages/SearchPage"
function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<HomePage />}  />
      <Route path = '/dashboard' element = {<ProfilePage />} />
      <Route path = '/search' element ={<SearchPage />} />
      </Routes>
    </BrowserRouter>
      
   
  )
}

export default App
