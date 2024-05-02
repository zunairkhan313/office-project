import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Screens/home"
import AboutUs from "../Screens/about"
import Product from "../Screens/products"
import ContactUs from "../Screens/Contact/contact"
import Navbar2 from "../Components/Navbar/Navbar2/navbar2"
import Navbar from "../Components/Navbar/Navbar1/navbar"

export default function AppRouter() {
    return (
        <>
            <Router>
                <Navbar2 />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutUs" element={<AboutUs />}/>
                    <Route path="/product" element={<Product />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                </Routes>
            </Router >
        </>
    )
}