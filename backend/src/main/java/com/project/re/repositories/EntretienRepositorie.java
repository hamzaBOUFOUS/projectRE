package com.project.re.repositories;

import com.project.re.Dto.AbsenceRecrutementDashboard;
import com.project.re.entities.Entretien;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EntretienRepositorie extends JpaRepository<Entretien, Long > {
    @Query(value = "select e from Entretien e where " +
            "(upper(e.condidature.nom) like upper(CONCAT('%', :condidature, '%')) or :condidature is null) and "+
            "(upper(e.poste.poste) like upper(CONCAT('%', :poste, '%')) or :poste is null) and "+
            "(upper(e.department.nomDepartment) like upper(CONCAT('%', :department, '%')) or :department is null)")
    Page<Entretien> findByCriteria(Pageable pageable, String condidature, String poste, String department);

    @Query(value = "select NEW com.project.re.Dto.AbsenceRecrutementDashboard(MONTH(e.dateEntretien), count(e.id)) " +
            "from Entretien e where " +
            "YEAR(CURDATE()) = YEAR(e.dateEntretien) GROUP BY MONTH(e.dateEntretien)")
    List<AbsenceRecrutementDashboard> nbrEntretienYear();
}
