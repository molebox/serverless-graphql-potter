/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import RavenclawHouse from "../../assets/ravenclaw.svg";
import { motion } from "framer-motion";

const Ravenclaw = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",
        outline: "none",
        border: selectedHouse === "ravenclaw" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "ravenclaw"
            ? "linear-gradient(90deg, rgba(0,10,144,1) 32%, rgba(148,107,45,1) 69%)"
            : null,
        borderImageSlice: selectedHouse === "ravenclaw" ? 1 : null,
      }}
      whileTap={{ scale: 1.1 }}
      onClick={() => getHouse("ravenclaw")}
      type="radio"
      name="houses"
      value="ravenclaw"
      checked={selectedHouse === "ravenclaw"}
      href="#house"
    >
      <RavenclawHouse
        sx={{
          width: "200px",
          height: "200px",
        }}
      />
    </motion.a>
  );
};

export default Ravenclaw;
