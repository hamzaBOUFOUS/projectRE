package com.project.re.ressources;

import com.project.re.entities.Employee;
import com.project.re.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/employee")
public class EmployeeRessource {
    private final EmployeeService employeeService;

    @Autowired
    public EmployeeRessource(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/list-employee")
    public Page<Employee> getEmployee(Pageable pageable, @RequestBody Employee employee) {
        return employeeService.getAllEmployee(pageable, employee);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Employee> addEditEmployee(@RequestBody Employee employee) throws Exception {
        return ResponseEntity.ok().body(employeeService.addEditEmployee(employee));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable("id") long id) {
        try {
            employeeService.deleteEmployee(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
