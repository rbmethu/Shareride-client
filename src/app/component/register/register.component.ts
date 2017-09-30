import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {FormComponent} from '../../widget/form.component';
import {AlertService} from '../../service/alert.service';
import {AppService} from '../../service/app.service';

import {UserData} from './../../data/user.data';
import {UserModel} from './../../model/user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent extends FormComponent<UserModel, UserData> {
    
    back: boolean= true;
    
    constructor(
        protected data: UserData,
        protected service: AppService,
        protected alert: AlertService,
        protected route: ActivatedRoute,
        protected location: Location
    ) {
        super(data, alert, route, location);
    }

    newItem(): UserModel {
        return new UserModel();
    }

    check(): boolean {
        return true;
    }

    getName(): string {
        return "User";
    }
}