import { useState, useEffect } from "react";

import Word from "./Word";
import Keyboard from "./Keyboard";

export default function Hangman() {
  //------------------ Init Word ----------------------------
  const [word, setWord] = useState([]);

  useEffect(() => {
    async function initWord() {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?length=5",
      );
      const data = await response.json();
      const capData = data[0].toUpperCase();
      //Setup word in a array of objects for recording correct answers
      const wordArr = capData.split("").map((letter) => {
        return {
          char: letter,
          show: true,
        };
      });
      setWord(wordArr);
    }
    initWord();
  }, []);

  return (
    <section className="hangman">
      <Word word={word} />
      <Keyboard />
    </section>
  );
}
