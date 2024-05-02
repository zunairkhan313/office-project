import { NavLink } from "react-router-dom";
import "./button.css";

export default function Button(props) {
    const { label, buttonLink, onclick,} = props
  return (
    <>
      <div>
        <button className="button" onClick={onclick}>
          <NavLink to={buttonLink}><span class="button-content">{label}</span></NavLink>
        </button>
      </div>
    </>
  );
}
