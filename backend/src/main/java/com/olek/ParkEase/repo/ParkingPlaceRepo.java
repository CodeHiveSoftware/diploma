package com.olek.ParkEase.repo;

import com.olek.ParkEase.data.ParkingPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingPlaceRepo extends JpaRepository<ParkingPlace, Long> {


}
