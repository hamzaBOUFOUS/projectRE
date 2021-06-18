package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name="employee")
@Inheritance(strategy = InheritanceType.JOINED)
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String cin;
    @Column
    private String nom;
    @Column
    private String prenom;
    @Column(name="date_naissace")
    private Date dateNaissace;
    @Column
    private String email;
    @Column
    private String telephone;
    @Column
    private String adresse;
    @Column
    private String nationalite;
    @Column(name="code_postale")
    private String codePostale;
    @Column
    private String salaire;
    @Column
    private String horaire;
    @Column(name="date_debut")
    private Date dateDebut;
    @OneToOne
    @JoinColumn(name = "id_department", referencedColumnName = "id")
    private Department department;
    @OneToOne
    @JoinColumn(name = "id_poste", referencedColumnName = "id")
    private Poste poste;
    @OneToOne
    @JoinColumn(name = "id_contrat", referencedColumnName = "id")
    private Contrat contrat;

}
