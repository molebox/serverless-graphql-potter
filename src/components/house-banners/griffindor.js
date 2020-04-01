/** @jsx jsx */
import { jsx } from "theme-ui";
import GriffindorHouse from "../../assets/griffindor.svg";
import { useSpring, animated } from "react-spring";

const Griffindor = () => {
  return (
    <GriffindorHouse
      sx={{
        width: "200px",
        height: "200px",
      }}
    />
  );
};

export default Griffindor;
