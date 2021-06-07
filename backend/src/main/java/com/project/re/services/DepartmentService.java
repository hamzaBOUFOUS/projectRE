package com.project.re.services;

import com.project.re.entities.Department;
import com.project.re.repositories.DepartmentRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {
    private final DepartmentRepositorie departmentRepositorie;

    @Autowired
    public DepartmentService(DepartmentRepositorie departmentRepositorie) {
        this.departmentRepositorie = departmentRepositorie;
    }

    public Page<Department> getAllDepartment(Pageable pageable, Department department) {
        return departmentRepositorie.findAll(pageable);
    }

    public Department addEditDepartment(Department department) throws Exception {
        return departmentRepositorie.save(department);
    }

    public void deleteDepartment(long id) throws Exception {
        if (!departmentRepositorie.existsById(id)) {
            throw new Exception("department not available");
        } else {
            departmentRepositorie.deleteById(id);
        }
    }
}
