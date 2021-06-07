package com.project.re.ressources;

import com.project.re.entities.Absence;
import com.project.re.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/absence")
public class AbsenceRessource {
    private final AbsenceService absenceService;

    @Autowired
    public AbsenceRessource(AbsenceService absenceService) {
        this.absenceService = absenceService;
    }
    @PostMapping("/list-absence")
    public Page<Absence> getAbsence(Pageable pageable, @RequestBody Absence absence) {
        return absenceService.getAllAbsence(pageable, absence);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Absence> addEditAbsence(@RequestBody Absence absence) throws Exception {
        return ResponseEntity.ok().body(absenceService.addEditAbsence(absence));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAbsence(@PathVariable("id") long id) {
        try {
            absenceService.deleteAbsence(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
