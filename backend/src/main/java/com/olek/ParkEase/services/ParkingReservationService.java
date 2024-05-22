package com.olek.ParkEase.services;

import com.olek.ParkEase.data.ParkingReservation;
import com.olek.ParkEase.repo.ParkingPlaceRepo;
import com.olek.ParkEase.repo.ParkingReservationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ParkingReservationService {
    private final ParkingReservationRepo parkingReservationRepo;
    private final ParkingPlaceRepo parkingPlaceRepo;

    public void doReservation (Long parkingPlaceId) {
        ParkingReservation parkingReservation = new ParkingReservation();
        parkingReservation.setParkingPlace(parkingPlaceRepo.findById(parkingPlaceId).orElseThrow( () -> new IllegalArgumentException("Parking place with id " + parkingPlaceId + " not found")));
        parkingReservation.setParkingStart(java.time.LocalDateTime.now());
        parkingReservation.setIsActual(true);
        parkingReservationRepo.save(parkingReservation);
    }

    public void undoReservation(Long id) {
        ParkingReservation parkingReservation = parkingReservationRepo.findById(id).orElseThrow( () -> new IllegalArgumentException("Reservation with id " + id + " not found"));
        if (parkingReservation.getParkingEnd() != null) {
            throw new IllegalArgumentException("Reservation with id " + id + " is already finished");
        } else {
            parkingReservation.setParkingEnd(java.time.LocalDateTime.now());
            parkingReservation.setIsActual(false);
            parkingReservationRepo.save(parkingReservation);
        }
    }
}
