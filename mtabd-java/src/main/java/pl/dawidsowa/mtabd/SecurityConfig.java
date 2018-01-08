package pl.dawidsowa.mtabd;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.dawidsowa.mtabd.domain.User;
import pl.dawidsowa.mtabd.repository.UserRepository;

import java.util.ArrayList;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean(name = "passwordEncoder")
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().and()
                .authorizeRequests()
                .antMatchers("/h2-console", "/h2-console/**").permitAll()
                .and()
                .csrf().disable()
                .headers().frameOptions().disable();

//        http
//                .httpBasic()
//                .and()
//                .csrf().disable()
//                .headers().frameOptions().disable()
//                .and()
//                .authorizeRequests()
//                        .antMatchers("/h2-console", "/h2-console/**").permitAll()
//                        .anyRequest().hasAnyRole("USER")
//                .and().
//                formLogin().loginPage("/login").passwordParameter("password").usernameParameter("username");
//    }
    }
}
