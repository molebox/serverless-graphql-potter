/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import MainSection from "./../components/site/main-section";
import {
  HousesPhoneTemplateAreas,
  HousesTabletTemplateAreas,
  HousesDesktopTemplateAreas,
} from "../window";
import Background from "./../components/background";

const GET_SPELLS = gql`
  query GetSpells {
    allSpells {
      _id
      effect
      spell
      type
    }
  }
`;

const Spells = ({ location }) => {
  const {
    loading: spellsLoading,
    error: spellsError,
    data: spellsData,
  } = useQuery(GET_SPELLS);
  const [selectedHouse, setSelectedHouse] = React.useState([]);

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "100px 1fr",
        gridTemplateAreas: [
          HousesPhoneTemplateAreas,
          HousesTabletTemplateAreas,
          HousesDesktopTemplateAreas,
        ],
        width: "100%",
        height: "100%",
        background: "#1E2224",
        position: "relative",
      }}
    >
      {/* <Background /> */}
      <div
        sx={{
          height: "100vh",
        }}
      >
        <h1
          sx={{
            fontFamily: "heading",
            color: "white",
            letterSpacing: "text",
            fontSize: "3em",
            position: "relative",
            textAlign: "center",
          }}
        >
          coming soon....
        </h1>
      </div>
    </div>
  );
};

export default Spells;
