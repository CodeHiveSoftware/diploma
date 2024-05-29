package com.olek.ParkEase.controller;

import com.olek.ParkEase.data.ParkingPlace;
import com.olek.ParkEase.data.ParkingReservation;
import com.olek.ParkEase.dto.OverstayedDto;
import com.olek.ParkEase.dto.ParkingReservationDto;
import com.olek.ParkEase.repo.ParkingPlaceRepo;
import com.olek.ParkEase.services.ParkingPlaceService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/parking-place")
@RequiredArgsConstructor
public class ParkingPlaceController {
    private final ParkingPlaceService parkingPlaceService;

    @GetMapping("/all")
    public ResponseEntity<List<ParkingPlace>> getAllParkingPlaces() {
        return ResponseEntity.ok(parkingPlaceService.getAllParkingPlaces());
    }

    @PostMapping("/reserve/{id}")
    public ResponseEntity<String> reserveParkingPlace(@PathVariable long id, @RequestBody ParkingReservationDto parkingReservationDto) {
        parkingPlaceService.reserveParkingPlace(id, parkingReservationDto);
        return ResponseEntity.ok("Parking place reserved");
    }
    @PatchMapping("/unreserve/{id}")
    public ResponseEntity<String> unreserveParkingPlace(@PathVariable long id) {
        parkingPlaceService.unreserveParkingPlace(id);
        return ResponseEntity.ok("Parking place unreserved");
    }

    @GetMapping("/getActual/{id}")
    public ResponseEntity<ParkingReservation> getActualParkingPlaces(@PathVariable long id) {
        return ResponseEntity.ok(parkingPlaceService.getActualParkingPlace(id));
    }

    @GetMapping("/getReservedCount")
    public ResponseEntity<Long> getReservedCount() {
        return ResponseEntity.ok(parkingPlaceService.getReservedCount());
    }

    @GetMapping("/getOverstayedReservations")
    public ResponseEntity<List<OverstayedDto>> getOverstayedReservations() {
        return ResponseEntity.ok(parkingPlaceService.getOverstayedReservations());
    }

    @GetMapping("/getAllInLast3Hours")
    public ResponseEntity<Integer> getAllInLast3Hours() {
        return ResponseEntity.ok(parkingPlaceService.getAllInLast3Hours());
    }
}
