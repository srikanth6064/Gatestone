import React, { Component } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "No.of TotalClients", "No. of Calls Scheduled", "No. of No responses",  "No. of negative responses"],
  ["Day1", 200, 400, 200, 100],
  ["Day2", 200, 460, 250, 100],
  ["Day3", 660, 100, 300, 100],
  ["Day4", 200, 540, 350, 100],
];

export const options = {
  chart: {
    title: "Campaign Analytics",
    subtitle: "No.of contacted, Responses, Call scheduled  and Postive & Negative: 2021-2022",
  },
};

export default class BarCha extends Component {
  render() {
    return (
      <Chart
        chartType="Bar"
        width="80%"
        height="400px"
        data={data}
        options={options}
      />
    );
  }
}
