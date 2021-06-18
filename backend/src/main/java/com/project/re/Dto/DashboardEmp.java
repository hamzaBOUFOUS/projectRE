package com.project.re.Dto;

import com.project.re.entities.Evenement;
import com.project.re.entities.Formation;
import lombok.Data;

import java.util.List;

@Data
public class DashboardEmp {
    private long nbrEmplConge;
    private long nbrEmplDocument;
    private long nbrEmplAbsence;
    private long nbrEmplFormation;
    private List<Formation> lastThreeEmplFormation;
    private List<Evenement> lastThreeEmplEvenement;
    private List<DemandeCongeDashboard> nbrDemandeEmplConge;
    private List<DemandDocumentDashboard> nbrDemandeEmplDocuement;
    private List<AbsenceRecrutementDashboard> nbrAbsenceEmplYear;
}
