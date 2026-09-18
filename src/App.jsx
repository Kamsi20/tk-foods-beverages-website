import { useEffect } from "react";


import ScrollReveal from "scrollreveal";
import Navbar from "./ui/Navbar";

import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import SingleProduct from "./components/SingleProduct";
import DProduct from "./components/DProduct";
import Home from "./page/home";
import Footer from "./ui/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CategoryPage from "./page/CategoryPage";
import WhatsAppButton from "./ui/WhatsappButton";
import PrivacyPolicy from "./ui/PrivacyPolicy";
import TermsAndConditions from "./ui/TermsAndConditions";


function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 3000,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, // animation happens once
    });
  }, []);
  return (
    <div className="overflow-x-hidden lg:w-[1265px] mx-auto ">
      <>
        <div className="">
          <Navbar />
        </div>

        <main>
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/product" element={<DProduct />} />
            <Route path="/product/:id" element={<SingleProduct />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/category/:category" element={<CategoryPage />} />
             <Route path="/privacypolicy" element={<PrivacyPolicy />} />
             <Route path="/termsandconditions" element={<TermsAndConditions />} />

            
           
          </Routes> 
          <WhatsAppButton />
        </main>
        
          <Footer />
        
      </>
    </div>
  );
}

export default App;
