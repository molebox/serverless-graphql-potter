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

  console.log({ houseData });

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
          // height: [null, "", "100vh"],
          // width: "100vw",
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
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div>
          {characterLoading ? <div>loading....</div> : null}
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
            ))}
        </div>
        <div>
          {houseLoading ? <div>loading....</div> : null}
          {houseError ? <div> Error: {houseError.message}</div> : null}
          {!houseLoading &&
            !houseError &&
            houseData.allHouses.map((char) => (
              <p
                sx={{
                  color: "white",
                }}
                key={char._id}
              >
                {char.name}
              </p>
            ))}
        </div>
      </section>
      {/* <h1>Potter Site</h1>
      {loading ? <div>loading....</div> : null}
      {error ? <div> Error: {error.message}</div> : null}
      {!loading &&
        !error &&
        data.allCharacters.map((char) => <p key={char._id}>{char.name}</p>)} */}
    </div>
  );
};

// export const query = graphql`
//     {
//         potterAPI {
//             allCharacters {
//                 name
//             }
//         }

//     }
// `;
