import React from "react";

import { Alert } from "../misc/alert";
import { Switch, Route, Redirect, useRouteMatch } from "react-router";
import DeltaRanking from "./deltaRanking";
import CareerRanking from "./careerRanking";
import { NavLink } from "react-router-dom";

export default function Routes() {
  const match = useRouteMatch() || { path: "" };
  return (
    <div>
      <Alert stateName="rankingNotice">
        <h4 className="mb-2">提示</h4>
        排行榜非实时更新，可能会有数小时的延迟
      </Alert>
      <nav className="nav nav-pills mb-3">
        <NavLink to={`${match.path}/delta`} className="nav-link" activeClassName="active">
          苦主与汪汪
        </NavLink>
        <NavLink to={`${match.path}/career`} className="nav-link" activeClassName="active">
          数据榜
        </NavLink>
      </nav>
      <Switch>
        <Route path={`${match.path}/delta`}>
          <DeltaRanking />
        </Route>
        <Route path={`${match.path}/career`}>
          <CareerRanking />
        </Route>
        <Route>
          <Redirect to={`${match.path}/delta`} />
        </Route>
      </Switch>
    </div>
  );
}