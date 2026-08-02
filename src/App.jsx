import { useState } from "react";

import Hero from "./components/Hero";
import Message from "./components/Message";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import Hangman from "./components/Hangman";

import langList from "./assets/langList";

import "./App.css";

export default function App() {
  const [lang, setLang] = useState(langList);
  console.log(lang);

  return (
    <main>
      <Hero />
      <Message />
      <ProgrammingLanguages lang={lang} />
      <Hangman />
      <button className="new-game-btn">New Game</button>
    </main>
  );
}
