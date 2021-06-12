package com.project.re.repositories;

import com.project.re.entities.DocumentDemande;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentDemandeRepositorie extends JpaRepository<DocumentDemande, Long > {
}
