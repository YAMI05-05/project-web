import './App.css'

import { Form, Route, BrowserRouter as Router, Routes } from "react-router"
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Service from './pages/Service'
import About from './pages/About'
import Register from './pages/Register'
import Nav from './pages/component/Nav'
import Forms from './pages/Forms'
import { Toaster } from 'react-hot-toast'
import ListandKeys from './pages/ListandKeys'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserDashboard from './pages/UserDashboard'


function App() {
  

  return (
    <Router>
      < Toaster/>
      <Nav/>
      <Routes>
       <Route path='' element={<Homepage></Homepage>} />
       <Route path='contact' element={<Contact></Contact>} />
      <Route path='product' element={<Product></Product>} />
      <Route path='service' element={<Service></Service>} />
      <Route path='about' element={<About></About>} />
      <Route path='register' element={<Register></Register>} />
      <Route path='/form' element={<Forms></Forms>}/>
      <Route path='/list' element={<ListandKeys></ListandKeys>} />

      <Route path='/login' element={<Login></Login>}/>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
      <Route path='/user-dashboard' element={<UserDashboard></UserDashboard>}/>


      </Routes>
    </Router>
  )
}

export default App