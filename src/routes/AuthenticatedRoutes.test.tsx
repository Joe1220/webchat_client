import React from "react";
import { mount } from "enzyme";
import { Provider } from "mobx-react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Routes from "./AuthenticatedRoutes";
import { Lobby } from "containers";
import rootStore from "stores/RootStore";
import Theme from "components/_settings/styles";

describe("routing using memory router", () => {
  it("should render Home Component for '/' router", () => {
    const component = mount(
      <Provider {...rootStore}>
        <ThemeProvider theme={Theme}>
          <MemoryRouter initialEntries={["/"]}>
            <Routes />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(component.find(Lobby)).toHaveLength(1);
  });
  it("should Redirect '/' route when random route", () => {
    const component = mount(
      <Provider {...rootStore}>
        <ThemeProvider theme={Theme}>
          <MemoryRouter initialEntries={["/random"]}>
            <Routes />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(component.find(Lobby)).toHaveLength(1);
  });
});
