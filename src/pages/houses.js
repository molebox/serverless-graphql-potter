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
import Header from "./../components/site/header";
import Background from "./../components/background";

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

const Houses = ({ location }) => {
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
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "100px 1fr",
        gridTemplateAreas: [
          HousesPhoneTemplateAreas,
          HousesTabletTemplateAreas,
          HousesDesktopTemplateAreas,
        ],
        width: "100%",
        height: "100vh",
        background: "#1E2224",
        position: "relative",
      }}
    >
      <Background />
      <Header location={location} />
      <MainSection house={selectedHouse} getHouse={getHouse} />
    </div>
  );
};

export default Houses;
