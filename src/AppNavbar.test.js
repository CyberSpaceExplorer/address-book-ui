import React from "react";
import { render, screen } from "@testing-library/react";
import AppNavbar from "./AppNavbar";
import {shallow} from "enzyme";

test('render send email link', () => {
  const appNavbarWrapper = shallow(<AppNavbar />);
  expect(appNavbarWrapper.find('[href="mailto:xinyizhou1999@hotmail.com"]').length).toBe(1);
});