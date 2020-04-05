/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";

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
  console.log({ spellsData });

  return (
    <section
      sx={{
        gridArea: "spells",
        borderLeft: "solid 2px",
        borderColor: "white",
        display: "grid",
        gridTemplateRows: "100px 1fr",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "solid 2px",
          borderColor: "white",
        }}
      >
        <p
          sx={{
            color: "white",
            fontFamily: "heading",
            fontSize: "2em",
          }}
        >
          Spells
        </p>
      </div>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!spellsLoading &&
          !spellsError &&
          spellsData.allSpells.map((spell) => (
            <p
              sx={{
                color: "white",
                fontFamily: "heading",
                fontSize: "2em",
              }}
            >
              {spell.spell}
            </p>
          ))}
      </div>
    </section>
  );
};

export default SpellsSection;
