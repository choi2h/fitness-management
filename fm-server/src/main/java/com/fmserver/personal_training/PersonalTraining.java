package com.fmserver.personal_training;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigInteger;

@Entity
public class PersonalTraining {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long membershipId;

    private int totalCount;

    private int useCount;

    private int cancelCount;

    private BigInteger sessionPrice;
}
