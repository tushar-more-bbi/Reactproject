import React from "react";
import "./button.css";
import "../../App"
import "../Form/form"

const Buttons = (props) => {
  
    return (
        <p className="actions">
        <button type="reset" className="buttonAlt" onClick={props.handler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
        </p>
    );

}

export default Buttons;