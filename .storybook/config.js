import React from "react";
import { Provider } from "mobx-react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import rootStore from "../src/stores/RootStore";
import theme from "../src/components/_settings/styles";

const wInfoStyle = {
  header: {
    h1: {
      marginRight: "14px",
      fontSize: "20px",
      display: "inline"
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0
    },
    h2: {
      display: "inline",
      color: "#999"
    }
  },
  infoBody: {
    backgroundColor: "#eee",
    padding: "5px 5px",
    lineHeight: "2"
  }
};

const StyledContainer = styled("div")`
  padding: 10px;
`;

addDecorator(
  withInfo({
    inline: true,
    source: false,
    styles: wInfoStyle
  })
);

addDecorator(story => {
  return (
    <Provider {...rootStore}>
      <ThemeProvider theme={theme}>
        <Router history={createBrowserHistory()}>
          <StyledContainer>{story()}</StyledContainer>
        </Router>
      </ThemeProvider>
    </Provider>
  );
});

addDecorator(withKnobs);

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(req);
}

configure(loadStories, module);
