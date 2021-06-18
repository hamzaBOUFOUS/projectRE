package com.project.re.repositories;

import com.project.re.Dto.DemandeCongeDashboard;
import com.project.re.entities.DemandeConge;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DemandeCongeRepositorie  extends JpaRepository<DemandeConge, Long > {
    @Query(value = "select count(distinct dc.employee.id) from DemandeConge dc where " +
            "dc.etat = 0 and CURDATE() between dc.dateDebut and dc.dateFin")
    Long nbrEmplConge();

    @Query(value = "select NEW com.project.re.Dto.DemandeCongeDashboard(dc.etat, count(dc.id)) " +
            "from DemandeConge dc where " +
            "YEAR(CURDATE()) = YEAR(dc.dateDebut) GROUP BY dc.etat ORDER BY dc.etat")
    List<DemandeCongeDashboard> nbrDemandeConge();

    @Query(value = "select dc from DemandeConge dc where " +
            "dc.employee.id = :id")
    Page<DemandeConge> findByCriteria(Pageable pageable, long id);

    @Query(value = "select count(distinct dc.id) from DemandeConge dc where " +
            "dc.etat = 2 and dc.employee.id = :id")
    Long nbrEmplCongeId(long id);

    @Query(value = "select NEW com.project.re.Dto.DemandeCongeDashboard(dc.etat, count(dc.id)) " +
            "from DemandeConge dc where dc.employee.id = :id and " +
            "YEAR(CURDATE()) = YEAR(dc.dateDebut) GROUP BY dc.etat ORDER BY dc.etat")
    List<DemandeCongeDashboard> nbrDemandeEmplConge(long id);
}
