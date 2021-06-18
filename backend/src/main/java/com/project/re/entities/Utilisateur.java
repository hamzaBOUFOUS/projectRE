package com.project.re.entities;

import com.project.re.enumerations.Roles;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="utilisateur")
public class Utilisateur extends Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Roles role;
    @Column(unique = true)
    private String username;
    @Column(length = 255, nullable = false)
    private String password;
}
