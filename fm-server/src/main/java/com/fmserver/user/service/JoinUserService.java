package com.fmserver.user.service;

import com.fmserver.user.User;
import com.fmserver.user.dto.JoinUser;
import com.fmserver.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinUserService {

    private final UserRepository userRepository;

    public void join(JoinUser joinUser) {
        System.out.println("Join user");
        User user = getUser(joinUser);
        userRepository.save(user);
    }

    private User getUser(JoinUser joinUser) {
        return User.builder()
                .loginId(joinUser.getLoginId())
                .password(joinUser.getPassword())
                .userType(joinUser.getUserType())
                .build();
    }
}
