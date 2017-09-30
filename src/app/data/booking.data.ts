import {Data} from './data';
import {BookingModel} from './../model/booking.model';

export class BookingData extends Data<BookingModel> {

    protected path(): string {
        return '/booking';
    }
    
}