import {Component, OnInit} from '@angular/core';

import {AppService} from './../../service/app.service';
import {AlertService} from '../../service/alert.service';
import {LoginData} from './../../data/login.data';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private service: AppService,
        protected alert: AlertService,
        private data: LoginData) {}

    ngOnInit() {

    }

    loggedin(): boolean {
        return this.service.loggedIn();
    }
    
    logout(): void {
        this.data.logout().then(status => {
            if (status){
                this.service.user= null;
            } else {
                this.alert.error('Failed to Logout');
            }
        }).catch(reason => {
            console.log(reason);
            this.alert.error('Failed to Logout');
        });
    }
}
