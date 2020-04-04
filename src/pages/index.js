/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import Houses from "../components/house-banners/houses";
import Intro from "../components/intro";
import {
  PhoneTemplateAreas,
  TabletTemplateAreas,
  DesktopTemplateAreas,
} from "./../window/index";
import { Logo } from "../components/logo";
import Background from "./../components/background";
import HouseCard from "../components/cards/house-card";
import GradientLine from "../components/common/gradient-line";
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

const GET_HOUSES = gql`
  query GetHouses {
    allHouses {
      _id
      name
      colors
      founder
      headOfHouse
      houseGhost
      mascot
      members
      values
    }
  }
`;

export default () => {
  const {
    loading: characterLoading,
    error: characterError,
    data: characterData,
  } = useQuery(GET_CHARACTERS);
  const {
    loading: houseLoading,
    error: houseError,
    data: houseData,
  } = useQuery(GET_HOUSES);
  const [selectedHouse, setSelectedHouse] = React.useState([]);

  React.useEffect(() => {
    const gryffindor =
      !characterLoading &&
      !characterError &&
      characterData.allCharacters.filter((char) => char.house === "Gryffindor");

    const hufflepuff =
      !characterLoading &&
      !characterError &&
      characterData.allCharacters.filter((char) => char.house === "Hufflepuff");

    const slytherin =
      !characterLoading &&
      !characterError &&
      characterData.allCharacters.filter((char) => char.house === "Slytherin");

    const ravenclaw =
      !characterLoading &&
      !characterError &&
      characterData.allCharacters.filter((char) => char.house === "Ravenclaw");

    setSelectedHouse([gryffindor, hufflepuff, slytherin, ravenclaw]);
  }, []);

  const getHouse = (house) => {
    switch (house) {
      case "gryffindor":
        const gryffindor =
          !characterLoading &&
          !characterError &&
          characterData.allCharacters.filter(
            (char) => char.house === "Gryffindor"
          );
        setSelectedHouse(gryffindor);
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
        setSelectedHouse([]);
        break;
    }
  };

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr", "200px repeat(4, 1fr) 300px"],
        gridAutoRows: "250px 1fr",
        gridTemplateAreas: [
          PhoneTemplateAreas,
          TabletTemplateAreas,
          DesktopTemplateAreas,
        ],
        width: "100%",
        height: "100vh",
        background: "#1E2224",
        overflow: "hidden",
      }}
    >
      <LogoSection />
      <AuthorSection />
      <HouseSection getHouse={getHouse} />
      <MainSection house={selectedHouse} />
      <SpellsSection />
    </div>
  );

  // return (
  //   <div
  //     sx={{
  //       position: "relative",
  //       width: "100%",
  //       height: "100%",
  //     }}
  //   >
  //     <Background />
  //     <section
  //       sx={{
  //         position: "relative",
  //         display: "grid",
  //         gridTemplateRows: "repeat(2, 1fr)",
  //         gridTemplateColumns: [
  //           "2fr repeat(4, 1fr)",
  //           "2fr repeat(4, 1fr)",
  //           "2fr repeat(4, 1fr)",
  //         ],
  //         gridTemplateAreas: [
  //           PhoneTemplateAreas,
  //           TabletTemplateAreas,
  //           DesktopTemplateAreas,
  //         ],
  //         padding: "2em",
  //         zIndex: 1000,
  //         minHeight: '1000px',
  //       }}
  //     >

  //       <Logo />
  //       <Houses getHouse={getHouse} selectedHouse={selectedHouse}  />
  //       <Intro />
  //     </section>
  //     <GradientLine/>
  //     <section
  //       sx={{
  //         position: "relative",
  //         padding: "2em",
  //       }}
  //     >
  //       <div>
  //         {houseLoading ? <div sx={{ color: "white" }}>loading....</div> : null}
  //         {houseError ? (
  //           <div sx={{ color: "white" }}> Error: {houseError.message}</div>
  //         ) : null}
  //         {!houseLoading &&
  //           !houseError &&
  //           houseData.allHouses.map((house) => {
  //             if (house.name.toLowerCase() === selectedHouse) {
  //               return <HouseCard key={house._id} {...house} />;
  //             }
  //           })}
  //       </div>
  //     </section>
  //   </div>
  // );
};
