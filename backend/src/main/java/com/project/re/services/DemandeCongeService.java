package com.project.re.services;

import com.project.re.entities.DemandeConge;
import com.project.re.repositories.DemandeCongeRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DemandeCongeService {
    private final DemandeCongeRepositorie demandeCongeRepositorie;

    @Autowired
    public DemandeCongeService(DemandeCongeRepositorie demandeCongeRepositorie) {
        this.demandeCongeRepositorie = demandeCongeRepositorie;
    }

    public Page<DemandeConge> getAllDemandeConge(Pageable pageable, DemandeConge conge) {
        return demandeCongeRepositorie.findAll(pageable);
    }

    public DemandeConge addEditDemandeConge(DemandeConge conge) throws Exception {
        return demandeCongeRepositorie.save(conge);
    }

    public void deleteDemandeConge(long id) throws Exception {
        if (!demandeCongeRepositorie.existsById(id)) {
            throw new Exception("Demande Conge not available");
        } else {
            demandeCongeRepositorie.deleteById(id);
        }
    }
}
