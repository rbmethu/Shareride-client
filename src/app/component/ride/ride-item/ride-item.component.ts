import {Component, Type} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {AlertService} from '../../../service/alert.service';

import {ItemComponent} from './../../../widget/item.component';
import {RideFormComponent} from './../ride-form/ride-form.component';
import {RideRemoveComponent} from './../ride-remove/ride-remove.component';
import {RideData} from './../../../data/ride.data';
import {BookingData} from './../../../data/booking.data';
import {RideModel} from './../../../model/ride.model';
import {BookingModel} from './../../../model/booking.model';

@Component({
    selector: 'app-ride-item',
    templateUrl: './ride-item.component.html',
    styleUrls: ['./ride-item.component.css']
})
export class RideItemComponent extends ItemComponent<RideModel> {
    
    bookingTitle: string= "Bookings";
    bookings: BookingModel[]= [];
    
    constructor(
        protected data: RideData,
        protected bookingData: BookingData,
        protected alert: AlertService,
        protected route: ActivatedRoute,
        protected location: Location
    ) {
        super(data, route, location);
    }
        deleteComponent(): Type<any> {
        return RideRemoveComponent;
    }
    
    formComponent(): Type<any> {
        return RideFormComponent;
    }
    
    getName(): string {
        return "Ride";
    }
    
    getPath(): string {
        return "ride";
    }
    
    afterLoad(): void {
        this.fetchBookings();
    }
    
    fetchBookings() {
        this.bookingData.fetchList(['ride', this.item.id.toString()]).then(bookings=> {
            this.bookings= bookings;
        })
    }
    
    getTitle(item: RideModel): string {
        return "Ride : " + item.id;
    }
    
    newItem(): RideModel {
        return new RideModel();
    }
    
    approve(booking: BookingModel) {
        if (booking.capacity <= (this.item.capacity - this.item.booked)){
            this.item.booked = this.item.booked + booking.capacity;
            booking.status= true;
            this.data.update(this.item);
            this.bookingData.update(booking);
        } else {
            this.alert.error('Space not enough');
        }
    }
}