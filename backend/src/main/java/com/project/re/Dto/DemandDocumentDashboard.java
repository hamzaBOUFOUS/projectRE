package com.project.re.Dto;

import com.project.re.enumerations.Etat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
public class DemandDocumentDashboard {
    private Etat etat;
    private long nbr;
}
