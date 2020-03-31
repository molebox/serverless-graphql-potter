/** @jsx jsx */
import { jsx } from "theme-ui";

const Slytherin = () => (
  <div
    sx={{
      margin: "1em",
      height: "100%",
      width: "100%",
      height: "50%",
      display: "flex",
    }}
  >
    <span
      sx={{
        backgroundColor: "#0d6217",
        height: "100%",
        width: "100%",
      }}
    >
      {" "}
      Slytherin
    </span>
    <span
      sx={{
        backgroundColor: "#aaaaaa",
        height: "100%",
        width: "100%",
      }}
    ></span>
  </div>
);

export default Slytherin;
