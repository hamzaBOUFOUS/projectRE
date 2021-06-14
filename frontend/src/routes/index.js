import React from "react";
import { Route, Switch } from "react-router-dom";
import EvenementPage from "../pages/EvenementPage";
import ContratPage from "../pages/ContratPage";
import DepartmentPage from "../pages/DepartmentPage";
import DocumentPage from "../pages/DocumentPage";
import PostePage from "../pages/PostePage";
import AbsencePage from "../pages/AbsencePage";
import VacancePage from "../pages/VacancePage";
import FormationPage from "../pages/FormationPage";
import EntretienPage from "../pages/EntretienPage";
import CondidaturePage from "../pages/CondidaturePage";
import EmployeePage from "../pages/EmployeePage";
import DemandeCongePage from "../pages/DemandeCongePage";
import DocumentDemandePage from "../pages/DocumentDemandePage";
import DashboardHome from "../pages/DashboardHome";

const Routes = () => (
    <Switch>
        <Route path='/' component={DashboardHome} exact />
        <Route path='/evenement' component={EvenementPage} exact/>
        <Route path='/contrat' component={ContratPage} />
        <Route path='/department' component={DepartmentPage} exact/>
        <Route path='/document' component={DocumentPage} exact/>
        <Route path='/poste' component={PostePage} exact />
        <Route path='/absence' component={AbsencePage} exact/>
        <Route path='/vacance' component={VacancePage} exact/>
        <Route path='/formation' component={FormationPage} exact/>
        <Route path='/entretien' component={EntretienPage} exact/>
        <Route path='/condidature' component={CondidaturePage} exact/>
        <Route path='/employee' component={EmployeePage} exact/>
        <Route path='/demandeConge' component={DemandeCongePage} exact/>
        <Route path='/documentDemande' component={DocumentDemandePage} exact/>
    </Switch>
);
export default Routes;