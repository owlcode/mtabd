package pl.dawidsowa.mtabd.controller;

import org.apache.catalina.filters.CorsFilter;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import pl.dawidsowa.mtabd.domain.User;

import pl.dawidsowa.mtabd.repository.UserRepository;



import static org.mockito.Mockito.*;
import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest {
    private MockMvc mockMvc;


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
        UserAddDTO dto = new User();
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setBirth(dto.getBirth());
        when(repository.exists(user.getUsername())).thenReturn(false);
        doNothing().when(repository).save(user);
        mockMvc.perform(
                post("/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(user)))
                .andExpect(status().isCreated());
        verify(repository, times(1)).exists(user.getUsername());
        verify(repository, times(1)).save(user);
        verifyNoMoreInteractions(repository);
    }

    @Test
    public void getUser_notFound() throws Exception {
        //id zmienne dla potrzeb testów
        when(repository.findOneUserDTO(23L)).thenReturn(null);
        mockMvc.perform(get("/", 23L))
                .andExpect(status().isNotFound());
        verify(repository, times(1)).findOneUserDTO(23L);
        verifyNoMoreInteractions(repository);
    }

    @Test
    public void deleteUser() throws Exception {
        // zainicjalozowac dane usera, zeby zostaly zwracane w razie znalezienia go w repo
        User user = null;
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