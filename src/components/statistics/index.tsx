import React from "react";

import { ModelModeProvider, ModelModeSelector } from "../modeModel";
import { ViewRoutes, SimpleRoutedSubViews, NavButtons, RouteDef } from "../routing";
import { ViewSwitch } from "../routing/index";

import RankBySeats from "./rankBySeats";
import DataByRank from "./dataByRank";

const ROUTES = (
  <ViewRoutes>
    <RouteDef path="rank-by-seat" title="坐席顺位">
      <RankBySeats />
    </RouteDef>
    <RouteDef path="data-by-rank" title="等级数据">
      <DataByRank />
    </RouteDef>
  </ViewRoutes>
);

export default function Routes() {
  return (
    <SimpleRoutedSubViews>
      {ROUTES}
      <ModelModeProvider>
        <NavButtons />
        <ModelModeSelector />
        <ViewSwitch />
      </ModelModeProvider>
    </SimpleRoutedSubViews>
  );
}