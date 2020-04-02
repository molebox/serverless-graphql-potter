/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import SlytherinHouse from "../../assets/slytherin.svg";
import { motion } from "framer-motion";

const Slytherin = ({ getHouse, selectedHouse }) => {
  return (
    <motion.button
      sx={{
        cursor: "pointer",
        background: "transparent",
        outline: "none",
        border: selectedHouse === "slytherin" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "slytherin"
            ? "linear-gradient(90deg, rgba(13,98,23,1) 32%, rgba(170,170,170,1) 69%)"
            : null,
        borderImageSlice: selectedHouse === "slytherin" ? 1 : null,
      }}
      whileTap={{ scale: 1.1 }}
      onClick={() => getHouse("slytherin")}
      type="radio"
      name="houses"
      value="slytherin"
      checked={selectedHouse === "slytherin"}
    >
      <SlytherinHouse
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
    </motion.button>
  );
};

export default Slytherin;
