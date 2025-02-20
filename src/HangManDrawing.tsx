import head from "./assets/head.png"
import body from "./assets/body.png"
import arm1 from "./assets/arm1.png"
import arm2 from "./assets/arm2.png"
import leg1 from "./assets/leg1.png"
import leg2 from "./assets/leg2.png"

const HEAD = (isLoser: boolean, isWinner: boolean) => (
  <img src={head} alt=""
    style={{
      filter: isLoser ? "sepia(1) hue-rotate(-50deg) saturate(3)" : isWinner ? "sepia(1) hue-rotate(100deg) saturate(3)" : "",
      width: "100px",
      height: "130px",
      position: "absolute",
      top: "33px",
      right: "-44px",
    }} />
);
const BODY = (
  <img src={body}
    style={{
      width: "75px",
      height: "120px",
      position: "absolute",
      top: "140px",
      right: "-35px",
      zIndex: -1,
    }}
  />
);
const RIGHT_ARM = (
  <img src={arm2}
    style={{
      width: "130px",
      height: "150px",
      position: "absolute",
      top: "128px",
      right: "-138px",
      rotate: "0deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <img src={arm1}
    style={{
    width: "150px",
    height: "163px",
    position: "absolute",
    top: "131px",
    right: "20px",
    rotate: "2deg",
    transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <img src={leg2}
    style={{
      width: "150px",
      height: "190px",
      position: "absolute",
      top: "229px",
      right: "-102px",
      rotate: "0deg", 
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_LEG = (
  <img src={leg1}
    style={{
      width: "157px",
      height: "188px",
      position: "absolute",
      top: "226px",
      right: "-44px",
      rotate: "0deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = (isLoser: boolean, isWinner: boolean) => [HEAD(isLoser, isWinner), BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangManDrawingProps = {
  numberOfGuesses: number;
  isLoser: boolean;
  isWinner: boolean;
};

export default function HangManDrawing({
  numberOfGuesses,
  isLoser,
  isWinner,
}: HangManDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS(isLoser, isWinner).slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
