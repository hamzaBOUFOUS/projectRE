package com.project.re.repositories;

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

    //@Query(value = "select f from Formation f join Employee e where e.id = :id")
    /*@Query(value = "select f from Formation f, Employee e where " +
            "f.employees.id = e.id and " +
            "e.id = :id")
    Page<Formation> findByCriteriaId(Pageable pageable, long id);*/

    Page<Formation> findAllByEmployeesId(Pageable pageable, long id);
    List<Formation> findTop3ByOrderByDateDebutDesc();

}
