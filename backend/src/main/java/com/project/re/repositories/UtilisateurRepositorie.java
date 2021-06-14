package com.project.re.repositories;

import com.project.re.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UtilisateurRepositorie extends JpaRepository<Utilisateur, Long > {

    //Boolean findUtilisateurByUsernameExists(String username);
    @Query(value="select u from Utilisateur u where u.username =':username' and u.password =':password'")
    Utilisateur loginUser(String username, String password);
}
