package com.project.re.ressources;

import com.project.re.entities.Employee;
import com.project.re.entities.Entretien;
import com.project.re.services.EmployeeService;
import com.project.re.services.EntretienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/entretien")
public class EntretienRessource {
    private final EntretienService entretienService;

    @Autowired
    public EntretienRessource(EntretienService entretienService) {
        this.entretienService = entretienService;
    }

    @PostMapping("/list-entretien")
    public Page<Entretien> getEntretien(Pageable pageable, @RequestBody Entretien entretien) {
        return entretienService.getAllEntretien(pageable, entretien);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Entretien> addEditEntretien(@RequestBody Entretien entretien) throws Exception {
        return ResponseEntity.ok().body(entretienService.addEditEntretien(entretien));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEntretien(@PathVariable("id") long id) {
        try {
            entretienService.deleteEntretien(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
