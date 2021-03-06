import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "../misc/customizedLoadable";
import Scroller from "../misc/scroller";

import { Container } from "../layout";
import { AppHeader } from "./appHeader";
import { MaintenanceHandler } from "./maintenance";
import Navbar from "./navbar";
import CanonicalLink from "../misc/canonicalLink";
import Loading from "../misc/loading";
import GameRecords from "../gameRecords";
import Tracker, { PageCategory } from "../misc/tracker";
import Conf from "../../utils/conf";

const Helmet = Loadable({
  loader: () => import("react-helmet"),
  loading: () => <></>
});
const Ranking = Loadable({
  loader: () => import("../ranking"),
  loading: () => <Loading />
});
const Statistics = Loadable({
  loader: () => import("../statistics"),
  loading: () => <Loading />
});
const RecentHighlight = Loadable({
  loader: () => import("../recentHighlight"),
  loading: () => <Loading />
});

function App() {
  return (
    <Router>
      <Helmet defaultTitle={Conf.siteTitle} titleTemplate={`%s | ${Conf.siteTitle}`} />
      <CanonicalLink />
      <Tracker />
      <Navbar />
      <MaintenanceHandler>
        <Scroller>
          {Conf.showTopNotice ? <AppHeader /> : <></>}
          <Container>
            <Switch>
              <Route path="/ranking">
                <PageCategory category="Ranking" />
                <Ranking />
              </Route>
              <Route path="/statistics">
                <PageCategory category="Statistics" />
                <Statistics />
              </Route>
              <Route path="/highlight">
                <PageCategory category="RecentHighlight" />
                <RecentHighlight />
              </Route>
              <Route path="/">
                <GameRecords />
              </Route>
            </Switch>
          </Container>
        </Scroller>
      </MaintenanceHandler>
    </Router>
  );
}
export default App;
