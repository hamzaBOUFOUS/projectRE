package com.project.re.ressources;

import com.project.re.Dto.FormLogin;
import com.project.re.entities.Utilisateur;
import com.project.re.services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/utilisateur")
public class UtilisateurRessource {
    private final UtilisateurService utilisateurService;

    @Autowired
    public UtilisateurRessource(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

   /* @PostMapping(path = "/login")
    public ResponseEntity<?> login(@RequestBody FormLogin formLogin) throws Exception{
        return ResponseEntity.ok(utilisateurService.login(formLogin));
    }*/

    @PostMapping("/list-utilisateur")
    public Page<Utilisateur> getUtilisateur(Pageable pageable, @RequestBody Utilisateur utilisateur) {
        return utilisateurService.getAllUtilisateur(pageable, utilisateur);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Utilisateur> addEditUtilisateur(@RequestBody Utilisateur utilisateur) throws Exception {
        return ResponseEntity.ok().body(utilisateurService.addEditUtilisateur(utilisateur));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUtilisateur(@PathVariable("id") long id) {
        try {
            utilisateurService.deleteUtilisateur(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
