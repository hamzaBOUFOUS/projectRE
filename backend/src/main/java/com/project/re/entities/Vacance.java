package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name="vacance")
public class Vacance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column(name="date_debut")
    private Date dateDebut;
    @Column(name="date_fin")
    private Date dateFin;
}
