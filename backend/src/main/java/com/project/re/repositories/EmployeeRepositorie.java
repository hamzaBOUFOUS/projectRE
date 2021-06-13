package com.project.re.repositories;

import com.project.re.entities.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmployeeRepositorie  extends JpaRepository<Employee, Long > {
    @Query(value = "select e from Employee e where " +
            "(upper(e.cin) like upper(CONCAT('%', :cin, '%')) or :cin is null) and "+
            "(upper(e.nom) like upper(CONCAT('%', :nom, '%')) or :nom is null) and "+
            "(upper(e.email) like upper(CONCAT('%', :email, '%')) or :email is null) and "+
            "(upper(e.telephone) like upper(CONCAT('%', :telephone, '%')) or :telephone is null) and "+
            "(upper(e.nationalite) like upper(CONCAT('%', :nationalite, '%')) or :nationalite is null)")
    Page<Employee> findByCriteria(Pageable pageable, String cin, String nom, String email, String telephone, String nationalite);
}
