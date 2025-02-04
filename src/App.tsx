import { useState } from "react";
import words from "./wordList.json";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import KeyBoard from "./KeyBoard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <div>
        <HangManDrawing />
        <HangManWord />
        <div style={{ alignSelf: "stretch" }}>
          <KeyBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
