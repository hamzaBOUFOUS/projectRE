package com.project.re.services;

import com.project.re.Dto.FormLogin;
import com.project.re.entities.Utilisateur;
import com.project.re.repositories.UtilisateurRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {
    private final UtilisateurRepositorie utilisateurRepositorie;

    @Autowired
    public UtilisateurService(UtilisateurRepositorie utilisateurRepositorie) {
        this.utilisateurRepositorie = utilisateurRepositorie;
    }

    public Page<Utilisateur> getAllUtilisateur(Pageable pageable, Utilisateur utilisateur) {
        return utilisateurRepositorie.findAll(pageable);
    }

    public Utilisateur addEditUtilisateur(Utilisateur utilisateur) throws Exception {
        return utilisateurRepositorie.save(utilisateur);
    }

    public Utilisateur login(FormLogin formLogin) throws Exception{
        Utilisateur utilisateur = utilisateurRepositorie.loginUser(formLogin.getUsername(), formLogin.getPassword());
        if (utilisateur == null) {
            return utilisateur;
        } else {
            return utilisateur;
        }
    }

    public void deleteUtilisateur(long id) throws Exception {
        if (!utilisateurRepositorie.existsById(id)) {
            throw new Exception("Utilisateur not available");
        } else {
            utilisateurRepositorie.deleteById(id);
        }
    }
}
