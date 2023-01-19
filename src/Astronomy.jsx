import Modal from "./Modal.jsx";
import { useState } from "react";


export default function Astronomy({ astronomy = [], setToggleData }) {
  const [toggle, setToggle] = useState(false);
  const [displayItem, setDisplayItem] = useState({});

  const display = (astro) => {
    if (!toggle) return setToggle(true), setDisplayItem(astro);
    return setToggle(false);
  };

  return (
    <div className="app">
      {toggle && (
        <Modal setToggleData={setToggleData} astro={displayItem} display={display} setToggle={setToggle} />
      )}
      {astronomy.map((astro, index) => {
      

        return (
          <>
            <div className="gridContainer">
              <img
                onClick={() => display(astro)}
                className="image"
                src={astro.url}
                key={index}
              />
              <p className="title">{astro.title}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
