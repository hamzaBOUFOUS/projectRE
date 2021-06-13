package com.project.re.repositories;

import com.project.re.entities.Entretien;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EntretienRepositorie extends JpaRepository<Entretien, Long > {
    @Query(value = "select e from Entretien e where " +
            "(upper(e.condidature.nom) like upper(CONCAT('%', :condidature, '%')) or :condidature is null) and "+
            "(upper(e.poste.poste) like upper(CONCAT('%', :poste, '%')) or :poste is null) and "+
            "(upper(e.department.nomDepartment) like upper(CONCAT('%', :department, '%')) or :department is null)")
    Page<Entretien> findByCriteria(Pageable pageable, String condidature, String poste, String department);
}
