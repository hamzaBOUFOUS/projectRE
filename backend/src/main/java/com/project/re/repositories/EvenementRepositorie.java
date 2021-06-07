package com.project.re.repositories;

import com.project.re.entities.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvenementRepositorie  extends JpaRepository<Evenement, Long > {
}
