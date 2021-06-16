package com.project.re.Dto;

import com.project.re.enumerations.Etat;
import com.project.re.enumerations.EtatConge;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
public class DemandeCongeDashboard {
    private EtatConge etat;
    private long nbr;
}
