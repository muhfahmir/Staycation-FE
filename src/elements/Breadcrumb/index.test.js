import React from "react";
import { render } from "@testing-library/react";

import Breadcrumb from "./index";

import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    {
      pageTitle: "Home",
      pageHref: "",
    },
    {
      pageTitle: "House Details",
      pageHref: "",
    },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );

  const breadCrumb = container.querySelector(".breadcrumb");

  return {
    breadCrumb,
  };
};

test("should have <ol></ol> with className .breadcrumb and have test Home & House Details", () => {
  const { breadCrumb } = setup();

  expect(breadCrumb).toBeInTheDocument();
  expect(breadCrumb).toHaveTextContent("Home");
  expect(breadCrumb).toHaveTextContent("House Details");
});
