package pl.dawidsowa.mtabd.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.dawidsowa.mtabd.dto.UserDTO;
import pl.dawidsowa.mtabd.repository.UserRepository;

import java.util.Collection;
import java.util.Random;

@Controller
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;

    @RequestMapping(value = {"", "/"}, method = RequestMethod.GET)
    @ResponseBody
    public Collection<UserDTO> getUsers(Pageable pageable) {
        return userRepository.findAllUserDTO(pageable).getContent();
    }

    @RequestMapping(value = "/random", method = RequestMethod.GET)
    @ResponseBody
    public UserDTO getRandomUser() {
        long count = userRepository.count();
        int page = new Random().nextInt((int)count);
        Page<UserDTO> user = userRepository.findAllUserDTO(new PageRequest(page, 1));
        if (user.hasContent())
            return user.getContent().get(0);
        else
            return null;
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    @ResponseBody
    public UserDTO getUser(@PathVariable("id") Long id) {
        return userRepository.findOneUserDTO(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("id") Long id) {
        userRepository.delete(id);
    }

}
