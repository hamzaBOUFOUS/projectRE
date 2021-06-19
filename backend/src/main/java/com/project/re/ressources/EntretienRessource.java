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

@CrossOrigin(origins="http://localhost:3000")
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
        sendMail(entretien.getCondidature().getEmail());
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

    public void sendMail(String mailTo) throws MessagingException {
        String body;
        String subject;
        emailSenderService.sendEmailWithAttachment(mailTo,
                "This is Email Body with Attachment...",
                "This email has no attachment!!");
    }
}
