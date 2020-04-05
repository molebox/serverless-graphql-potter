/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  PhoneTemplateAreas,
  TabletTemplateAreas,
  DesktopTemplateAreas,
} from "./../window/index";
import LogoSection from "./../components/site/logo-section";
import AuthorSection from "../components/site/author-section";
import HouseSection from "../components/site/house-section";
import MainSection from "./../components/site/main-section";
import SpellsSection from "../components/site/spells-section";

const GET_CHARACTERS = gql`
  query GetCharacters {
    allCharacters {
      _id
      name
      house
      patronus
      bloodStatus
      role
      school
      deathEater
      dumbledoresArmy
      orderOfThePheonix
      ministryOfMagic
      alias
      wand
      boggart
      animagus
    }
  }
`;

export default () => {
  const {
    loading: characterLoading,
    error: characterError,
    data: characterData,
  } = useQuery(GET_CHARACTERS);
  const [selectedHouse, setSelectedHouse] = React.useState([]);

  React.useEffect(() => {
    const gryffindor =
      !characterLoading &&
      !characterError &&
      characterData.allCharacters.filter((char) => char.house === "Gryffindor");

    setSelectedHouse(gryffindor);
  }, [characterLoading]);

  const getHouse = (house) => {
    switch (house) {
      case "gryffindor":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.filter(
              (char) => char.house === "Gryffindor"
            )
        );
        break;
      case "hufflepuff":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.filter(
              (char) => char.house === "Hufflepuff"
            )
        );
        break;
      case "slytherin":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.filter(
              (char) => char.house === "Slytherin"
            )
        );
        break;
      case "ravenclaw":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.filter(
              (char) => char.house === "Ravenclaw"
            )
        );
        break;
      default:
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.filter(
              (char) => char.house === "Gryffindor"
            )
        );
        break;
    }
  };

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr 1fr", "1fr", "200px repeat(4, 1fr) 300px"],
        gridAutoRows: "250px 1fr",
        gridTemplateAreas: [
          PhoneTemplateAreas,
          TabletTemplateAreas,
          DesktopTemplateAreas,
        ],
        width: "100%",
        height: "100vh",
        background: "#1E2224",
        // overflow: "hidden",
      }}
    >
      <LogoSection />
      <AuthorSection />
      <HouseSection getHouse={getHouse} />
      <MainSection house={selectedHouse} />
      <SpellsSection />
    </div>
  );
};
