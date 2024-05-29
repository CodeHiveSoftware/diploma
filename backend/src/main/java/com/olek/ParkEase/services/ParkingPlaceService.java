package com.olek.ParkEase.services;

import com.olek.ParkEase.data.ParkingPlace;
import com.olek.ParkEase.data.ParkingReservation;
import com.olek.ParkEase.dto.OverstayedDto;
import com.olek.ParkEase.dto.ParkingReservationDto;
import com.olek.ParkEase.repo.ParkingPlaceRepo;
import com.olek.ParkEase.repo.ParkingReservationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
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

    public List<OverstayedDto> getOverstayedReservations() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        List<ParkingReservation> overstayedReservations = parkingReservationRepo.findAll()
                .stream()
                .filter(parkingReservation -> parkingReservation.getIsActual()
                        && parkingReservation.getParkingEnd() == null
                        && Duration.between(parkingReservation.getParkingStart(), currentDateTime).toHours() >= 1)
                .toList();


        List<OverstayedDto> overstayedDtos = new ArrayList<>();
        for (ParkingReservation parkingReservation : overstayedReservations) {
            HashMap<String, Short> overstayTime = getOverstayTime(parkingReservation);
            OverstayedDto overstayedDto = new OverstayedDto();
            overstayedDto.setPlate(parkingReservation.getCarPlate());
            overstayedDto.setPayment(calculatePrice(parkingReservation));
            overstayedDto.setOverstayTime(overstayTime);
            overstayedDtos.add(overstayedDto);
        }
        return overstayedDtos;
    }

    private HashMap<String, Short> getOverstayTime(ParkingReservation parkingReservation) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        LocalDateTime parkingStart = parkingReservation.getParkingStart();

        long hours;
        long minutes;

        if (currentDateTime.isAfter(parkingStart)) {
            Duration duration = Duration.between(parkingStart, currentDateTime);
            hours = duration.toHours();
            minutes = duration.minusHours(hours).toMinutes();
        } else {
            hours = 0;
            minutes = 0;
        }

        return new HashMap<String, Short>() {{
            put("hours", (short) hours);
            put("minutes", (short) minutes);
        }};
    }


    private Double calculatePrice(ParkingReservation parkingReservation) {
        HashMap <String, Short> overstayTime = getOverstayTime(parkingReservation);
        short hours = overstayTime.get("hours");

        return hours * 3.0;

    }

    public Integer getAllInLast3Hours() {
        return (int) parkingReservationRepo.findAll().stream().filter(parkingReservation -> parkingReservation.getParkingStart().isAfter(LocalDateTime.now().minusHours(3))).count();
    }
}
