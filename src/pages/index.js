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

export default () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [selectedHouse, setSelectedHouse] = React.useState("");

  console.log({ selectedHouse });

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
        {loading ? <div>loading....</div> : null}
        {error ? <div> Error: {error.message}</div> : null}
        {!loading &&
          !error &&
          data.allCharacters.map((char) => (
            <p
              sx={{
                color: "white",
              }}
              key={char._id}
            >
              {char.name}
            </p>
          ))}
        <div
          sx={{
            color: "white",
          }}
        ></div>
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
