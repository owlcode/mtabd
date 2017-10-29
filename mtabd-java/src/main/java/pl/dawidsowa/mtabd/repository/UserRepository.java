package pl.dawidsowa.mtabd.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.dawidsowa.mtabd.domain.User;
import pl.dawidsowa.mtabd.dto.UserDTO;

public interface UserRepository extends JpaRepository<User, Long> {
    User findTopByUsername(String username);

    //Projections
    @Query("select u from User u where id = :id")
    UserDTO findOneUserDTO(@Param("id") Long id);
    @Query("select u from User u")
    Page<UserDTO> findAllUserDTO(Pageable pageable);
}
