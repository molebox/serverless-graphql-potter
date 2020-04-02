/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import HufflepuffHouse from "../../assets/hufflepuff.svg";
import { motion } from "framer-motion";

const Hufflepuff = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",
        outline: "none",
        border: selectedHouse === "hufflepuff" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "hufflepuff"
            ? "linear-gradient(90deg, rgba(238,225,23,1) 35%, rgba(0,0,0,1) 93%)"
            : null,
        borderImageSlice: selectedHouse === "hufflepuff" ? 1 : null,
      }}
      whileTap={{ scale: 1.1 }}
      onClick={() => getHouse("hufflepuff")}
      type="radio"
      name="houses"
      value="hufflepuff"
      checked={selectedHouse === "hufflepuff"}
      href="#house"
    >
      <HufflepuffHouse
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
    </motion.a>
  );
};

export default Hufflepuff;
