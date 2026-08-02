import { useState } from "react";

import "./Keyboard.css";

export default function Keyboard(props) {
  const keyboard = Object.entries(props.keys).map(([char, data]) => {
    let backgroundColor = "";
    if (data.correct === true) {
      backgroundColor = "#1AB454";
    } else if (data.correct === false) {
      backgroundColor = "#DB4547";
    } else {
      backgroundColor = "#F3B627";
    }
    return (
      <button
        key={char}
        id={char}
        className="char-box"
        style={{ background: backgroundColor }}
        disabled={data.correct !== null}
        onClick={props.checkLetter}
      >
        {char}
      </button>
    );
  });

  return <div className="keyboard">{keyboard}</div>;
}
