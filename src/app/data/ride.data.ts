import {Data} from './data';
import {RideModel} from './../model/ride.model';

export class RideData extends Data<RideModel> {

    protected path(): string {
        return '/ride';
    }
    
}