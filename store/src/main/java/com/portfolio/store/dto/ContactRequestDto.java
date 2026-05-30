package com.portfolio.store.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@JsonPropertyOrder({"name","email","mobileNumber","message"})
public class ContactRequestDto {

    private String name;
    private String email;
    private String mobileNumber;
    private String message;
}
