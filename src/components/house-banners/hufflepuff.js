/** @jsx jsx */
import { jsx } from "theme-ui";

const Hufflepuff = () => (
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
        backgroundColor: "#eee117",
        height: "100%",
        width: "100%",
      }}
    >
      {" "}
      Hufflepuff
    </span>
    <span
      sx={{
        backgroundColor: "#000000",
        height: "100%",
        width: "100%",
      }}
    ></span>
  </div>
);

export default Hufflepuff;
