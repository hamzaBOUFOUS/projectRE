package com.project.re.services;

import com.project.re.Dto.AbsenceRecrutementDashboard;
import com.project.re.Dto.Dashboard;
import com.project.re.Dto.DemandDocumentDashboard;
import com.project.re.Dto.DemandeCongeDashboard;
import com.project.re.entities.DocumentDemande;
import com.project.re.enumerations.Etat;
import com.project.re.enumerations.EtatConge;
import com.project.re.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DashboardService {
    private final AbsenceRepositorie absenceRepositorie;
    private final EmployeeRepositorie employeeRepositorie;
    private final DemandeCongeRepositorie demandeCongeRepositorie;
    private final EvenementRepositorie evenementRepositorie;
    private final FormationRepositorie formationRepositorie;
    private final DocumentDemandeRepositorie documentDemandeRepositorie;
    private final EntretienRepositorie entretienRepositorie;
    private final CondidatureRepositorie condidatureRepositorie;
    private List<Integer> months = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

    @Autowired
    public DashboardService(AbsenceRepositorie absenceRepositorie, EmployeeRepositorie employeeRepositorie,
                DemandeCongeRepositorie demandeCongeRepositorie, FormationRepositorie formationRepositorie,
                EvenementRepositorie evenementRepositorie,DocumentDemandeRepositorie documentDemandeRepositorie,
                CondidatureRepositorie condidatureRepositorie, EntretienRepositorie entretienRepositorie) {
        this.absenceRepositorie = absenceRepositorie;
        this.employeeRepositorie = employeeRepositorie;
        this.demandeCongeRepositorie = demandeCongeRepositorie;
        this.evenementRepositorie = evenementRepositorie;
        this.formationRepositorie = formationRepositorie;
        this.documentDemandeRepositorie = documentDemandeRepositorie;
        this.condidatureRepositorie = condidatureRepositorie;
        this.entretienRepositorie = entretienRepositorie;
    }

    public Dashboard constructDashboard(){
        Dashboard dashboard = new Dashboard();
        long setNbrEmplPresent = employeeRepositorie.nbrEmpl() - absenceRepositorie.nbrEmplAbsence() - demandeCongeRepositorie.nbrEmplConge();
        dashboard.setNbrEmplAbsence(absenceRepositorie.nbrEmplAbsence());
        dashboard.setNbrEmpl(employeeRepositorie.nbrEmpl());
        dashboard.setNbrEmplPresent(setNbrEmplPresent);
        dashboard.setNbrEmplConge(demandeCongeRepositorie.nbrEmplConge());
        dashboard.setLastThreeFormation(formationRepositorie.findTop3ByOrderByDateDebutDesc());
        dashboard.setLastThreeEvenement(evenementRepositorie.findTop3ByOrderByDateDebutDesc());
        List<DemandeCongeDashboard> nbrDemandeConge = demandeCongeRepositorie.nbrDemandeConge();
        for(EtatConge ec: EtatConge.values()){
            boolean test = nbrDemandeConge.stream().anyMatch(item -> item.getEtat().name().equals(ec.name()));
            if(!test){
                nbrDemandeConge.add(new DemandeCongeDashboard(ec,0));
            }
        }
        List<DemandDocumentDashboard> nbrDemandeDocument = documentDemandeRepositorie.nbrDemandeDocument();
        for(Etat e: Etat.values()){
            boolean test = nbrDemandeDocument.stream().anyMatch(item -> item.getEtat().name().equals(e.name()));
            if(!test){
                nbrDemandeDocument.add(new DemandDocumentDashboard(e,0));
            }
        }
        dashboard.setNbrDemandeConge(nbrDemandeConge);
        dashboard.setNbrDemandeDocuement(nbrDemandeDocument);
        dashboard.setNbrCondidatureYear(repToList(condidatureRepositorie.nbrCondidatureYear()));
        dashboard.setNbrAbsenceYear(repToList(absenceRepositorie.nbrAbsenceYear()));
        dashboard.setNbrEntretienYear(repToList(entretienRepositorie.nbrEntretienYear()));
        return dashboard;
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
