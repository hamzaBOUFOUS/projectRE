package com.project.re.repositories;

import com.project.re.entities.Entretien;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntretienRepositorie extends JpaRepository<Entretien, Long > {
}
