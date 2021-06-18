package com.project.re.Dto;

import com.project.re.entities.Contrat;
import com.project.re.entities.Department;
import com.project.re.entities.Poste;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
@Data
public class CondidatureDTO {
    private long id;
    private String cin;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String adresse;
    private Date dateDepot;
    private String cv;
}
