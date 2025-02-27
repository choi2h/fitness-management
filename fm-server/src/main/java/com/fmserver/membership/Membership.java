package com.fmserver.membership;

import com.fmserver.member.Member;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;

    private String name;

    private MembershipStatus status;

    private boolean isIncludePt;

    private LocalDate startDate;

    private LocalDate endDate;
}
