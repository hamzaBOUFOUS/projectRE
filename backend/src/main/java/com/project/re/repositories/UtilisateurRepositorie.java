package com.project.re.repositories;

import com.project.re.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepositorie extends JpaRepository<Utilisateur, Long > {

    //Boolean findUtilisateurByUsernameExists(String username);
    //Utilisateur findUtilisateurByUsernameAndPassword(String username, String password);
}
