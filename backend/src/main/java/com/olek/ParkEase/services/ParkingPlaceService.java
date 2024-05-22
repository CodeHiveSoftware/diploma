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
        return parkingPlaceRepo.findAll();
    }

}
