package com.project.re.repositories;

import com.project.re.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepositorie  extends JpaRepository<Employee, Long > {
}
