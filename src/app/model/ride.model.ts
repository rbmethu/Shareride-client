import {Model} from './model';
import {UserModel} from './user.model';

/**
 * ride object model
 */
export class RideModel extends Model {
    
    origin: string;
    destination: string;
    departure: string;
    capacity: number= 0;
    booked: number= 0;
    user_id: number;
    user: UserModel;
    booking: any[]= [];
    
    constructor() {
        super();
        this.user= new UserModel();
    }
}