package com.olek.ParkEase.data;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "parking_reservations")
public class ParkingReservation {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "parking_ticket" , nullable = false, unique = true)
    private Long parkingTicket ;
    private String carPlate;
    private LocalDateTime parkingStart;
    private LocalDateTime parkingEnd = null;
    private Boolean isActual = true;

    @ManyToOne
    private ParkingPlace parkingPlace;
}
