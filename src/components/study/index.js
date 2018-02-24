import React from "react";
import BasePage from "../basePage/basePage";
import importAll from "../base/importAll";
import data from "./data.json";

export default function Study() {
  const pathLike = importAll(
    require.context("./img", true, /^\.\/.*\.jpg|png|gif|svg$/)
  );
  const sliders = [{ paths: pathLike}];
  return <BasePage data={data} sliders={sliders}/>;
}
