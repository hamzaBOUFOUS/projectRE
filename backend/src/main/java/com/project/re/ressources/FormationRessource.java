package com.project.re.ressources;

import com.project.re.entities.Formation;
import com.project.re.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/formation")
public class FormationRessource {
    private final FormationService formationService;

    @Autowired
    public FormationRessource(FormationService formationService) {
        this.formationService = formationService;
    }
    @PostMapping("/list-formation")
    public Page<Formation> getFormation(Pageable pageable, @RequestBody Formation formation) {
        return formationService.getAllFormation(pageable, formation);
    }

    @PostMapping("/list-formation/{id}")
    public Page<Formation> getFormationID(Pageable pageable, @PathVariable("id") long id) {
        return formationService.getAllFormationID(pageable, id);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Formation> addEditFormation(@RequestBody Formation formation) throws Exception {
        return ResponseEntity.ok().body(formationService.addEditFormation(formation));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFormation(@PathVariable("id") long id) {
        try {
            formationService.deleteFormation(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
