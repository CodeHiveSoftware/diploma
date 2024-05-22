package com.olek.ParkEase.repo;

import com.olek.ParkEase.data.ParkingReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingReservationRepo extends JpaRepository<ParkingReservation, Long> {
}
