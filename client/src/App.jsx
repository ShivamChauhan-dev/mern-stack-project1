import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Navbar } from "./components/Navbar"
import { Error } from "./pages/Error";
import { Footer } from "./components/footer/Footer";
import { Logout } from "./pages/Logout";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element = {<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;