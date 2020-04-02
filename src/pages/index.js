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
  console.log({ data });
  console.log({ error });

  // React.useEffect(() => {
  //     refetch();
  // }, [data])
  return (
    <div
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        border: "solid 10px",
        borderImageSource:
          "linear-gradient(90deg, rgba(127,9,9,1) 0%, rgba(255,197,0,1) 12%, rgba(238,225,23,1) 24%, rgba(0,0,0,1) 36%, rgba(13,98,23,1) 48%, rgba(170,170,170,1) 60%, rgba(0,10,144,1) 72%, rgba(148,119,45,1) 84%)",
        borderImageSlice: 1,
      }}
    >
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
        <Houses />
        <Intro />
      </section>
      <section
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <div>
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
        </div>
        <div
          sx={{
            color: "white",
          }}
        >
          something here
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
