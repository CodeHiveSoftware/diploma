package com.olek.ParkEase.data;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "parking_places")
public class ParkingPlace {
    @Id
    private long id;
    @OneToMany(mappedBy = "parkingPlace", cascade = CascadeType.ALL)
    private List <ParkingReservation> parkingReservations;

}
