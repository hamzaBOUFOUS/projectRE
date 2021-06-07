package com.project.re.ressources;

import com.project.re.entities.Poste;
import com.project.re.services.PosteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/poste")
public class PosteRessource {
    private final PosteService posteService;

    @Autowired
    public PosteRessource(PosteService posteService) {
        this.posteService = posteService;
    }
    @PostMapping("/list-poste")
    public Page<Poste> getPoste(Pageable pageable, @RequestBody Poste poste) {
        return posteService.getAllPoste(pageable, poste);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Poste> addEditPoste(@RequestBody Poste poste) throws Exception {
        return ResponseEntity.ok().body(posteService.addEditPoste(poste));
    }

    @DeleteMapping("/delete/{id}")
    public void deletePoste(@PathVariable("id") long id) {
        try {
            posteService.deletePoste(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
