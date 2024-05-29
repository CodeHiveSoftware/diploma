package com.olek.ParkEase.data;

import com.olek.ParkEase.data.ParkingPlace;
import com.olek.ParkEase.data.ParkingReservation;
import com.olek.ParkEase.repo.ParkingPlaceRepo;
import com.olek.ParkEase.repo.ParkingReservationRepo;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ParkingReservationInitializer {
    private final ParkingPlaceRepo parkingPlaceRepo;
    private final ParkingReservationRepo parkingReservationRepo;
    @PostConstruct
    public void init() {
        List<ParkingReservation> parkingReservations = new ArrayList<>();

        ParkingReservation parkingReservation = new ParkingReservation();
        parkingReservation.setParkingPlace(parkingPlaceRepo.findById(11L).orElseThrow( () -> new IllegalArgumentException("Parking place with id 1 not found")));
        parkingReservation.setParkingStart(LocalDateTime.from(LocalDateTime.now().minusHours(3)));
        parkingReservation.setIsActual(true);
        parkingReservation.setCarPlate("TX12345F");
        parkingReservation.setParkingTicket(32525243L);
        parkingReservations.add(parkingReservation);


        parkingReservation = new ParkingReservation();
parkingReservation.setParkingPlace(parkingPlaceRepo.findById(8L).orElseThrow( () -> new IllegalArgumentException("Parking place with id 2 not found")));
parkingReservation.setParkingStart(LocalDateTime.from(LocalDateTime.now().minusHours(1)));
parkingReservation.setIsActual(true);
parkingReservation.setCarPlate("TX13678K");
parkingReservation.setParkingTicket(45675243L);
parkingReservations.add(parkingReservation);



parkingReservation = new ParkingReservation();
parkingReservation.setParkingPlace(parkingPlaceRepo.findById(3L).orElseThrow( () -> new IllegalArgumentException("Parking place with id 3 not found")));
parkingReservation.setParkingStart(LocalDateTime.from(LocalDateTime.now().minusMinutes(30)));
parkingReservation.setIsActual(true);
parkingReservation.setCarPlate("TX155457V");
parkingReservation.setParkingTicket(1231533L);
parkingReservations.add(parkingReservation);


parkingReservation = new ParkingReservation();
parkingReservation.setParkingPlace(parkingPlaceRepo.findById(21L).orElseThrow( () -> new IllegalArgumentException("Parking place with id 4 not found")));
parkingReservation.setParkingStart(LocalDateTime.from(LocalDateTime.now().minusHours(11)));
parkingReservation.setIsActual(true);
parkingReservation.setCarPlate("TX3246F");
parkingReservation.setParkingTicket(45463L);
parkingReservations.add(parkingReservation);


for (ParkingReservation pr : parkingReservations) {
            if (!parkingReservationRepo.existsByParkingTicket(pr.getParkingTicket())) {
                parkingReservationRepo.save(pr);
            }
        }






    }
}
