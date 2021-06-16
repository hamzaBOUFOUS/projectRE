package com.project.re.repositories;

import com.project.re.entities.Evenement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EvenementRepositorie extends JpaRepository<Evenement, Long > {
    @Query(value = "select e from Evenement e where " +
            "(upper(e.nom) like upper(CONCAT('%', :nom, '%')) or :nom is null)")
    Page<Evenement> findByCriteria(Pageable pageable, String nom);

    /*@Query(value = "select e from Evenement e, Employee ee where " +
            "e.employees.id = ee.id and " +
            "ee.id = :id")
    Page<Evenement> findByCriteriaId(Pageable pageable, long id);*/

    Page<Evenement> findAllByEmployeesId(Pageable pageable, long id);

    List<Evenement> findTop3ByOrderByDateDebutDesc();
}
