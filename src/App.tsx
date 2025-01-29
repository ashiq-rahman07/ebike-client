
import MainLayout from "./components/layout/MainLayout"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, []);
  return (
    <div>
     
      <MainLayout/>
    </div>
  )
}

export default App
