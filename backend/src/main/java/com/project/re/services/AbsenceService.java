package com.project.re.services;

import com.project.re.Dto.FilterAbsenceDTO;
import com.project.re.entities.Absence;
import com.project.re.repositories.AbsenceRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AbsenceService {
    private final AbsenceRepositorie absenceRepositorie;

    @Autowired
    public AbsenceService(AbsenceRepositorie absenceRepositorie) {
        this.absenceRepositorie = absenceRepositorie;
    }

    public Page<Absence> getAllAbsence(Pageable pageable, FilterAbsenceDTO filterAbsenceDTO) {
        return absenceRepositorie.findByCriteria(pageable, filterAbsenceDTO.getEmployee());
    }

    public Page<Absence> getAllAbsenceID(Pageable pageable, long id) {
        return absenceRepositorie.findAllByEmployeeId(pageable, id);
    }

    public Absence addEditAbsence(Absence absence) throws Exception {
        return absenceRepositorie.save(absence);
    }

    public void deleteAbsence(long id) throws Exception {
        if (!absenceRepositorie.existsById(id)) {
            throw new Exception("Absence not available");
        } else {
            absenceRepositorie.deleteById(id);
        }
    }
}
