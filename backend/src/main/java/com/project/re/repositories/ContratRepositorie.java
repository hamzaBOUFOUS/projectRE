package com.project.re.repositories;

import com.project.re.entities.Contrat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ContratRepositorie extends JpaRepository<Contrat, Long > {
    @Query(value = "select c from Contrat c where " +
            "(upper(c.typeContrat) like upper(CONCAT('%', :typeContrat, '%')) or :typeContrat is null)")
    Page<Contrat> findByCriteria(Pageable pageable, String typeContrat);
}
