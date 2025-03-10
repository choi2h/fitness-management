package com.fmserver.user.dto;

import com.fmserver.user.UserType;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class JoinUser {

    private String loginId;

    private String password;

    private UserType userType;
}
