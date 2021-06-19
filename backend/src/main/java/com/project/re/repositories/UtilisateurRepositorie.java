package com.project.re.repositories;

import com.project.re.entities.Employee;
import com.project.re.entities.Utilisateur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UtilisateurRepositorie extends JpaRepository<Utilisateur, Long > {

    //Boolean findUtilisateurByUsernameExists(String username);
    @Query(value="select u from Utilisateur u where u.username =:username and u.password =:password")
    Utilisateur loginUser(String username, String password);

    @Modifying
    @Query(value="update Utilisateur u set u.email= :email,u.username= :username,u.password = :password where u.id = :id")
    public void updateUtilisateur(long id, String email, String username, String password);

    @Query(value = "select e from Utilisateur e where " +
            "(upper(e.cin) like upper(CONCAT('%', :cin, '%')) or :cin is null) and "+
            "(upper(e.nom) like upper(CONCAT('%', :nom, '%')) or :nom is null) and "+
            "(upper(e.email) like upper(CONCAT('%', :email, '%')) or :email is null) and "+
            "(upper(e.telephone) like upper(CONCAT('%', :telephone, '%')) or :telephone is null) and "+
            "(upper(e.nationalite) like upper(CONCAT('%', :nationalite, '%')) or :nationalite is null)")
    Page<Utilisateur> findByCriteria(Pageable pageable, String cin, String nom, String email, String telephone, String nationalite);


}
