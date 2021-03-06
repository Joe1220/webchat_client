import React from "react";
import { storiesOf } from "@storybook/react";

import BarChart from "./";
import { wInfo } from "../../../../../.storybook/utils";

const exampleData = [
  { key: "2019-01", value: 1 },
  { key: "2019-02", value: 10 },
  { key: "2019-03", value: 50 },
  { key: "2019-04", value: 30 },
  { key: "2019-05", value: 20 },
  { key: "2019-06", value: 20 },
  { key: "2019-07", value: 30 },
  { key: "2019-08", value: 23 },
  { key: "2019-09", value: 30 },
  { key: "2019-10", value: 40 },
  { key: "2019-11", value: 60 },
  { key: "2019-12", value: 110 }
];

storiesOf("Components/Molecules", module).add(
  "Charts/BarChart",
  () => (
    <React.Fragment>
      <h4>Bar Chart</h4>
      <BarChart data={exampleData} />
    </React.Fragment>
  ),
  wInfo(`
  ### Notes

  This is BarChart(Chart Molecules Component)
  recharts 라이브러리

  ### Usage

  ~~~js
    const exampleData = [
      { key: '2019-01', value: 1 },
      { key: '2019-02', value: 10 },
      { key: '2019-03', value: 50 },
      { key: '2019-04', value: 30 },
      { key: '2019-05', value: 20 },
      { key: '2019-06', value: 20 },
      { key: '2019-07', value: 30 },
      { key: '2019-08', value: 23 },
      { key: '2019-09', value: 30 },
      { key: '2019-10', value: 40 },
      { key: '2019-11', value: 60 },
      { key: '2019-12', value: 110 },
    ]
    <BarChart data={exampleData} />
  ~~~
`)
);
