package com.project.re.services;

import com.project.re.entities.DocumentDemande;
import com.project.re.repositories.DocumentDemandeRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DocumentDemandeService {
    private final DocumentDemandeRepositorie documentDemandeRepositorie;

    @Autowired
    public DocumentDemandeService(DocumentDemandeRepositorie documentDemandeRepositorie) {
        this.documentDemandeRepositorie = documentDemandeRepositorie;
    }

    public Page<DocumentDemande> getAllDocumentDemande(Pageable pageable, DocumentDemande documentDemande) {
        return documentDemandeRepositorie.findAll(pageable);
    }

    public DocumentDemande addEditDocumentDemande(DocumentDemande documentDemande) throws Exception {
        return documentDemandeRepositorie.save(documentDemande);
    }

    public void deleteDocumentDemande(long id) throws Exception {
        if (!documentDemandeRepositorie.existsById(id)) {
            throw new Exception("Demande Document not available");
        } else {
            documentDemandeRepositorie.deleteById(id);
        }
    }
}
