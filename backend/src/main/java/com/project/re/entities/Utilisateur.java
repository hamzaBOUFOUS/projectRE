package com.project.re.entities;

import com.project.re.enumerations.Roles;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="utilisateur")
@PrimaryKeyJoinColumn(name = "utilisateurId")
public class Utilisateur extends Employee {

    @Column
    private Roles role;
    @Column(unique = true)
    private String username;
    @Column(length = 255, nullable = false)
    private String password;
}
