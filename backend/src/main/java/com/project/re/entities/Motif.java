package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="motif")
public class Motif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="label")
    private String label;
}
