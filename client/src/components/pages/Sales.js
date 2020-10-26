import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Header from "../Header";
import styled from "styled-components";

function Sales() {
  const data = [
    { name: "Page A", uv: 200, pv: 200, amt: 2000 },
    { name: "Page B", uv: 300, pv: 150, amt: 2000 },
    { name: "Page C", uv: 150, pv: 280, amt: 2000 },
    { name: "Page D", uv: 200, pv: 200, amt: 2000 },
    { name: "Page E", uv: 280, pv: 280, amt: 2000 },
    { name: "Page F", uv: 190, pv: 190, amt: 2000 },
  ];

  const menuItem = {
    menu: ["Summary", "Orders"],
  };

  const SalesWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    padding-top: 5rem;
  `;
  return (
    <>
      <Header menuItem={menuItem} />
      <SalesWrapper>
        <h2>Order Summary</h2>
        <AreaChart width={1250} height={400} data={data} margin={{ top: 100 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            connectNulls
            type="monotone"
            dataKey="pv"
            stroke="#E3E6FE"
            fill="#F6F7FF"
            strokeWidth={3}
          />
          <Area
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#535B9D"
            fill="#B0B6EC"
            strokeWidth={3}
          />
        </AreaChart>
      </SalesWrapper>
    </>
  );
}

export default Sales;
