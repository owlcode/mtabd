package pl.dawidsowa.mtabd.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.dawidsowa.mtabd.dto.UserDTO;
import pl.dawidsowa.mtabd.repository.UserRepository;

import java.util.Collection;

@Controller
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    @ResponseBody
    public Collection<UserDTO> getUsers(Pageable pageable) {
        return userRepository.findAllUserDTO(pageable).getContent();
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    @ResponseBody
    public UserDTO getUser(@PathVariable("id") Long id, Pageable pageable) {
        return userRepository.findOneUserDTO(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("id") Long id, Pageable pageable) {
        userRepository.delete(id);
    }

}
