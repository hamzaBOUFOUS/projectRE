package com.project.re.services;

import com.project.re.Dto.AbsenceRecrutementDashboard;
import com.project.re.Dto.DashboardEmp;
import com.project.re.Dto.DemandDocumentDashboard;
import com.project.re.Dto.DemandeCongeDashboard;
import com.project.re.enumerations.Etat;
import com.project.re.enumerations.EtatConge;
import com.project.re.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class DashboardEmpService {
    private final AbsenceRepositorie absenceRepositorie;
    private final DemandeCongeRepositorie demandeCongeRepositorie;
    private final EvenementRepositorie evenementRepositorie;
    private final FormationRepositorie formationRepositorie;
    private final DocumentDemandeRepositorie documentDemandeRepositorie;
    private List<Integer> months = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

    @Autowired
    public DashboardEmpService(AbsenceRepositorie absenceRepositorie,
                            DemandeCongeRepositorie demandeCongeRepositorie, FormationRepositorie formationRepositorie,
                            EvenementRepositorie evenementRepositorie,DocumentDemandeRepositorie documentDemandeRepositorie) {
        this.absenceRepositorie = absenceRepositorie;
        this.demandeCongeRepositorie = demandeCongeRepositorie;
        this.evenementRepositorie = evenementRepositorie;
        this.formationRepositorie = formationRepositorie;
        this.documentDemandeRepositorie = documentDemandeRepositorie;
    }

    public DashboardEmp constructDashboardEmp(long id){
        DashboardEmp dashboardEmp = new DashboardEmp();
        dashboardEmp.setNbrEmplAbsence(absenceRepositorie.nbrEmplAbsenceId(id));
        dashboardEmp.setNbrEmplConge(demandeCongeRepositorie.nbrEmplCongeId(id));
        dashboardEmp.setNbrEmplFormation(formationRepositorie.countFormationByEmployeesId(id));
        dashboardEmp.setNbrEmplDocument(documentDemandeRepositorie.nbrEmplDocumentId(id));
        dashboardEmp.setLastThreeEmplEvenement(evenementRepositorie.findTop4ByEmployeesIdOrderByDateDebutDesc(id));
        dashboardEmp.setLastThreeEmplFormation(formationRepositorie.findTop4ByEmployeesIdOrderByDateDebutDesc(id));
        dashboardEmp.setNbrAbsenceEmplYear(repToList(absenceRepositorie.nbrAbsenceEmplYear(id)));
        List<DemandeCongeDashboard> nbrDemandeConge = demandeCongeRepositorie.nbrDemandeEmplConge(id);
        for(EtatConge ec: EtatConge.values()){
            boolean test = nbrDemandeConge.stream().anyMatch(item -> item.getEtat().name().equals(ec.name()));
            if(!test){
                nbrDemandeConge.add(new DemandeCongeDashboard(ec,0));
            }
        }
        List<DemandDocumentDashboard> nbrDemandeDocument = documentDemandeRepositorie.nbrDemandeEmplDocument(id);
        for(Etat e: Etat.values()){
            boolean test = nbrDemandeDocument.stream().anyMatch(item -> item.getEtat().name().equals(e.name()));
            if(!test){
                nbrDemandeDocument.add(new DemandDocumentDashboard(e,0));
            }
        }
        dashboardEmp.setNbrDemandeEmplConge(nbrDemandeConge);
        dashboardEmp.setNbrDemandeEmplDocuement(nbrDemandeDocument);
        return dashboardEmp;
    }

    public List<AbsenceRecrutementDashboard> repToList(List<AbsenceRecrutementDashboard> dashboards){
        List<AbsenceRecrutementDashboard> listdashboards = dashboards;
        for(int e: months){
            boolean test = listdashboards.stream().anyMatch(item -> item.getMonth() == e);
            if(!test){
                listdashboards.add(new AbsenceRecrutementDashboard(e,0));
            }
        }
        Collections.sort(listdashboards, new Comparator<AbsenceRecrutementDashboard>(){
            public int compare(AbsenceRecrutementDashboard ar1, AbsenceRecrutementDashboard ar2) {
                return ar1.getMonth() - ar2.getMonth();
            }
        });
        return listdashboards;
    }

}
