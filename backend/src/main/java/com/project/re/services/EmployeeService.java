package com.project.re.services;

import com.project.re.entities.Employee;
import com.project.re.repositories.EmployeeRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepositorie employeeRepositorie;

    @Autowired
    public EmployeeService(EmployeeRepositorie vacanceRepositorie) {
        this.employeeRepositorie = vacanceRepositorie;
    }

    public Page<Employee> getAllEmployee(Pageable pageable, Employee employee) {
        return employeeRepositorie.findAll(pageable);
    }

    public Employee addEditEmployee(Employee employee) throws Exception {
        return employeeRepositorie.save(employee);
    }

    public void deleteEmployee(long id) throws Exception {
        if (!employeeRepositorie.existsById(id)) {
            throw new Exception("Employee not available");
        } else {
            employeeRepositorie.deleteById(id);
        }
    }
}
