import {Component, OnInit} from '@angular/core';
import {AppService} from './../../service/app.service';
import {Location} from '@angular/common';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    pageTitle: string;

    constructor(
        private service: AppService,
        protected location: Location) {}

    ngOnInit() {
        
    }
    
    onTitle(message: string): void {
        this.pageTitle= message;
    }
    
    loggedin(): boolean{
        return this.service.loggedIn();
    }
    
    status(): number {
        return this.service.status;
    }
    
    register(): boolean {
        return this.location.isCurrentPathEqualTo('/register');
    }
}
