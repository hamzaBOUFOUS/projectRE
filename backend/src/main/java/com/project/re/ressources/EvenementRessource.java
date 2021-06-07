package com.project.re.ressources;

import com.project.re.entities.Evenement;
import com.project.re.services.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/evenement")
public class EvenementRessource {
    private final EvenementService evenementService;

    @Autowired
    public EvenementRessource(EvenementService evenementService) {
        this.evenementService = evenementService;
    }
    @PostMapping("/list-evenement")
    public Page<Evenement> getEvenement(Pageable pageable, @RequestBody Evenement evenement) {
        return evenementService.getAllEvenement(pageable, evenement);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Evenement> addEditEvenement(@RequestBody Evenement evenement) throws Exception {
        return ResponseEntity.ok().body(evenementService.addEditEvenement(evenement));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEvenement(@PathVariable("id") long id) {
        try {
            evenementService.deleteEvenement(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
