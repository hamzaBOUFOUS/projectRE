package com.project.re.repositories;

import com.project.re.entities.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepositorie extends JpaRepository<Document, Long > {
}
