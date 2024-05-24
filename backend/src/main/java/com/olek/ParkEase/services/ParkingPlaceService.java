package com.olek.ParkEase.services;

import com.olek.ParkEase.data.ParkingPlace;
import com.olek.ParkEase.repo.ParkingPlaceRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParkingPlaceService {
    private final ParkingPlaceRepo parkingPlaceRepo;

    public List<ParkingPlace> getAllParkingPlaces() {
        List<ParkingPlace> allParkingPlaces =  parkingPlaceRepo.findAll();
        allParkingPlaces.forEach(parkingPlace -> parkingPlace.getParkingReservations().removeIf(parkingReservation -> !parkingReservation.getIsActual()));
        return allParkingPlaces;

    }

}
