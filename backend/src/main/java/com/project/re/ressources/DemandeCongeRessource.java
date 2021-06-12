package com.project.re.ressources;

import com.project.re.entities.DemandeConge;
import com.project.re.services.DemandeCongeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/demandeConge")
public class DemandeCongeRessource {
    private final DemandeCongeService demandeCongeService;

    @Autowired
    public DemandeCongeRessource(DemandeCongeService demandeCongeService) {
        this.demandeCongeService = demandeCongeService;
    }
    @PostMapping("/list-demandeConge")
    public Page<DemandeConge> getDemandeConge(Pageable pageable, @RequestBody DemandeConge conge) {
        return demandeCongeService.getAllDemandeConge(pageable, conge);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<DemandeConge> addEditDemandeConge(@RequestBody DemandeConge conge) throws Exception {
        return ResponseEntity.ok().body(demandeCongeService.addEditDemandeConge(conge));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDemandeConge(@PathVariable("id") long id) {
        try {
            demandeCongeService.deleteDemandeConge(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
