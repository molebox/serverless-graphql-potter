/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { HouseTemplateAreas } from "../../window";

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
        color: "white",
        width: "100%",
        height: "auto",
        border: "solid 2px",
        borderColor: "white",
        display: "grid",
        gridTemplateAreas: HouseTemplateAreas,
      }}
    >
      <p
        sx={{
          gridArea: "name",
        }}
      >
        {name}
      </p>
      <p
        sx={{
          gridArea: "founder",
        }}
      >
        {founder}
      </p>
      <p
        sx={{
          gridArea: "head",
        }}
      >
        {headOfHouse}
      </p>
      <p
        sx={{
          gridArea: "ghost",
        }}
      >
        {houseGhost}
      </p>
      <p
        sx={{
          gridArea: "mascot",
        }}
      >
        {mascot}
      </p>
      {values.map((value) => (
        <p
          sx={{
            gridArea: "values",
          }}
        >
          {value}
        </p>
      ))}
    </div>
  );
};

export default HouseCard;
