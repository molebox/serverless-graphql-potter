/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Card from "../cards/card";
import SearchBar from "./searchbar";
import { useSearchBar } from "./useSearchbar";
import Loading from "./loading";
import HouseSection from "./house-section";

const MainSection = React.memo(({ house, getHouse }) => {
  const { members, handleSearchQuery } = useSearchBar(house);

  return house.length ? (
    <div
      sx={{
        gridArea: "main",
        height: "100%",
        position: "relative",
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
          position: "relative",
        }}
      >
        <h4>
          {house[0].house} Members - {house.length}
        </h4>
        <SearchBar handleSearchQuery={handleSearchQuery} />
        <HouseSection getHouse={getHouse} />
      </div>

      <section
        sx={{
          // gridArea: "main",
          margin: "0 auto",
          width: "100%",
          // overflowY: "scroll",
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, 500px))",
          gap: "1.5em",
          justifyContent: "space-evenly",
          marginTop: "1em",
          position: "relative",
          height: "100vh",
        }}
      >
        {members.map((char, index) => (
          <Card key={char._id} index={index} {...char} />
        ))}
      </section>
    </div>
  ) : (
    <Loading />
  );
});

export default MainSection;
