import { useState } from "react";

import Hero from "./components/Hero";
import Message from "./components/Message";
import Hangman from "./components/Hangman";

import "./App.css";

export default function App() {
  return (
    <main>
      <Hero />
      <Message />
      <Hangman />
      <button className="new-game-btn">New Game</button>
    </main>
  );
}
