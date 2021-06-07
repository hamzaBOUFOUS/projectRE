package com.project.re.services;

import com.project.re.entities.Contrat;
import com.project.re.repositories.ContratRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContratService {
    private final ContratRepositorie contratRepositorie;

    @Autowired
    public ContratService(ContratRepositorie contratRepositorie) {
        this.contratRepositorie = contratRepositorie;
    }

    public Page<Contrat> getAllContrat(Pageable pageable, Contrat contrat) {
        return contratRepositorie.findAll(pageable);
    }

    public Contrat addEditContrat(Contrat contrat) throws Exception {
        return contratRepositorie.save(contrat);
    }

    public void deleteContrat(long id) throws Exception {
        if (!contratRepositorie.existsById(id)) {
            throw new Exception("contrant not available");
        } else {
            contratRepositorie.deleteById(id);
        }
    }
}
