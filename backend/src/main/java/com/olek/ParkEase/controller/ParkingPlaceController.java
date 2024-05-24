package com.olek.ParkEase.controller;

import com.olek.ParkEase.data.ParkingPlace;
import com.olek.ParkEase.services.ParkingPlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
