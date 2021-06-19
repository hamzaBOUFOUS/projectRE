package com.project.re.ressources;

import com.project.re.entities.DocumentDemande;
import com.project.re.services.DocumentDemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/documentDemande")
public class DocumentDemandeRessource {
    private final DocumentDemandeService documentDemandeService;

    @Autowired
    public DocumentDemandeRessource(DocumentDemandeService documentDemandeService) {
        this.documentDemandeService = documentDemandeService;
    }

    @PostMapping("/list-documentDemande")
    public Page<DocumentDemande> getDemandeConge(Pageable pageable, @RequestBody DocumentDemande documentDemande) {
        return documentDemandeService.getAllDocumentDemande(pageable);
    }

    @PostMapping("/list-documentDemande/{id}")
    public Page<DocumentDemande> getDemandeCongeId(Pageable pageable, @PathVariable("id") long id) {
        return documentDemandeService.getAllDocumentDemandeId(pageable, id);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<DocumentDemande> addEditDemandeConge(@RequestBody DocumentDemande documentDemande) throws Exception {
        return ResponseEntity.ok().body(documentDemandeService.addEditDocumentDemande(documentDemande));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDemandeConge(@PathVariable("id") long id) {
        try {
            documentDemandeService.deleteDocumentDemande(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
