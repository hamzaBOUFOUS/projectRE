package com.project.re.services;

import com.project.re.entities.Evenement;
import com.project.re.repositories.EvenementRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EvenementService {
    private final EvenementRepositorie evenementRepositorie;

    @Autowired
    public EvenementService(EvenementRepositorie evenementRepositorie) {
        this.evenementRepositorie = evenementRepositorie;
    }

    public Page<Evenement> getAllEvenement(Pageable pageable, Evenement evenement) {
        return evenementRepositorie.findAll(pageable);
    }

    public Evenement addEditEvenement(Evenement evenement) throws Exception {
        return evenementRepositorie.save(evenement);
    }

    public void deleteEvenement(long id) throws Exception {
        if (!evenementRepositorie.existsById(id)) {
            throw new Exception("Evenement not available");
        } else {
            evenementRepositorie.deleteById(id);
        }
    }
}
