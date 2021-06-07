package com.project.re.ressources;

import com.project.re.entities.Document;
import com.project.re.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/document")
public class DocumentRessource {
    private final DocumentService documentService;

    @Autowired
    public DocumentRessource(DocumentService documentService) {
        this.documentService = documentService;
    }
    @PostMapping("/list-document")
    public Page<Document> getDocument(Pageable pageable, @RequestBody Document document) {
        return documentService.getAllDocument(pageable, document);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Document> addEditDocument(@RequestBody Document document) throws Exception {
        return ResponseEntity.ok().body(documentService.addEditDocument(document));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDocument(@PathVariable("id") long id) {
        try {
            documentService.deleteDocument(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
