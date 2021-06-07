package com.project.re.ressources;

import com.project.re.entities.Department;
import com.project.re.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/department")
public class DepartmentRessource {
    private final DepartmentService departmentService;

    @Autowired
    public DepartmentRessource(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }
    @PostMapping("/list-department")
    public Page<Department> getDepartment(Pageable pageable, @RequestBody Department department) {
        return departmentService.getAllDepartment(pageable, department);
    }

    @PostMapping("/add-edit")
    public ResponseEntity <Department> addEditDepartment(@RequestBody Department department) throws Exception {
        return ResponseEntity.ok().body(departmentService.addEditDepartment(department));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDepartment(@PathVariable("id") long id) {
        try {
            departmentService.deleteDepartment(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
