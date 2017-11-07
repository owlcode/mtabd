package pl.dawidsowa.mtabd.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.catalina.filters.CorsFilter;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import pl.dawidsowa.mtabd.domain.User;
import pl.dawidsowa.mtabd.dto.UserAddDTO;
import pl.dawidsowa.mtabd.dto.UserDTO;
import pl.dawidsowa.mtabd.repository.UserRepository;

import javax.annotation.Resource;
import java.time.LocalDate;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource("classpath:application.yml")
public class UserControllerTest {
    private MockMvc mockMvc;

    @Resource(name = "passwordEncoder")
    PasswordEncoder passwordEncoder;


    @Mock
    private UserRepository repository;

    @InjectMocks
    private UserController controller;

    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .addFilter(new CorsFilter())
                .build();
    }

    @Test
    public void addUser() throws Exception {
        //ustawic dane dla dto
        UserAddDTO user = new UserAddDTO();
        user.setUsername("user");
        user.setPassword("password");
        user.setFirstName("Jan");
        user.setLastName("Nowak");
        user.setEmail("user@example.com");
        user.setBirth(LocalDate.of(1990, 1, 1));
        when(repository.save(any(User.class))).thenReturn(new User());
        mockMvc.perform(
                post("/api/user/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(user)))
                .andExpect(status().isOk());
        verify(repository, times(1)).save(any(User.class));
        verifyNoMoreInteractions(repository);
    }

    @Test
    public void getUser_notFound() throws Exception {
        //id zmienne dla potrzeb testów
        when(repository.findOneUserDTO(23L)).thenReturn(null);
        mockMvc.perform(get("/api/user/"+23L))
                .andExpect(status().isNotFound());
        verify(repository, times(1)).findOneUserDTO(23L);
        verifyNoMoreInteractions(repository);
    }

    @Test
    public void deleteUser() throws Exception {
        // zainicjalozowac dane usera, zeby zostaly zwracane w razie znalezienia go w repo
        UserDTO user = null;
        when(repository.findOneUserDTO(1L)).thenReturn(user);
        doNothing().when(repository).delete(1L);
        mockMvc.perform(
                delete("/", 1L))
                .andExpect(status().isOk());
        verify(repository, times(1)).findOneUserDTO(1L);
        verify(repository, times(1)).delete(1L);
        verifyNoMoreInteractions(repository);
    }

}