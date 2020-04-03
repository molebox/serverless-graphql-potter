/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import GryffindorHouse from "../../assets/gryffindor.svg";
import { motion } from "framer-motion";
import { gryffindorColors } from "./index";

const Gryffindor = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",

        border: selectedHouse === "gryffindor" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "gryffindor" ? gryffindorColors : null,
        borderImageSlice: selectedHouse === "gryffindor" ? 1 : null,
      }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => getHouse("gryffindor")}
      type="radio"
      name="houses"
      value="gryffindor"
      href="#house"
    >
      <GryffindorHouse
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
    </motion.a>
  );
};

export default Gryffindor;
