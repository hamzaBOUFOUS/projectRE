import { combineReducers } from "redux";
import { ContratsReducer } from "./contrat/reducers";
import { EvenementsReducer } from "./evenement/reducers";
import { EmployeesReducer } from "./employee/reducers";
import { DepartmentsReducer } from "./department/reducers";
import { PostesReducer } from "./poste/reducers";
import { DocumentsReducer } from "./document/reducers";
import { AbsencesReducer } from "./absence/reducers";
import { VacancesReducer } from "./vacance/reducers";

export default combineReducers({
    contrats: ContratsReducer,
    evenements:EvenementsReducer,
    employees:EmployeesReducer,
    departments:DepartmentsReducer,
    postes:PostesReducer,
    documents:DocumentsReducer,
    absences:AbsencesReducer,
    vacances:VacancesReducer
});
