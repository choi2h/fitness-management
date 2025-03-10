package com.fmserver.user;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String loginId;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserType userType;


    @Builder
    public User(String loginId, String password, UserType userType) {
        this.loginId = loginId;
        this.password = password;
        this.userType = userType;
    }
}
