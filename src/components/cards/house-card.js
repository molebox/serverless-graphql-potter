/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { HouseTemplateAreas } from "../../window";
import {
  gryffindorColors,
  hufflepuffColors,
  slytherinColors,
  ravenclawColors,
} from "../../helpers/helpers";

const HouseCard = (house) => {
  const {
    name,
    founder,
    headOfHouse,
    houseGhost,
    mascot,
    members,
    values,
  } = house;

  console.log({ members });
  return (
    <div
      id="house"
      sx={{
        width: "100%",
        height: "auto",
        display: "grid",
        gridTemplateAreas: HouseTemplateAreas,
        border: "solid 3px",
        borderImageSlice: 1,
        borderImageSource:
          name === "Gryffindor"
            ? gryffindorColors
            : name === "Hufflepuff"
            ? hufflepuffColors
            : name === "Slytherin"
            ? slytherinColors
            : name === "Ravenclaw"
            ? ravenclawColors
            : null,
      }}
    >
      <p
        sx={{
          gridArea: "name",
          color: "white",
          fontFamily: "heading",
          fontSize: "1.5em",
          padding: "1.5em",
        }}
      >
        {name}
      </p>
      <p
        sx={{
          gridArea: "founder",
          color: "white",
          fontFamily: "heading",
          fontSize: "1.5em",
          padding: "1.5em",
        }}
      >
        {founder}
      </p>
      <p
        sx={{
          gridArea: "head",
          color: "white",
          fontFamily: "heading",
          fontSize: "1.5em",
          padding: "1.5em",
        }}
      >
        {headOfHouse}
      </p>
      <p
        sx={{
          gridArea: "ghost",
          color: "white",
          fontFamily: "heading",
          fontSize: "1.5em",
          padding: "1.5em",
        }}
      >
        {houseGhost}
      </p>
      <p
        sx={{
          gridArea: "mascot",
          color: "white",
          fontFamily: "heading",
          fontSize: "1.5em",
          padding: "1.5em",
        }}
      >
        {mascot}
      </p>
      <div
        sx={{
          gridArea: "values",
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "2em",
        }}
      >
        {values.map((value, index) => (
          <p
            key={value + index}
            sx={{
              color: "white",
              fontFamily: "heading",
            }}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HouseCard;
