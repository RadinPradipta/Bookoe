
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import FooterTCA from "./components/FooterTCA.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {
 
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <FooterTCA />
      <Footer />
    </>
  );
}

export default App;
