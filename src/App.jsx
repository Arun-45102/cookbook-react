import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(function () {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <p className="text-center">React cookbook</p>
      </div>
      <button className="btn btn-primary" data-aos="fade-in">
        Animate
      </button>
    </>
  );
}

export default App;
