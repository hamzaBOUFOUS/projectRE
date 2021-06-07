package com.project.re.repositories;

import com.project.re.entities.Absence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AbsenceRepositorie  extends JpaRepository<Absence, Long > {
}
