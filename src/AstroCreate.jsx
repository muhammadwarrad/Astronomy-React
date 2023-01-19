import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAstro } from "../src/services/astro.js";
import "./App.css";
export default function CharacterAstro({setToggle}) {
  const [astro, setAstro] = useState({
    title: "",
    explanation: "",
    url:"",
    date:"",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAstro(astro);
    setToggle(prev => !prev)
    navigate("/", { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value)

    setAstro((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  return (
   
    <div>
      <h1 className="create">Astro Create Screen</h1>
      <form className="create-form" onSubmit={handleSubmit}>
      
        <input
          type="text"
          placeholder="Please insert your Title"
          name="title"
          value={astro.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your Date"
          name="date"
          value={astro.date}
          onChange={handleChange}
        />
        <input
          type="url"
          placeholder="Please insert your URL"
          name="url"
          value={astro.url}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please insert your explanation"
          name="explanation"
          value={astro.explanation}
          onChange={handleChange}
        />
       
        <button type="submit">Create Your astro!!!</button>
      </form>
    </div>
   
  );
}
