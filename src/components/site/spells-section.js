/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import Spell from "../cards/spell";
import Loading from "./loading";

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

const SpellsSection = () => {
  const {
    loading: spellsLoading,
    error: spellsError,
    data: spellsData,
  } = useQuery(GET_SPELLS);

  return spellsLoading ? (
    <Loading />
  ) : (
    <section
      sx={{
        gridArea: "main",
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
      {!spellsLoading &&
        !spellsError &&
        spellsData.allSpells.map((spell) => (
          <Spell key={spell._id} {...spell} />
        ))}
    </section>
  );
};

export default SpellsSection;
