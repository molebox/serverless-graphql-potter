/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import GryffindorHouse from "../../assets/gryffindor.svg";
import { motion } from "framer-motion";

const Gryffindor = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",

        border: selectedHouse === "gryffindor" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "gryffindor"
            ? "linear-gradient(90deg, rgba(127,9,9,1) 27%, rgba(255,197,0,1) 61%)"
            : null,
        borderImageSlice: selectedHouse === "gryffindor" ? 1 : null,
      }}
      whileTap={{ scale: 1.1 }}
      onClick={() => getHouse("gryffindor")}
      type="radio"
      name="houses"
      value="gryffindor"
      checked={selectedHouse === "gryffindor"}
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
