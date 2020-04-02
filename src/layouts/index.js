import React from "react";
import { Global, css } from "@emotion/core";
import Background from "./../components/background";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
            height: 100%;
            width: 100%;
          }
        `}
      />
      <Background />
      {children}
    </>
  );
};

export default Layout;
