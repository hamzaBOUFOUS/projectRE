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
        return contratRepositorie.findByCriteria(pageable, contrat.getTypeContrat());
    }

    public Contrat addEditContrat(Contrat contrat) throws Exception {
        return contratRepositorie.save(contrat);
    }

    public Contrat deleteContrat(long id) throws Exception {
        Contrat contrat = null;
        if (!contratRepositorie.existsById(id)) {
            return contrat;
        } else {
            contrat = contratRepositorie.getById(id);
            contratRepositorie.deleteById(id);
            return contrat;
        }
    }
}
