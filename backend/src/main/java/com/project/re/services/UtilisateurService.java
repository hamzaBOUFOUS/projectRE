package com.project.re.services;

import com.project.re.Dto.FormLogin;
import com.project.re.Dto.ProfilDTO;
import com.project.re.entities.Employee;
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

    public Page<Utilisateur> getAllUtilisateur(Pageable pageable, Employee employee) {
        return utilisateurRepositorie.findByCriteria(pageable, employee.getCin(), employee.getNom(),
                employee.getEmail(), employee.getTelephone(), employee.getNationalite());
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

    public Utilisateur updateUtilisateur(ProfilDTO profilDTO) throws Exception{
        utilisateurRepositorie.updateUtilisateur(profilDTO.getId(), profilDTO.getEmail(),
                profilDTO.getUsername(), profilDTO.getPassword());
        return utilisateurRepositorie.findById(profilDTO.getId()).get();
    }

    public void deleteUtilisateur(long id) throws Exception {
        if (!utilisateurRepositorie.existsById(id)) {
            throw new Exception("Utilisateur not available");
        } else {
            utilisateurRepositorie.deleteById(id);
        }
    }
}
