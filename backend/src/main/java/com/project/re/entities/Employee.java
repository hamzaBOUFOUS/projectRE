package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="employee")
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
    private String dateNaissace;
    @Column
    private String email;
    @Column
    private String Telephone;
    @Column
    private String adresse;
    @Column
    private String nationalite;
    @Column(name="code_postale")
    private String codePostale;
    @Column
    private String salaire;
    @Column(name="date_debut")
    private String dateDebut;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_department", referencedColumnName = "id")
    private Department department;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_poste", referencedColumnName = "id")
    private Poste poste;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_contrat", referencedColumnName = "id")
    private Contrat contrat;

}
