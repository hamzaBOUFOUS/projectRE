package com.project.re.ressources;

import com.project.re.Dto.FormLogin;
import com.project.re.Dto.ProfilDTO;
import com.project.re.entities.Utilisateur;
import com.project.re.services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/utilisateur")
public class UtilisateurRessource {
    private final UtilisateurService utilisateurService;

    @Autowired
    public UtilisateurRessource(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
   @PostMapping(path = "/login")
    public ResponseEntity<?> login(@RequestBody FormLogin formLogin) throws Exception{
        Utilisateur utilisateur = utilisateurService.login(formLogin);
        if(utilisateur == null){
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(utilisateurService.login(formLogin));
    }

    @Transactional
    @PostMapping(path = "/updateUtilisateur")
    public ResponseEntity<?> updateUtilisateur(@RequestBody ProfilDTO formLogin) throws Exception{
        return ResponseEntity.ok(utilisateurService.updateUtilisateur(formLogin));
    }
}
