package com.project.re.ressources;

import com.project.re.entities.Employee;
import com.project.re.entities.Utilisateur;
import com.project.re.services.EmployeeService;
import com.project.re.services.UtilisateurService;
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
    private final UtilisateurService utilisateurService;

    @Autowired
    public EmployeeRessource(EmployeeService employeeService,
                             UtilisateurService utilisateurService) {
        this.employeeService = employeeService;
        this.utilisateurService = utilisateurService;
    }

    @PostMapping("/list-employee")
    public Page<Utilisateur> getEmployee(Pageable pageable, @RequestBody Employee employee) {
        return utilisateurService.getAllUtilisateur(pageable, employee);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Utilisateur> addEditEmployee(@RequestBody Utilisateur utilisateur) throws Exception {
        return ResponseEntity.ok().body(utilisateurService.addEditUtilisateur(utilisateur));
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
