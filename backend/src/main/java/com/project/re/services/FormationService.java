package com.project.re.services;

import com.project.re.entities.Formation;
import com.project.re.repositories.FormationRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FormationService {
    private final FormationRepositorie formationRepositorie;

    @Autowired
    public FormationService(FormationRepositorie formationRepositorie) {
        this.formationRepositorie = formationRepositorie;
    }

    public Page<Formation> getAllFormation(Pageable pageable, Formation formation) {
        return formationRepositorie.findByCriteria(pageable, formation.getNom());
    }

    public Formation addEditFormation(Formation formation) throws Exception {
        return formationRepositorie.save(formation);
    }

    public void deleteFormation(long id) throws Exception {
        if (!formationRepositorie.existsById(id)) {
            throw new Exception("Formation not available");
        } else {
            formationRepositorie.deleteById(id);
        }
    }
}
