package com.project.re.ressources;

import com.project.re.Dto.CondidatureDTO;
import com.project.re.entities.Condidature;
import com.project.re.services.CondidatureService;
import com.project.re.services.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.sql.Date;

//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/condidature")
public class CondidatureRessource {
    private final CondidatureService condidatureService;
    private final FileStorageService fileStorageService;

    @Autowired
    public CondidatureRessource(CondidatureService condidatureService, FileStorageService fileStorageService) {
        this.condidatureService = condidatureService;
        this.fileStorageService = fileStorageService;
    }

    @PostMapping("/list-condidature")
    public Page<Condidature> getCondidature(Pageable pageable, @RequestBody Condidature condidature) {
        return condidatureService.getAllCondidature(pageable, condidature);
    }
    /**/
    @PostMapping("/add-edit")
    public ResponseEntity<Condidature> addEditCondidature(
            @RequestParam("file") MultipartFile file,
            @RequestParam("idC") String id,
            @RequestParam("cin") String cin,
            @RequestParam("nom") String nom,
            @RequestParam("prenom") String prenom,
            @RequestParam("email") String email,
            @RequestParam("telephone") String telephone,
            @RequestParam("adresse") String adresse,
            @RequestParam("dateDepot") Date dateDepot
    ) throws Exception {
        Condidature condidature = new Condidature();
        condidature.setId(id.equals("undefined")?null:Long.parseLong(id));
        condidature.setCin(cin);
        condidature.setNom(nom);
        condidature.setPrenom(prenom);
        condidature.setEmail(email);
        condidature.setTelephone(telephone);
        condidature.setAdresse(adresse);
        condidature.setDateDepot(dateDepot);
        try {
            String fileName = fileStorageService.storeFile(file);
            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("condidature/downloadFile/")
                    .path(fileName)
                    .toUriString();
            condidature.setCv(fileName);
            return ResponseEntity.ok().body(condidatureService.addEditCondidature(condidature));
        } catch (Exception e) {
            throw new Exception("Filiere not added try again");
        }
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws Exception {
        // Load file as Resource
        Resource resource = fileStorageService.loadFileAsResource(fileName);
        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            System.err.println("Could not determine file type.");
        }
        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteCondidature(@PathVariable("id") long id) {
        try {
            condidatureService.deleteCondidature(id);
        } catch (Exception ex) {
            ex.getMessage();
        }
    }
}
