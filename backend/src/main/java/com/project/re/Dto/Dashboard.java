package com.project.re.Dto;

import com.project.re.entities.Evenement;
import com.project.re.entities.Formation;
import lombok.Data;

import java.util.List;

@Data
public class Dashboard {
    private long nbrEmpl;
    private long nbrEmplPresent;
    private long nbrEmplAbsence;
    private long nbrEmplConge;
    private List<Formation> lastThreeFormation;
    private List<Evenement> lastThreeEvenement;
    private List<DemandeCongeDashboard> nbrDemandeConge;
    private List<DemandDocumentDashboard> nbrDemandeDocuement;
    private List<AbsenceRecrutementDashboard> nbrAbsenceYear;
    private List<AbsenceRecrutementDashboard> nbrCondidatureYear;
    private List<AbsenceRecrutementDashboard> nbrEntretienYear;
}
