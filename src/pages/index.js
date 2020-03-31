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
import Griffindor from "./../components/house-banners/griffindor";
import Hufflepuff from "./../components/house-banners/hufflepuff";
import Slytherin from "./../components/house-banners/slytherin";
import Ravenclaw from "./../components/house-banners/ravenclaw";

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

  // React.useEffect(() => {
  //     refetch();
  // }, [data])
  return (
    <div>
      <section
        sx={{
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
          height: "100vh",
        }}
      >
        <Logo />
        <Houses />
        <Intro />
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
