/** @jsx jsx */
import { jsx } from "theme-ui";

const Intro = () => (
  <section
    sx={{
      gridArea: "intro",
      padding: "0 2em",
      height: "100%",
      position: "relative",
    }}
  >
    <p
      sx={{
        fontFamily: "heading",
        fontSize: "1.5em",
        position: "relative",
        color: "white",
      }}
    >
      This is a side project i made to learn about serverless functions. Having
      achieved that goal i wanted to do something fun with the data so welcome
      to the magical world of Harry Potter!
    </p>
    <p
      sx={{
        fontFamily: "heading",
        fontSize: "1.5em",
        position: "relative",
        color: "white",
        marginTop: "1em",
      }}
    >
      For those that are interested, the site is made with Gatsby, utilizes AWS
      lamdba functions by way of Netlify with the data stored in and fetched
      from FaunaDB using Apollo.
    </p>
    <p
      sx={{
        fontFamily: "heading",
        fontSize: "1.5em",
        position: "relative",
        color: "white",
        marginTop: "1em",
      }}
    >
      Select your Hogwarts house above to view it's information and members.
    </p>
  </section>
);

export default Intro;
