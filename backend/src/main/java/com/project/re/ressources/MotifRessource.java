package com.project.re.ressources;

import com.project.re.entities.Motif;
import com.project.re.services.MotifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/motif")
public class MotifRessource {
    private final MotifService motifService;

    @Autowired
    public MotifRessource(MotifService motifService) {
        this.motifService = motifService;
    }
    @GetMapping("/list-motif")
    public List<Motif> getFormation() {
        return motifService.getAllMotif();
    }
}
