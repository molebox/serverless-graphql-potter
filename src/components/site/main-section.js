/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "../cards/card";
import SearchBar from "./searchbar";
import { useSearchBar } from "./useSearchbar";

const emojis = `💫👨‍🧙🦄🐍🐉⚡️✨🕯📖📜🧹`;

const MainSection = ({ house }) => {
  console.log({ house });
  const { members, handleSearchQuery } = useSearchBar(house);
  return members.length ? (
    <div
      sx={{
        gridArea: "main",
        display: "grid",
        gridTemplateRows: "100px 1fr",
      }}
    >
      <div
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
        }}
      >
        <h4>
          {house[0].house} Members - {house.length}
        </h4>
        <SearchBar handleSearchQuery={handleSearchQuery} />
      </div>

      <section
        sx={{
          // gridArea: "main",
          margin: "0 auto",
          width: "100%",
          overflowY: "scroll",
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 450px))",
          gap: "1.5em",
          justifyContent: "space-evenly",
          marginTop: "3em",
        }}
      >
        {members.length !== 0
          ? members.map((char) => <Card key={char._id} {...char} />)
          : null}
      </section>
    </div>
  ) : (
    <div
      sx={{
        gridArea: "main",
        margin: "0 auto",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <p
        sx={{
          color: "white",
          fontFamily: "heading",
          fontSize: "3em",
        }}
      >
        Loading...{emojis}
      </p>
    </div>
  );
};

export default MainSection;
