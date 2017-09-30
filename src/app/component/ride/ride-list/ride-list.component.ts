import {Component, Type} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {ListComponent} from './../../../widget/list.component';
import {AppService} from '../../../service/app.service';


import {RideData} from './../../../data/ride.data';
import {RideModel} from './../../../model/ride.model';

import {RideFormComponent} from './../ride-form/ride-form.component';

@Component({
    selector: 'biz-ride-list',
    templateUrl: './ride-list.component.html',
    styleUrls: ['./ride-list.component.css']
})
export class RideListComponent extends ListComponent<RideModel> {
    
    list: RideModel[]= [];

    constructor(
        protected data: RideData,
        protected router: Router,
        protected service: AppService,
        protected route: ActivatedRoute) {
            super(data, router, route)
        }
    
    formComponent(): Type<any> {
        return RideFormComponent;
    }
    
    getName(): string {
        return 'Ride'
    }
    
    getPath(): string {
        return 'ride';
    }
    
    onfetch(list: RideModel[]): void {
        this.list= [];
        this.list= list.filter(ride => {
            return ride.user_id == this.service.user.id;
        });
    }
}