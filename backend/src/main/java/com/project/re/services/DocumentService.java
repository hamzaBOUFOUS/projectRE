package com.project.re.services;

import com.project.re.entities.Document;
import com.project.re.repositories.DocumentRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {
    private final DocumentRepositorie documentRepositorie;

    @Autowired
    public DocumentService(DocumentRepositorie documentRepositorie) {
        this.documentRepositorie = documentRepositorie;
    }
    public Page<Document> getAllDocument(Pageable pageable, Document document) {
        return documentRepositorie.findAll(pageable);
    }

    public Document addEditDocument(Document document) throws Exception {
        return documentRepositorie.save(document);
    }

    public void deleteDocument(long id) throws Exception {
        if (!documentRepositorie.existsById(id)) {
            throw new Exception("document not available");
        } else {
            documentRepositorie.deleteById(id);
        }
    }
}
