import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import './index.css'
import ProfilePage from "./pages/ProfilePage"
import SearchPage from "./pages/SearchPage"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import CartPage from "./pages/CartPage"
function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<HomePage />}  />
      <Route path = '/dashboard' element = {<ProfilePage />} />
      <Route path = '/search' element ={<SearchPage />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
      
   
  )
}

export default App
