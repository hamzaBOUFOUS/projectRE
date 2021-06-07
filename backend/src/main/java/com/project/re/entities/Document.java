package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="document")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="type_document")
    private String typeDocument;
}
