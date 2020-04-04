/** @jsx jsx */
import { jsx } from "theme-ui";

const GradientLine = () => (
  <div
    sx={{
      position: "relative",
      height: "1em",
      borderBottom: "solid 3px",
      borderImageSource:
        "linear-gradient(90deg, rgba(127,9,9,1) 0%, rgba(255,197,0,1) 12%, rgba(238,225,23,1) 24%, rgba(0,0,0,1) 36%, rgba(13,98,23,1) 48%, rgba(170,170,170,1) 60%, rgba(0,10,144,1) 72%, rgba(148,119,45,1) 84%)",
      borderImageSlice: 1,
    }}
  />
);

export default GradientLine;
