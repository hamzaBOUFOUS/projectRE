package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
@Table(name="evenement")
public class Evenement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nom;
    @Column(name="date_debut")
    private String dateDebut;
    @Column(name="date_fin")
    private String dateFin;
    @Column
    private String description;
    @ManyToMany
    @JoinTable(
            name = "evenement_employees",
            joinColumns = @JoinColumn(
                    name = "evenement_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "employee_id", referencedColumnName = "id"))
    private Collection<Employee> employees;
}
