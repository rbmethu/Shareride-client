import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AlertService} from './service/alert.service';
import {AppService} from './service/app.service';
import {LoginData} from './data/login.data';
import {UserData} from './data/user.data';
import {BookingData} from './data/booking.data';
import {RideData} from './data/ride.data';

import {AlertComponent} from './component/alert/alert.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {LoginComponent} from './component/login/login.component';
import {MainComponent} from './component/main/main.component';
import {SideMenuComponent} from './component/side-menu/side-menu.component';
import {RegisterComponent} from './component/register/register.component';
import {ToolBarComponent} from './component/tool-bar/tool-bar.component';
import {E403Component} from './component/error/403/e403.component';
import {E404Component} from './component/error/404/e404.component';

import { RideFormComponent } from './component/ride/ride-form/ride-form.component';
import { RideListComponent } from './component/ride/ride-list/ride-list.component';
import { RideItemComponent } from './component/ride/ride-item/ride-item.component';
import { RideRemoveComponent } from './component/ride/ride-remove/ride-remove.component';

import { BookingFormComponent } from './component/booking/booking-form/booking-form.component';

@NgModule({
    declarations: [
        AlertComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        MainComponent,
        SideMenuComponent,
        RegisterComponent,
        ToolBarComponent,
        E403Component,
        E404Component,
        RideFormComponent,
        RideListComponent,
        RideItemComponent,
        RideRemoveComponent,
        BookingFormComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
        RouterModule,
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
    ],
    providers: [
        AlertService,
        AppService,
        LoginData,
        RideData,
        UserData,
        BookingData,
    ],
    bootstrap: [
        HeaderComponent,
        FooterComponent,
        MainComponent
    ]
})
export class AppModule {}
