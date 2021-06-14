package com.project.re.repositories;

import com.project.re.entities.DemandeConge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DemandeCongeRepositorie  extends JpaRepository<DemandeConge, Long > {
    @Query(value = "select count(distinct dc.employee.id) from DemandeConge dc where " +
            "dc.etat = 'APPROUVE' and CURDATE() between dc.dateDebut and dc.dateFin")
    Long nbrEmplConge();
}
