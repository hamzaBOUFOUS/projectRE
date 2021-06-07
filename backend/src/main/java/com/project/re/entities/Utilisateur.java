package com.project.re.entities;

import com.project.re.enumerations.Roles;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="utilisateur")
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Roles role = Roles.EMPLOYE;
    @Column(unique = true)
    private String username;
    @Column(length = 255, nullable = false)
    private String password;
}
