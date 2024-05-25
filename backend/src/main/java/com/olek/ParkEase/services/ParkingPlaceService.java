package com.olek.ParkEase.services;

import com.olek.ParkEase.data.ParkingPlace;
import com.olek.ParkEase.data.ParkingReservation;
import com.olek.ParkEase.dto.ParkingReservationDto;
import com.olek.ParkEase.repo.ParkingPlaceRepo;
import com.olek.ParkEase.repo.ParkingReservationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ParkingPlaceService {
    private final ParkingPlaceRepo parkingPlaceRepo;
    private final ParkingReservationRepo parkingReservationRepo;

    public List<ParkingPlace> getAllParkingPlaces() {
        List<ParkingPlace> allParkingPlaces =  parkingPlaceRepo.findAll();
        allParkingPlaces.forEach(parkingPlace -> parkingPlace.getParkingReservations().removeIf(parkingReservation -> !parkingReservation.getIsActual()));
        return allParkingPlaces;

    }

    public void reserveParkingPlace(long id, ParkingReservationDto parkingReservationDto) {
        ParkingPlace parkingPlace = parkingPlaceRepo.findById(id).orElseThrow();

        ParkingReservation parkingReservation = dtoToParkingReservation(parkingReservationDto, parkingPlace);
        parkingReservationRepo.save(parkingReservation);
    }

    public void unreserveParkingPlace(long id) {
        ParkingPlace parkingPlace = parkingPlaceRepo.findById(id).orElseThrow();
        parkingPlace.getParkingReservations().forEach(parkingReservation -> {
            if (parkingReservation.getIsActual()) {
                parkingReservation.setIsActual(false);
                parkingReservation.setParkingEnd(LocalDateTime.now());
                parkingReservationRepo.save(parkingReservation);
            }
        });
    }

    private ParkingReservation dtoToParkingReservation(ParkingReservationDto parkingReservationDto, ParkingPlace parkingPlace) {
        ParkingReservation parkingReservation = new ParkingReservation();
        parkingReservation.setCarPlate(parkingReservationDto.getCarPlate());
        parkingReservation.setParkingTicket(parkingReservationDto.getParkingTicket());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy, HH:mm:ss");
        LocalDateTime startDateTime = LocalDateTime.parse(parkingReservationDto.getParkingStart(), formatter);
        parkingReservation.setParkingStart(startDateTime);
        parkingReservation.setParkingPlace(parkingPlace);

        return parkingReservation;
    }

    public ParkingReservation getActualParkingPlace( long placeId) {
        ParkingPlace parkingPlace = parkingPlaceRepo.findById(placeId).orElseThrow();
        return parkingPlace.getParkingReservations().stream().filter(ParkingReservation::getIsActual).findFirst().orElse(null);
    }

    public Long getReservedCount() {
        Long reservedCount = parkingPlaceRepo.findAll().stream().map(ParkingPlace::getParkingReservations).flatMap(List::stream).filter(ParkingReservation::getIsActual).count();
        return reservedCount;
    }
}
