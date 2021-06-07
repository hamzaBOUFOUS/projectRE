package com.project.re.ressources;

import com.project.re.entities.Vacance;
import com.project.re.services.VacanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/vacance")
public class VacanceRessource {
    private final VacanceService vacanceService;

    @Autowired
    public VacanceRessource(VacanceService vacanceService) {
        this.vacanceService = vacanceService;
    }

    @PostMapping("/list-vacance")
    public Page<Vacance> getVacance(Pageable pageable, @RequestBody Vacance vacance) {
        return vacanceService.getAllVacance(pageable, vacance);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Vacance> addEditVacance(@RequestBody Vacance vacance) throws Exception {
        return ResponseEntity.ok().body(vacanceService.addEditVacance(vacance));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteVacance(@PathVariable("id") long id) {
        try {
            vacanceService.deleteVacance(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
