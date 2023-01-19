import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import Astronomy from "./Astronomy.jsx";
import { Routes, Route } from "react-router-dom";
import AstroCreate from "./AstroCreate.jsx";

function App() {
  const [astronomy, setAstronomy] = useState([]);
  const [toggleData, setToggleData] = useState(false)


  useEffect(() => {
    fetchAstronomy();
  }, [toggleData]);

  const fetchAstronomy = () => {
    fetch(`https://api-project-production-6021.up.railway.app/apod`)
      .then((res) => res.json())
      .then((data) => setAstronomy(data));
  };

  console.log(astronomy);
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Astronomy setToggleData={setToggleData} astronomy={astronomy}/>}/>
        <Route path="/AstroCreate" element={<AstroCreate setToggle={setToggleData} />} />
      </Routes>
    </main>
  );
}
export default App;
