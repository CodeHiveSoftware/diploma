package com.olek.ParkEase.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OverstayedDto {
    private String plate;
    private Double payment;
    private HashMap<String, Short> overstayTime;
}
