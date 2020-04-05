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
} from "./../../helpers/helpers";

const houseEmoji = `\u{1F3E0}`;
const wandEmoji = `💫`;
const patronusEmoji = `✨`;
const deathEaterEmoji = `🐍`;
const dumbledoresArmyEmoji = `⚔️`;
const roleEmoji = `📖`;
const bloodStatusEmoji = `🧙🏾‍♀️ 🤵🏾`;
const orderOfThePheonixEmoji = `🦄`;
const ministryOfMagicEmoji = `📜`;
const boggartEmoji = `🕯`;
const aliasEmoji = `👨🏼‍🎤`;

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
}) => {
  return (
    <div
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
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
        gap: "1.5em",
        padding: "1em",
        margin: "2em",
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
        <strong>blood status:</strong> {checkNull(bloodStatus)}{" "}
        {bloodStatusEmoji}
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
        <strong>order of the pheonix:</strong> {checkNull(orderOfThePheonix)}{" "}
        {orderOfThePheonixEmoji}
      </p>
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "1.5em",
        }}
      >
        <strong>ministry of magic:</strong> {checkDeathEater(ministryOfMagic)}{" "}
        {ministryOfMagicEmoji}
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
  );
};

export default Card;
