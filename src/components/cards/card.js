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

const wizard = `\u{1F9D5}`;

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
        <strong>house:</strong> {house}
      </p>
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "1.5em",
        }}
      >
        <strong>wand:</strong> {checkNull(wand)}
      </p>
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "1.5em",
        }}
      >
        <strong>patronus:</strong> {checkNull(patronus)}
      </p>
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "1.5em",
        }}
      >
        <strong>blood status:</strong> {checkNull(bloodStatus)}
      </p>
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "1.5em",
        }}
      >
        <strong>role:</strong> {checkNull(role)}
      </p>
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "1.5em",
        }}
      >
        <strong>death eater:</strong> {checkDeathEater(deathEater)}
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
        {checkDumbledoresArmy(dumbledoresArmy)}
      </p>
    </div>
  );
};

export default Card;
