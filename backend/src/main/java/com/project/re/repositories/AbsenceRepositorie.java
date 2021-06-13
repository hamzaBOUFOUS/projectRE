package com.project.re.repositories;

import com.project.re.entities.Absence;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AbsenceRepositorie extends JpaRepository<Absence, Long > {
    @Query(value = "select a from Absence a where " +
            "(upper(a.employee.nom) like upper(CONCAT('%', :employee, '%')) or :employee is null)")
    Page<Absence> findByCriteria(Pageable pageable, String employee);
}
