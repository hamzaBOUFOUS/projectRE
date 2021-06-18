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

    Page<Evenement> findAllByEmployeesId(Pageable pageable, long id);

    List<Evenement> findTop3ByOrderByDateDebutDesc();

    List<Evenement> findTop4ByEmployeesIdOrderByDateDebutDesc(long id);
}
