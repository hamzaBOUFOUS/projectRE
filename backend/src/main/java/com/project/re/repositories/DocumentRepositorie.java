package com.project.re.repositories;

import com.project.re.entities.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DocumentRepositorie extends JpaRepository<Document, Long > {
    @Query(value = "select d from Document d where " +
            "(upper(d.typeDocument) like upper(CONCAT('%', :typeDocument, '%')) or :typeDocument is null)")
    Page<Document> findByCriteria(Pageable pageable, String typeDocument);
}
