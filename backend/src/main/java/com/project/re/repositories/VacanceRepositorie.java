package com.project.re.repositories;

import com.project.re.entities.Vacance;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VacanceRepositorie extends JpaRepository<Vacance, Long > {
    @Query(value = "select v from Vacance v where " +
            "(upper(v.name) like upper(CONCAT('%', :name, '%')) or :name is null)")
    Page<Vacance> findByCriteria(Pageable pageable, String name);
}
