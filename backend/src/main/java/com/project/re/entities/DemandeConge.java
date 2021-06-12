package com.project.re.entities;

import com.project.re.enumerations.Etat;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="demandeConge")
public class DemandeConge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="date_debut")
    private String dateDebut;
    @Column(name="date_fin")
    private String dateFin;
    @Column
    private Etat etat;
    @OneToOne
    @JoinColumn(name = "id_employee", referencedColumnName = "id")
    private Employee employee;
    @OneToOne
    @JoinColumn(name = "id_motif", referencedColumnName = "id")
    private Motif motif;
}
