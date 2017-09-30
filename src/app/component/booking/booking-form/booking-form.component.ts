import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {FormComponent} from '../../../widget/form.component';
import {AlertService} from '../../../service/alert.service';
import {AppService} from '../../../service/app.service';

import {RideData} from './../../../data/ride.data';
import {BookingData} from './../../../data/booking.data';
import {RideModel} from './../../../model/ride.model';
import {BookingModel} from './../../../model/booking.model';

@Component({
    selector: 'app-booking-form',
    templateUrl: './booking-form.component.html',
    styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent extends FormComponent<BookingModel, BookingData> {
    
    back: boolean= true;
    date = new Date();
    filteredRides: RideModel[]= [];
    rides: RideModel[]= [];
    
    constructor(
        protected rideData: RideData,
        protected data: BookingData,
        protected service: AppService,
        protected alert: AlertService,
        protected route: ActivatedRoute,
        protected location: Location
    ) {
        super(data, alert, route, location);
    }
    
    ngOnInit(): void {
        this.fetchRides();
        super.ngOnInit();
    }

    newItem(): BookingModel {
        return new BookingModel();
    }

    check(): boolean {
        this.item.user_id = this.service.user.id;
        if (this.item.ride_id){
            return true;
        }
        return false;
    }

    getName(): string {
        return "Booking";
    }
    
    selected(ride: RideModel): string {
        let cl= '';
        if (ride.id == this.item.ride_id){
            this.item.ride.origin = ride.origin;
            this.item.ride.destination = ride.destination;
            this.item.ride.departure = ride.departure;
            cl= 'selected';
        }
        return cl;
    }
    
    fetchRides(): void {
        this.rideData.fetchList([]).then(rides=> {
            this.rides= rides;
            this.filter();
        });
    }
    
    filter(): void {
        let time= new Date();
        this.filteredRides = this.rides.filter(ride =>{
            let status = Date.parse(ride.departure) > time.getTime();
            if (this.item.ride.origin) {
                status = status && (this.item.ride.origin.startsWith(ride.origin));
            }
            if (this.item.ride.destination) {
                    status = status && (this.item.ride.destination.startsWith(ride.destination));
            }
            if (this.item.capacity) {
                status = status && (this.item.capacity <= ride.capacity);
            }
            if (this.item.ride.departure) {
                status = status && Date.parse(ride.departure) >= Date.parse(this.item.ride.departure);
            }
            return status;
        });
    }
}