import HomePage from './components/Homepage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Navbar/Login'
import PasswordPage from './components/PasswordPage/Password'
import ContactForm from './components/Contact/ContactForm'


import Signup from './components/Navbar/Signup'
const App = () => {
  return (
    <>
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="password-recovery/" element={<PasswordPage />} />
          <Route path="Contact" element={<ContactForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
