package com.project.re.repositories;

import com.project.re.entities.Evenement;
import com.project.re.entities.Vacance;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EvenementRepositorie extends JpaRepository<Evenement, Long > {
    @Query(value = "select e from Evenement e where " +
            "(upper(e.nom) like upper(CONCAT('%', :nom, '%')) or :nom is null)")
    Page<Evenement> findByCriteria(Pageable pageable, String nom);
}
