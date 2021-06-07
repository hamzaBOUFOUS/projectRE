package com.project.re.services;

import com.project.re.entities.Entretien;
import com.project.re.repositories.EntretienRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EntretienService {
    private final EntretienRepositorie entretienRepositorie;

    @Autowired
    public EntretienService(EntretienRepositorie entretienRepositorie) {
        this.entretienRepositorie = entretienRepositorie;
    }

    public Page<Entretien> getAllEntretien(Pageable pageable, Entretien entretien) {
        return entretienRepositorie.findAll(pageable);
    }

    public Entretien addEditEntretien(Entretien entretien) throws Exception {
        return entretienRepositorie.save(entretien);
    }

    public void deleteEntretien(long id) throws Exception {
        if (!entretienRepositorie.existsById(id)) {
            throw new Exception("Entretien not available");
        } else {
            entretienRepositorie.deleteById(id);
        }
    }
}
