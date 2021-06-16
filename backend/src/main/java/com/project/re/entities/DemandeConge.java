package com.project.re.entities;

import com.project.re.enumerations.Etat;
import com.project.re.enumerations.EtatConge;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name="demandeConge")
public class DemandeConge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="date_debut")
    private Date dateDebut;
    @Column(name="date_fin")
    private Date dateFin;
    @Column
    private EtatConge etat;
    @OneToOne
    @JoinColumn(name = "id_employee", referencedColumnName = "id")
    private Employee employee;
    @OneToOne
    @JoinColumn(name = "id_motif", referencedColumnName = "id")
    private Motif motif;
}
