import { useState, useEffect } from "react";

import Word from "./Word";
import Keyboard from "./Keyboard";

import lives from "../assets/langList";
import HealthDisplay from "./HealthDisplay";
import alphabet from "../assets/alphabet";

export default function Hangman(props) {
  //----------------------Health--------------------------
  const [health, setHealth] = useState(lives);

  //----------------------Keys-----------------------------
  const [keys, setKeys] = useState(alphabet);

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
          show: false,
        };
      });
      setWord(wordArr);
    }
    initWord();
  }, []);

  function checkLetter(event) {
    const guess = event.currentTarget.id;
    let correct = word.some((item) => item.char === guess);
    setWord((prevWord) => {
      return prevWord.map((item) => {
        return {
          ...item,
          show: guess === item.char ? true : item.show,
        };
      });
    });
    setKeys((prevKeys) => {
      return {
        ...prevKeys,
        [guess]: { correct },
      };
    });
    if (!correct) {
      setHealth((prevHealth) => {
        let nextHealth = prevHealth;
        for (let i = 0; i < nextHealth.length; ++i) {
          props.wrongGuess(nextHealth[i].name);
          if (i === nextHealth.length - 1) {
            nextHealth[i].isDead = true;
            break;
          }
          if (nextHealth[i].isDead === false) {
            nextHealth[i].isDead = true;
            break;
          }
        }
        return nextHealth;
      });
    }
  }

  console.log(health);

  return (
    <section className="hangman">
      <HealthDisplay health={health} />
      <Word word={word} />
      <Keyboard checkLetter={checkLetter} keys={keys} />
    </section>
  );
}
