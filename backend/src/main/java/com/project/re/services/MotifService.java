package com.project.re.services;

import com.project.re.entities.Motif;
import com.project.re.repositories.MotifRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MotifService {
    private final MotifRepositorie motifRepositorie;

    @Autowired
    public MotifService(MotifRepositorie motifRepositorie) {
        this.motifRepositorie = motifRepositorie;
    }

    public List<Motif> getAllMotif() {
        return motifRepositorie.findAll();
    }

}
