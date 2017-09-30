import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {RemoveComponent} from './../../../widget/remove.component';
import {AlertService} from '../../../service/alert.service';
import {RideData} from './../../../data/ride.data';
import {RideModel} from './../../../model/ride.model';

@Component({
    selector: 'app-ride-remove',
    templateUrl: './ride-remove.component.html',
    styleUrls: ['./ride-remove.component.css']
})
export class RideRemoveComponent extends RemoveComponent<RideModel> {

    constructor(
        protected data: RideData,
        protected route: ActivatedRoute,
        protected location: Location,
        protected alert: AlertService,
    ) {
        super(data, route, location, alert);
    }
    
    newItem(): RideModel {
        return new RideModel();
    }
    
    getName(): string {
        return "Ride";
    }
    
    errorMessage(item: RideModel): string {
        return "" + item.id;
    }
    
    successMessage(item: RideModel): string {
        return "" + item.id;
    }
}