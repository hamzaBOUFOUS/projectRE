package com.project.re.services;

import com.project.re.Dto.Dashboard;
import com.project.re.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
    private final AbsenceRepositorie absenceRepositorie;
    private final EmployeeRepositorie employeeRepositorie;
    private final DemandeCongeRepositorie demandeCongeRepositorie;
    private final EvenementRepositorie evenementRepositorie;
    private final FormationRepositorie formationRepositorie;

    @Autowired
    public DashboardService(AbsenceRepositorie absenceRepositorie, EmployeeRepositorie employeeRepositorie,
                DemandeCongeRepositorie demandeCongeRepositorie, FormationRepositorie formationRepositorie,
                EvenementRepositorie evenementRepositorie) {
        this.absenceRepositorie = absenceRepositorie;
        this.employeeRepositorie = employeeRepositorie;
        this.demandeCongeRepositorie = demandeCongeRepositorie;
        this.evenementRepositorie = evenementRepositorie;
        this.formationRepositorie = formationRepositorie;
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
        return dashboard;
    }
}
