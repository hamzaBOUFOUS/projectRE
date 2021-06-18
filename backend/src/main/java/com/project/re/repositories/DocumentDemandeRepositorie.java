package com.project.re.repositories;

import com.project.re.Dto.DemandDocumentDashboard;
import com.project.re.entities.DocumentDemande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DocumentDemandeRepositorie extends JpaRepository<DocumentDemande, Long > {

    @Query(value = "select NEW com.project.re.Dto.DemandDocumentDashboard(dd.etat, count(dd.id)) " +
            "FROM DocumentDemande dd " +
            " GROUP BY dd.etat ORDER BY dd.etat")
    List<DemandDocumentDashboard> nbrDemandeDocument();

    @Query(value = "select dd from DocumentDemande dd where " +
            "dd.employee.id = :id")
    Page<DocumentDemande> findByCriteria(Pageable pageable, long id);

    @Query(value = "select count(distinct dd.id) from DocumentDemande dd where " +
            "dd.etat = 1 and dd.employee.id = :id")
    Long nbrEmplDocumentId(long id);

    @Query(value = "select NEW com.project.re.Dto.DemandDocumentDashboard(dd.etat, count(dd.id)) " +
            "FROM DocumentDemande dd " +
            "where dd.employee.id = :id" +
            " GROUP BY dd.etat ORDER BY dd.etat")
    List<DemandDocumentDashboard> nbrDemandeEmplDocument(long id);
}
