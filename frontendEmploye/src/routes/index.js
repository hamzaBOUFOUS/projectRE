import React from "react";
import { Route, Switch } from "react-router-dom";
import EvenementPage from "../pages/EvenementPage";
import VacancePage from "../pages/VacancePage";
import FormationPage from "../pages/FormationPage";
import DemandeCongePage from "../pages/DemandeCongePage";
import DocumentDemandePage from "../pages/DocumentDemandePage";
import DashboardHome from "../pages/DashboardHome";

const Routes = () => (
    <Switch>
        <Route path='/' component={DashboardHome} exact />
        <Route path='/evenement' component={EvenementPage} exact/>
        <Route path='/vacance' component={VacancePage} exact/>
        <Route path='/formation' component={FormationPage} exact/>
        <Route path='/demandeConge' component={DemandeCongePage} exact/>
        <Route path='/documentDemande' component={DocumentDemandePage} exact/>
    </Switch>
);
export default Routes;