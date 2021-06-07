package com.project.re.services;

import com.project.re.entities.Vacance;
import com.project.re.repositories.VacanceRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class VacanceService {
    private final VacanceRepositorie vacanceRepositorie;

    @Autowired
    public VacanceService(VacanceRepositorie vacanceRepositorie) {
        this.vacanceRepositorie = vacanceRepositorie;
    }

    public Page<Vacance> getAllVacance(Pageable pageable, Vacance vacance) {
        return vacanceRepositorie.findAll(pageable);
    }

    public Vacance addEditVacance(Vacance vacance) throws Exception {
        return vacanceRepositorie.save(vacance);
    }

    public void deleteVacance(long id) throws Exception {
        if (!vacanceRepositorie.existsById(id)) {
            throw new Exception("Vacance not available");
        } else {
            vacanceRepositorie.deleteById(id);
        }
    }
}
