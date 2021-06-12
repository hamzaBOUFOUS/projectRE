package com.project.re.entities;

import com.project.re.enumerations.Etat;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="documentDemande")
public class DocumentDemande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Etat etat;
    @OneToOne
    @JoinColumn(name = "id_employee", referencedColumnName = "id")
    private Employee employee;
    @OneToOne
    @JoinColumn(name = "id_document", referencedColumnName = "id")
    private Document document;
}
