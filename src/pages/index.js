/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import Houses from "./../components/houses";
import Intro from "../components/intro";
import {
  PhoneTemplateAreas,
  TabletTemplateAreas,
  DesktopTemplateAreas,
} from "./../window/index";
import { Logo } from "../components/logo";
import Background from "./../components/background";
import HouseCard from "../components/cards/house-card";

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
  const [selectedHouse, setSelectedHouse] = React.useState("");

  // const getHouseMembers = () => {
  //     const houseMembers = !houseLoading &&
  //     !houseError && houseData.allHouses.map((member) => member.members);
  //     console.log({houseMembers});
  //     // if (!characterLoading || !characterError) {
  //     //   characterData.map((char) => {

  //     //   })
  //     // }
  // }

  // React.useEffect(() => {
  //   getHouseMembers();
  // },[houseError, houseLoading])

  const getHouse = (house) => setSelectedHouse(house);

  return (
    <div
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Background />
      <section
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateRows: "repeat(2, 1fr)",
          gridTemplateColumns: [
            "2fr repeat(4, 1fr)",
            "2fr repeat(4, 1fr)",
            "2fr repeat(4, 1fr)",
          ],
          gridTemplateAreas: [
            PhoneTemplateAreas,
            TabletTemplateAreas,
            DesktopTemplateAreas,
          ],
          padding: "2em",
        }}
      >
        <Logo />
        <Houses getHouse={getHouse} selectedHouse={selectedHouse} />
        <Intro />
      </section>
      <section
        sx={{
          position: "relative",
          padding: "2em",
          margin: "0 auto",
        }}
      >
        <div>
          {/* {characterLoading ? <div>loading....</div> : null}
          {characterError ? <div> Error: {characterError.message}</div> : null}
          {!characterLoading &&
            !characterError &&
            characterData.allCharacters.map((char) => (
              <p
                sx={{
                  color: "white",
                }}
                key={char._id}
              >
                {char.name}
              </p>
            ))} */}
        </div>
        <div>
          {houseLoading ? <div sx={{ color: "white" }}>loading....</div> : null}
          {houseError ? (
            <div sx={{ color: "white" }}> Error: {houseError.message}</div>
          ) : null}
          {!houseLoading &&
            !houseError &&
            houseData.allHouses.map((house) => {
              if (house.name.toLowerCase() === selectedHouse) {
                return <HouseCard {...house} />;
              }
            })}
        </div>
      </section>
    </div>
  );
};
