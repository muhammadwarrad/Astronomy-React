import axios from "axios";

export default function Modal({ astro, display, setToggle, setToggleData }) {
  const handleDelete = async () => {
    await axios.delete(
      `https://api-project-production-6021.up.railway.app/apod/${astro.date}`
    );
    setToggle(false);
    setToggleData(prev => !prev)
  };

  return (
    <div className="modal" onClick={display}>
      <div className="modal-cont">
        <ul>
          <li>Title: {astro.title}</li>
          <li>Date: {astro.date}</li>
          <li className="moe">Explanation: {astro.explanation} </li>
          <button className="Delete" onClick={handleDelete}>
            delete
          </button>
        </ul>
      </div>
    </div>
  );
}
