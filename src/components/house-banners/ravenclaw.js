/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import RavenclawHouse from "../../assets/ravenclaw.svg";
import { motion } from "framer-motion";
import { ravenclawColors } from "../../helpers/helpers";

const Ravenclaw = ({ getHouse, selectedHouse }) => {
  return (
    <motion.a
      sx={{
        cursor: "pointer",
        background: "transparent",
        outline: "none",
        border: selectedHouse === "ravenclaw" ? "solid 3px" : "none",
        borderImageSource:
          selectedHouse === "ravenclaw" ? ravenclawColors : null,
        borderImageSlice: selectedHouse === "ravenclaw" ? 1 : null,
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
      onClick={() => getHouse("ravenclaw")}
      type="radio"
      name="houses"
      value="ravenclaw"
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
