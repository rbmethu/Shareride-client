import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {E404Component} from './component/error/404/e404.component';
import {E403Component} from './component/error/403/e403.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';

import { RideFormComponent } from './component/ride/ride-form/ride-form.component';
import { RideListComponent } from './component/ride/ride-list/ride-list.component';
import { RideItemComponent } from './component/ride/ride-item/ride-item.component';
import { RideRemoveComponent } from './component/ride/ride-remove/ride-remove.component';

import { BookingFormComponent } from './component/booking/booking-form/booking-form.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: '403', component: E403Component},
    {path: '404', component: E404Component},
    
    
    {path: 'ride', component: RideListComponent},
    {path: 'ride/add', component: RideFormComponent},
    {path: 'ride/item/:id', component: RideItemComponent},
    {path: 'ride/edit/:id', component: RideFormComponent},
    {path: 'ride/remove/:id', component: RideRemoveComponent},
    
    {path: 'booking/add', component: BookingFormComponent},
    
    {path: '**', component: E404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
