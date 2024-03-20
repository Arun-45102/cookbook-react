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
        <h3 className="text-center">Cook book using React Context API</h3>
      </div>
      <button className="btn btn-primary" data-aos="fade-in">
        Animate
      </button>
    </>
  );
}

export default App;
