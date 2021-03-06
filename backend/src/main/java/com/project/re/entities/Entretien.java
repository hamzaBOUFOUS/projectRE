package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name="entretien")
public class Entretien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="date_entretien")
    private Date dateEntretien;
    @Column
    private String heure;
    @OneToOne
    @JoinColumn(name = "id_post", referencedColumnName = "id")
    private Poste poste;
    @OneToOne
    @JoinColumn(name = "id_condidature", referencedColumnName = "id")
    private Condidature condidature;
    @OneToOne
    @JoinColumn(name = "id_department", referencedColumnName = "id")
    private Department department;
}
