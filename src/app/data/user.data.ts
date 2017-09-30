import {Data} from './data';
import {UserModel} from './../model/user.model';

export class UserData extends Data<UserModel> {

    protected path(): string {
        return '/register';
    }
    
}