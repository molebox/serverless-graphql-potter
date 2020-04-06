/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Spell = ({ _id, effect, spell, type }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div
        variants={item}
        sx={{
          border: "solid 2px",
          borderColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "1em",
          margin: "1em",
          minWidth: ["250px", "400px", "500px"],
        }}
      >
        <h2
          sx={{
            color: "white",
            fontFamily: "heading",
            letterSpacing: "body",
            fontSize: "2.5em",
            borderBottom: "solid 2px",
            borderColor: "white",
          }}
        >
          {spell}
        </h2>
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto",
            gap: "2em",
            marginTop: "2em",
          }}
        >
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>effect: </strong> {effect}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>type: </strong> {type}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Spell;
