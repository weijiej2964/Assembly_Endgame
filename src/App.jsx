import { useState } from "react";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Hangman from "./components/Hangman";

import "./App.css";

export default function App() {
  const [message, setMessage] = useState("");

  function wrongGuess(target) {
    const killMessagesList = [
      `Oh no, not ${target}`,
      `${target}, its been real`,
    ];
    setMessage(
      killMessagesList[Math.floor(Math.random() * killMessagesList.length)],
    );
  }

  return (
    <main>
      <Hero />
      <Message message={message} />
      <Hangman wrongGuess={wrongGuess} />
      <button className="new-game-btn">New Game</button>
    </main>
  );
}
