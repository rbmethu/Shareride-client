import {Component, OnInit} from '@angular/core';

import {AlertService} from '../../service/alert.service';
import {AppService} from './../../service/app.service';
import {LoginData} from './../../data/login.data';
import {UserModel} from './../../model/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    user: UserModel= new UserModel();
    
    constructor(
        private service: AppService,
        protected alert: AlertService,
        private data: LoginData) {}

    ngOnInit() {
        
    }
    
    toLogin(){
        this.data.create(this.user).then(user => {
            if (user && user.api_token){
                this.service.user = user;
            } else {
                this.alert.error('Login Failed');
            }
        }).catch(reason => {
            console.log(reason);
            this.alert.error('Login Failed');
        });
    }

}
