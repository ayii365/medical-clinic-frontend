import "./styles/app-container.css"
import Navbar from "./navbar/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import ContactUsPage from "./pages/ContactUsPage"
import PractitionersPage from "./pages/PractitionersPage"
import BookOnlinePage from "./pages/BookOnlinePage"
import LoginPage from './pages/LoginPage'
import MyAccountPage from "./pages/MyAccountPage"
import Footer from "./footer/footer"
import {  Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage/>} />

        {/* About Page */}
        <Route path="/About" element={<AboutPage/>} />
        
        {/* Services Page */}
        <Route path="/Services" element={<ServicesPage/>} />

        {/* Contact Us Page */}
        <Route path="/Contact" element={<ContactUsPage/>} />

        {/* Practitioners Page */}
        <Route path="/Practitioners" element={<PractitionersPage/>} />

        {/* Book Online Page */}
        <Route path="/Book" element={<BookOnlinePage/>} />

        {/* My Account (Login/Signup) Page */}
        <Route path="/Account" element={<LoginPage/>} />

        {/* My Account (Details) Page */}
        <Route path="/My-Account" element={<MyAccountPage/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
