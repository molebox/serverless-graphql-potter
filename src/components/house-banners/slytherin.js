/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import SlytherinHouse from "../../assets/slytherin.svg";
import { motion } from "framer-motion";
import { slytherinColors } from "./../../helpers/helpers";

const Slytherin = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",
        outline: "none",
        border: selectedHouse === "slytherin" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "slytherin" ? slytherinColors : null,
        borderImageSlice: selectedHouse === "slytherin" ? 1 : null,
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
      onClick={() => getHouse("slytherin")}
      type="radio"
      name="houses"
      value="slytherin"
      href="#house"
    >
      <SlytherinHouse
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
    </motion.a>
  );
};

export default Slytherin;
