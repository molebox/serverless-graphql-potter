/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import GriffindorHouse from "../../assets/griffindor.svg";
import { motion } from "framer-motion";

const Griffindor = ({ getHouse, selectedHouse }) => {
  return (
    <motion.button
      sx={{
        cursor: "pointer",
        background: "transparent",

        border: selectedHouse === "griffindor" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "griffindor"
            ? "linear-gradient(90deg, rgba(127,9,9,1) 27%, rgba(255,197,0,1) 61%)"
            : null,
        borderImageSlice: selectedHouse === "griffindor" ? 1 : null,
      }}
      whileTap={{ scale: 1.1 }}
      onClick={() => getHouse("griffindor")}
      type="radio"
      name="houses"
      value="griffindor"
      checked={selectedHouse === "griffindor"}
    >
      <GriffindorHouse
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
    </motion.button>
  );
};

export default Griffindor;
