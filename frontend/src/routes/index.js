import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import EvenementPage from "../pages/EvenementPage";
import ContratPage from "../pages/ContratPage";
import DepartmentPage from "../pages/DepartmentPage";
import DocumentPage from "../pages/DocumentPage";
import PostePage from "../pages/PostePage";
import AbsencePage from "../pages/AbsencePage";
import VacancePage from "../pages/VacancePage";

const Routes = () => (
    <Switch>
        <Route path='/evenement' component={EvenementPage} />
        <Route path='/contrat' component={ContratPage} />
        <Route path='/department' component={DepartmentPage} />
        <Route path='/document' component={DocumentPage} />
        <Route path='/poste' component={PostePage} />
        <Route path='/absence' component={AbsencePage} />
        <Route path='/vacance' component={VacancePage} />
    </Switch>
);
export default Routes;