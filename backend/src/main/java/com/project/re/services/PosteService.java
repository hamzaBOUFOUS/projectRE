package com.project.re.services;

import com.project.re.entities.Poste;
import com.project.re.repositories.PosteRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PosteService {
    private final PosteRepositorie posteRepositorie;

    @Autowired
    public PosteService(PosteRepositorie posteRepositorie) {
        this.posteRepositorie = posteRepositorie;
    }

    public Page<Poste> getAllPoste(Pageable pageable, Poste poste) {
        return posteRepositorie.findAll(pageable);
    }

    public Poste addEditPoste(Poste poste) throws Exception {
        return posteRepositorie.save(poste);
    }

    public void deletePoste(long id) throws Exception {
        if (!posteRepositorie.existsById(id)) {
            throw new Exception("poste not available");
        } else {
            posteRepositorie.deleteById(id);
        }
    }
}
