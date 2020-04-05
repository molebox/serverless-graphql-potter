/** @jsx jsx */
import { jsx } from "theme-ui";

const emojis = `💫👨‍🧙🦄🐍🐉⚡️✨🕯📖📜🧹`;

const Loading = () => (
  <div
    sx={{
      gridArea: "main",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    }}
  >
    <p
      sx={{
        color: "white",
        fontFamily: "heading",
        fontSize: "3em",
      }}
    >
      Loading...{emojis}
    </p>
  </div>
);

export default Loading;
