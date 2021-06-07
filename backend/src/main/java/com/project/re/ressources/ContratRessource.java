package com.project.re.ressources;

import com.project.re.entities.Contrat;
import com.project.re.services.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/contrat")
public class ContratRessource {
    private final ContratService contratService;

    @Autowired
    public ContratRessource(ContratService contratService) {
        this.contratService = contratService;
    }

    @PostMapping("/list-contrat")
    public Page<Contrat> getContrat(Pageable pageable, @RequestBody Contrat contrat) {
        return contratService.getAllContrat(pageable, contrat);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Contrat> addEditContrat(@RequestBody Contrat contrat) throws Exception {
        System.out.println(contrat);
        return ResponseEntity.ok().body(contratService.addEditContrat(contrat));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteContrat(@PathVariable("id") long id) {
        System.out.println(id);
        try {
            contratService.deleteContrat(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }

}
