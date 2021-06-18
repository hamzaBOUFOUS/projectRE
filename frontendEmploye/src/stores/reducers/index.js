import { combineReducers } from "redux";
import { EvenementsReducer } from "./evenement/reducers";
import { VacancesReducer } from "./vacance/reducers";
import { FormationsReducer } from "./formation/reducers";
import { DemandeCongesReducer } from "./demandeConge/reducers";
import { DocumentDemandesReducer } from "./documentDemande/reducers";
import { dashboardReducer } from "./dashboard/reducers";
import { usersReducer } from "./utilisateur/reducers";
import { DocumentsReducer } from "./document/reducers";
import { MotifsReducer } from "./motif/reducers";
import { AbsencesReducer } from "./absence/reducers";

export default combineReducers({
    evenements:EvenementsReducer,
    vacances:VacancesReducer,
    formations:FormationsReducer,
    demandeConges:DemandeCongesReducer,
    documentDemandes:DocumentDemandesReducer,
    dashboards:dashboardReducer,
    users:usersReducer,
    documents:DocumentsReducer,
    motifs:MotifsReducer,
    absences:AbsencesReducer
});
