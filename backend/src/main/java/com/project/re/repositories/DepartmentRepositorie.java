package com.project.re.repositories;

import com.project.re.entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepositorie extends JpaRepository<Department, Long > {
}
