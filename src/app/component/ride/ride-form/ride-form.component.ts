import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {FormComponent} from '../../../widget/form.component';
import {AlertService} from '../../../service/alert.service';
import {AppService} from '../../../service/app.service';

import {RideData} from './../../../data/ride.data';
import {RideModel} from './../../../model/ride.model';

@Component({
    selector: 'app-ride-form',
    templateUrl: './ride-form.component.html',
    styleUrls: ['./ride-form.component.css']
})
export class RideFormComponent extends FormComponent<RideModel, RideData> {
    
    back: boolean= true;
    date = new Date();
    
    constructor(
        protected data: RideData,
        protected service: AppService,
        protected alert: AlertService,
        protected route: ActivatedRoute,
        protected location: Location
    ) {
        super(data, alert, route, location);
    }

    newItem(): RideModel {
        return new RideModel();
    }

    check(): boolean {
        this.item.user_id = this.service.user.id;
        return true;
    }

    getName(): string {
        return "Ride";
    }
}