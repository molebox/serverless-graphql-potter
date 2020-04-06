/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import {
  checkNull,
  checkDeathEater,
  checkDumbledoresArmy,
  hufflepuffColors,
  ravenclawColors,
  gryffindorColors,
  slytherinColors,
  houseEmoji,
  wandEmoji,
  patronusEmoji,
  bloodStatusEmoji,
  ministryOfMagicEmoji,
  boggartEmoji,
  roleEmoji,
  orderOfThePheonixEmoji,
  deathEaterEmoji,
  dumbledoresArmyEmoji,
  aliasEmoji,
} from "./../../helpers/helpers";
import { motion } from "framer-motion";

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      delayChildren: 1,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Card = ({
  _id,
  name,
  house,
  patronus,
  bloodStatus,
  role,
  deathEater,
  dumbledoresArmy,
  orderOfThePheonix,
  ministryOfMagic,
  alias,
  wand,
  boggart,
  animagus,
  index,
}) => {
  console.log({ index });
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div
        // initial={{ scale: 0 }}
        // animate={{scale: 1, delay: 0.5 }}
        // transition={{
        //   type: "spring",
        //   stiffness: 50,
        //   damping: 20,
        // }}
        variants={item}
        sx={{
          border: "solid 2px",
          borderImageSource:
            house === "Gryffindor"
              ? gryffindorColors
              : house === "Hufflepuff"
              ? hufflepuffColors
              : house === "Slytherin"
              ? slytherinColors
              : house === "Ravenclaw"
              ? ravenclawColors
              : null,
          borderImageSlice: 1,
          // display: "grid",
          // gridTemplateColumns: "1fr 1fr",
          // gridTemplateRows: "auto",
          display: "flex",
          flexDirection: "column",
          // gap: "1em",
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
          {name}
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
            <strong>house:</strong> {house} {houseEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>wand:</strong> {checkNull(wand)} {wandEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>patronus:</strong> {checkNull(patronus)} {patronusEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>boggart:</strong> {checkNull(boggart)} {boggartEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>blood:</strong> {checkNull(bloodStatus)} {bloodStatusEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>role:</strong> {checkNull(role)} {roleEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>order of the pheonix:</strong>{" "}
            {checkNull(orderOfThePheonix)} {orderOfThePheonixEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>ministry of magic:</strong>{" "}
            {checkDeathEater(ministryOfMagic)} {ministryOfMagicEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>death eater:</strong> {checkDeathEater(deathEater)}{" "}
            {deathEaterEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>dumbledores army:</strong>{" "}
            {checkDumbledoresArmy(dumbledoresArmy)} {dumbledoresArmyEmoji}
          </p>
          <p
            sx={{
              color: "white",
              fontFamily: "heading",
              letterSpacing: "body",
              fontSize: "1.5em",
            }}
          >
            <strong>alias:</strong> {checkNull(alias)} {aliasEmoji}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
