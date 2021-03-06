package com.project.re.services;

import com.project.re.entities.Condidature;
import com.project.re.repositories.CondidatureRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CondidatureService {
    private final CondidatureRepositorie condidatureRepositorie;

    @Autowired
    public CondidatureService(CondidatureRepositorie condidatureRepositorie) {
        this.condidatureRepositorie = condidatureRepositorie;
    }

    public Page<Condidature> getAllCondidature(Pageable pageable, Condidature condidature) {
        return condidatureRepositorie.findByCriteria(pageable, condidature.getCin(), condidature.getNom(),
                condidature.getEmail(), condidature.getTelephone(), condidature.getPrenom());
    }

    public Condidature addEditCondidature(Condidature condidature) throws Exception {
        return condidatureRepositorie.save(condidature);
    }

    public Condidature getCondidature(long id) throws Exception {
        return condidatureRepositorie.findById(id).get();
    }

    public void deleteCondidature(long id) throws Exception {
        if (!condidatureRepositorie.existsById(id)) {
            throw new Exception("Condidature not available");
        } else {
            condidatureRepositorie.deleteById(id);
        }
    }
}
