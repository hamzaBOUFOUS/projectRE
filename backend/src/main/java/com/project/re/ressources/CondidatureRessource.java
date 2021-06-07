package com.project.re.ressources;

import com.project.re.entities.Condidature;
import com.project.re.services.CondidatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/condidature")
public class CondidatureRessource {
    private final CondidatureService condidatureService;

    @Autowired
    public CondidatureRessource(CondidatureService condidatureService) {
        this.condidatureService = condidatureService;
    }

    @PostMapping("/list-condidature")
    public Page<Condidature> getCondidature(Pageable pageable, @RequestBody Condidature condidature) {
        return condidatureService.getAllCondidature(pageable, condidature);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Condidature> addEditCondidature(@RequestBody Condidature condidature) throws Exception {
        return ResponseEntity.ok().body(condidatureService.addEditCondidature(condidature));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCondidature(@PathVariable("id") long id) {
        try {
            condidatureService.deleteCondidature(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
