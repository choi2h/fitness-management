package com.fmserver.user.controller;

import com.fmserver.user.dto.JoinUser;
import com.fmserver.user.service.JoinUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final JoinUserService joinUserService;

    @PostMapping("/user/join")
    public ResponseEntity<?> save(@RequestBody JoinUser joinUser) {
        joinUserService.join(joinUser);
        return ResponseEntity.ok().build();
    }
}
