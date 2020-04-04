/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "../cards/card";

const MainSection = ({ house }) => {
  console.log({ house });
  return house.length >= 5 ? (
    <>
      <h4
        sx={{
          gridArea: "main",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          fontFamily: "heading",
          fontSize: "2em",
        }}
      >
        House Members - {house.length}
      </h4>
      <section
        sx={{
          gridArea: "main",
          margin: "0 auto",
          width: "100%",
          overflowY: "scroll",
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 450px))",
          gap: "1.5em",
          justifyContent: "space-evenly",
          marginTop: "5em",
        }}
      >
        {house.length !== 0
          ? house.map((char) => <Card key={char._id} {...char} />)
          : null}
      </section>
    </>
  ) : (
    <div
      sx={{
        gridArea: "main",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          fontSize: "2em",
        }}
      >
        Select a house
      </p>
    </div>
  );
};

export default MainSection;
