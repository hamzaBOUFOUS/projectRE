package com.project.re.repositories;

import com.project.re.entities.Department;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DepartmentRepositorie extends JpaRepository<Department, Long > {
    @Query(value = "select d from Department d where " +
            "(upper(d.nomDepartment) like upper(CONCAT('%', :nomDepartment, '%')) or :nomDepartment is null)")
    Page<Department> findByCriteria(Pageable pageable, String nomDepartment);
}
