type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangManWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangManWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              borderBottom: "0.1em solid black",
            }}
          >
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter.toLowerCase()) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter.toLowerCase()) && reveal
                    ? "red"
                    : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
