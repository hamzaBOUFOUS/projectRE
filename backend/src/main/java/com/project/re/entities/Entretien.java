package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="entretien")
public class Entretien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="date_entretien")
    private String dateEntretien;
    @Column
    private String heure;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_post", referencedColumnName = "id")
    private Poste poste;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_condidature", referencedColumnName = "id")
    private Condidature condidature;
}
