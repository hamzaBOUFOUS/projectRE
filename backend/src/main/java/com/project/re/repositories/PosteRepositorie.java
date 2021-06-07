package com.project.re.repositories;

import com.project.re.entities.Poste;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PosteRepositorie extends JpaRepository<Poste, Long > {
}
