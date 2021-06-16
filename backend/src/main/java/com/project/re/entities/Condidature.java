package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name="condidature")
public class Condidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String cin;
    @Column
    private String nom;
    @Column
    private String prenom;
    @Column
    private String email;
    @Column
    private String telephone;
    @Column
    private String adresse;
    @Column(name="date_depot")
    private Date dateDepot;
    @Column
    private String cv;
}
