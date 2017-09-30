import {Model} from './model';
import {RideModel} from './ride.model';
import {UserModel} from './user.model';

/**
 * ride booking object model
 */
export class BookingModel extends Model {
    
    user_id: number;
    ride_id: number;
    capacity: number;
    status: boolean= false;
    user: UserModel= new UserModel();
    ride: RideModel= new RideModel();
    
}