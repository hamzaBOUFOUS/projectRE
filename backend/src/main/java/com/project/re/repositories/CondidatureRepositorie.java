package com.project.re.repositories;

import com.project.re.Dto.AbsenceRecrutementDashboard;
import com.project.re.entities.Condidature;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CondidatureRepositorie extends JpaRepository<Condidature, Long > {
    @Query(value = "select c from Condidature c where " +
            "(upper(c.cin) like upper(CONCAT('%', :cin, '%')) or :cin is null) and "+
            "(upper(c.nom) like upper(CONCAT('%', :nom, '%')) or :nom is null) and "+
            "(upper(c.email) like upper(CONCAT('%', :email, '%')) or :email is null) and "+
            "(upper(c.telephone) like upper(CONCAT('%', :telephone, '%')) or :telephone is null) and "+
            "(upper(c.prenom) like upper(CONCAT('%', :prenom, '%')) or :prenom is null)")
    Page<Condidature> findByCriteria(Pageable pageable, String cin, String nom, String email, String telephone,
                                  String prenom);

    @Query(value = "select NEW com.project.re.Dto.AbsenceRecrutementDashboard(MONTH(c.dateDepot), count(c.id)) " +
            "from Condidature c where " +
            "YEAR(CURDATE()) = YEAR(c.dateDepot) GROUP BY MONTH(c.dateDepot)")
    List<AbsenceRecrutementDashboard> nbrCondidatureYear();
}
