import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserPage } from "../components/Pages/UserPage";
import { PrincipalPage } from "../components/Pages/PrincipalPage";
import { MoviePage } from "../components/Pages/MoviePage";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/netflix" component={PrincipalPage}></Route>
        </Switch>
        <Switch>
          <Route exact path="/netflix/:movie" component={MoviePage}></Route>
        </Switch>
        <Switch>
          <Route exact path="/" component={UserPage}>
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
