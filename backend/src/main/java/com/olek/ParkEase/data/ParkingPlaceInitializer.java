package com.olek.ParkEase.data;

import com.olek.ParkEase.repo.ParkingPlaceRepo;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import jakarta.annotation.PostConstruct;
@Component
@RequiredArgsConstructor
public class ParkingPlaceInitializer {
    private final ParkingPlaceRepo parkingPlaceRepo;
    @PostConstruct
    public void init() {
        if (parkingPlaceRepo.findAll().size() == 30) {

        } else {
            for (int i = 1; i <= 30; i++) {
                ParkingPlace parkingPlace = new ParkingPlace();
                parkingPlace.setId(i);
                if (parkingPlaceRepo.findById((long) i).isEmpty()){
                    parkingPlaceRepo.save(parkingPlace);
                }
            }
        }

    }
}
