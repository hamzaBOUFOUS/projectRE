package com.project.re.entities;

import com.project.re.enumerations.Etat;
import com.project.re.enumerations.EtatAbsence;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name="absence")
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private EtatAbsence etat;
    @Column(name="date_absence")
    private Date dateAbsence;
    @OneToOne
    @JoinColumn(name = "id_employee", referencedColumnName = "id")
    private Employee employee;
}
