package com.fmserver.admin;

import com.fmserver.common.type.Gender;
import com.fmserver.company.Company;
import com.fmserver.user.User;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    private String name;

    private String phoneNumber;

    private Gender gender;

    private LocalDate birth;

    private String address;

    private Role role;

}
