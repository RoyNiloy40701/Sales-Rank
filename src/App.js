import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JoinSection from "./components/JoinSection";
import Navbar from "./components/Navbar";
import SalesChatUi from "./components/SalesChatUi";
import TestimonialSlider from "./components/TestimonialSlider";




function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SalesChatUi />
      <Courses />
      <Faq />
      <TestimonialSlider />
      <JoinSection />
      <Footer />
    </>
  );
}

export default App;
