package com.project.re.repositories;

import com.project.re.entities.Evenement;
import com.project.re.entities.Formation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FormationRepositorie extends JpaRepository<Formation, Long > {
    @Query(value = "select f from Formation f where " +
            "(upper(f.nom) like upper(CONCAT('%', :nom, '%')) or :nom is null)")
    Page<Formation> findByCriteria(Pageable pageable, String nom);

    /*@Query(value = "select f from Formation f ORDER BY f.dateDebut DESC LIMIT 3")
    List<Formation> findLastThreeFormation();*/

    List<Formation> findTop3ByOrderByDateDebutDesc();

}
