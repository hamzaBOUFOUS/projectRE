import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import EvenementPage from "../pages/EvenementPage";
import ContratPage from "../pages/ContratPage";
import DepartmentPage from "../pages/DepartmentPage";
import DocumentPage from "../pages/DocumentPage";
import PostePage from "../pages/PostePage";

const Routes = () => (
    <Switch>
        <Route path='/evenement' component={EvenementPage} />
        <Route path='/contrat' component={ContratPage} />
        <Route path='/department' component={DepartmentPage} />
        <Route path='/document' component={DocumentPage} />
        <Route path='/poste' component={PostePage} />
    </Switch>
);
export default Routes;