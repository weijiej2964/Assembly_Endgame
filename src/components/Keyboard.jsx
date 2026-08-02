import { useState } from "react";

import alphabet from "../assets/alphabet";
import "./Keyboard.css";

export default function Keyboard() {
  const [keys, setKeys] = useState(alphabet);

  const keyboard = keys.map((key) => {
    let backgroundColor = "";
    if (key.correct === true) {
      backgroundColor = "#1AB454";
    } else if (key.correct === false) {
      backgroundColor = "#DB4547";
    } else {
      backgroundColor = "#F3B627";
    }
    return (
      <button
        key={"key-" + key.char}
        className="char-box"
        style={{ background: backgroundColor }}
        disabled={key.correct !== null}
      >
        {key.char}
      </button>
    );
  });

  return <div className="keyboard">{keyboard}</div>;
}
