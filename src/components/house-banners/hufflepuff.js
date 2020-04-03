/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import HufflepuffHouse from "../../assets/hufflepuff.svg";
import { motion } from "framer-motion";
import { hufflepuffColors } from ".";

const Hufflepuff = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",
        outline: "none",
        border: selectedHouse === "hufflepuff" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "hufflepuff" ? hufflepuffColors : null,
        borderImageSlice: selectedHouse === "hufflepuff" ? 1 : null,
      }}
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      onClick={() => getHouse("hufflepuff")}
      type="radio"
      name="houses"
      value="hufflepuff"
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
