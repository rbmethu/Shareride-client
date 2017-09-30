import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AppService} from './../../../service/app.service';

@Component({
    selector: 'app-error-404',
    templateUrl: './e404.component.html',
    styleUrls: ['./e404.component.css']
})
export class E404Component implements OnInit {
    
    constructor(
        private service: AppService,
        private location: Location,
    ) {}

    ngOnInit() {
    }
    
    goBack(): void {
        this.service.statusOk();
        this.location.back();
    }
}
