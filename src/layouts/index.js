/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Global, css } from "@emotion/core";
import Background from "./../components/background";

const Layout = ({ children }) => {
  return (
    <div
    // sx={{
    //   border: "solid 5px",
    //   borderImageSource:
    //     "linear-gradient(90deg, rgba(127,9,9,1) 0%, rgba(255,197,0,1) 12%, rgba(238,225,23,1) 24%, rgba(0,0,0,1) 36%, rgba(13,98,23,1) 48%, rgba(170,170,170,1) 60%, rgba(0,10,144,1) 72%, rgba(148,119,45,1) 84%)",
    //   borderImageSlice: 1,
    // }}
    >
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;

            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: #fff;
              border-radius: 20px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #000;
              border-radius: 20px;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #000;
            }
          }
          body {
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
            // height: 100%;
            // width: 100%;
          }
        `}
      />
      {/* <Background /> */}
      {children}
    </div>
  );
};

export default Layout;
