package com.olek.ParkEase.dto;

import com.olek.ParkEase.data.ParkingPlace;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
@Data
public class ParkingReservationDto {
        private Long parkingTicket ;
        private String carPlate;
        private String parkingStart;
    }


