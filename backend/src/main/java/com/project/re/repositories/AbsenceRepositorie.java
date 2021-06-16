package com.project.re.repositories;

import com.project.re.Dto.AbsenceRecrutementDashboard;
import com.project.re.entities.Absence;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AbsenceRepositorie extends JpaRepository<Absence, Long > {
    @Query(value = "select a from Absence a where " +
            "(upper(a.employee.nom) like upper(CONCAT('%', :employee, '%')) or :employee is null)")
    Page<Absence> findByCriteria(Pageable pageable, String employee);

    @Query(value = "select count(distinct a.employee.id) from Absence a where " +
            "a.dateAbsence = CURDATE()")
    Long nbrEmplAbsence();

    @Query(value = "select NEW com.project.re.Dto.AbsenceRecrutementDashboard(MONTH(a.dateAbsence), count(a.id)) " +
            "FROM Absence a where " +
            "YEAR(CURDATE()) = YEAR(a.dateAbsence) GROUP BY MONTH(a.dateAbsence)")
    List<AbsenceRecrutementDashboard> nbrAbsenceYear();

}
