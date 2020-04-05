/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "../cards/card";
import SearchBar from "./searchbar";
import { useSearchBar } from "./useSearchbar";
import Loading from "./loading";

const MainSection = React.memo(({ house }) => {
  const { members, handleSearchQuery } = useSearchBar(house);

  return house.length ? (
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
        {members.map((char) => (
          <Card key={char._id} {...char} />
        ))}
      </section>
    </div>
  ) : (
    <Loading />
  );
});

export default MainSection;
