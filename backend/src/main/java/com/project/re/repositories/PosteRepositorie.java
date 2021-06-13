package com.project.re.repositories;

import com.project.re.entities.Poste;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PosteRepositorie extends JpaRepository<Poste, Long > {
    @Query(value = "select p from Poste p where " +
            "(upper(p.poste) like upper(CONCAT('%', :poste, '%')) or :poste is null)")
    Page<Poste> findByCriteria(Pageable pageable, String poste);
}
