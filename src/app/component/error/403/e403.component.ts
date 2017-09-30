import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AppService} from './../../../service/app.service';

@Component({
    selector: 'app-error-403',
    templateUrl: './e403.component.html',
    styleUrls: ['./e403.component.css']
})
export class E403Component implements OnInit {
    
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
