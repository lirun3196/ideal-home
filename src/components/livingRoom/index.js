import React from "react";
import BasePage from "../basePage/basePage";
import importAll from "../base/importAll";
import data from "./data.json";

export default function LivingRoom() {
  const pathLike = importAll(
    require.context("./img/like", true, /^\.\/.*\.jpg|png|gif|svg$/)
  );
  const pathDiss = importAll(
    require.context("./img/diss", true, /^\.\/.*\.jpg|png|gif|svg$/)
  );
  const sliders = [{ paths: pathLike, describe: "Like:" }, { paths: pathDiss, describe: "Diss:" }];
  return <BasePage data={data} sliders={sliders}/>;
}
