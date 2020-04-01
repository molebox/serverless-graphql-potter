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
import Particles from "react-particles-js";

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
    <div
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Particles
        width="100vw"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 200,
                height: 200,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 0,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          backgroundColor: "#000000",
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
      />
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
          height: "100vh",
          width: "100vw",
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
