package com.project.re.ressources;

import com.project.re.Dto.FilterEntretienDTO;
import com.project.re.entities.Entretien;
import com.project.re.services.EmailSenderService;
import com.project.re.services.EntretienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/entretien")
public class EntretienRessource {
    private final EntretienService entretienService;
    private final EmailSenderService emailSenderService;

    @Autowired
    public EntretienRessource(EntretienService entretienService, EmailSenderService emailSenderService) {
        this.entretienService = entretienService;
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/list-entretien")
    public Page<Entretien> getEntretien(Pageable pageable, @RequestBody FilterEntretienDTO entretienDTO) {
        return entretienService.getAllEntretien(pageable, entretienDTO);
    }

    @PostMapping("/add-edit")
    public ResponseEntity<Entretien> addEditEntretien(@RequestBody Entretien entretien) throws Exception {
        sendMail(entretien.getCondidature().getEmail(),
                entretien.getCondidature().getNom()+" "+entretien.getCondidature().getPrenom(),
                entretien.getPoste().getPoste(),
                entretien.getHeure(),
                entretien.getDateEntretien().toString());
        return ResponseEntity.ok().body(entretienService.addEditEntretien(entretien));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEntretien(@PathVariable("id") long id) {
        try {
            entretienService.deleteEntretien(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }

    public void sendMail(String mailTo, String nom, String post, String heur, String date) throws MessagingException {
        String body = "Bonjour "+ nom +",\n" +
                "\n" +
                "Nous vous remercions pour votre candidature au poste de "+post+".\n" +
                "\n" +
                "Après examen minutieux de votre dossier, nous sommes intéressés par votre profil et souhaitons vous rencontrer personnellement.\n" +
                "\n" +
                "Nous avons le plaisir de vous convier à un entretien d’embauche le "+date+" à "+heur+" avec Mohamed Aziz et Hamza. Veuillez vous annoncer à l’accueil à votre arrivée.\n" +
                "\n" +
                "Nous nous réjouissons de faire votre connaissance.\n" +
                "\n" +
                "Avec nos meilleures salutations,";
        String subject;
        emailSenderService.sendEmailWithAttachment(mailTo,
                body,
                "Convocation à un Entretien");
    }
}
