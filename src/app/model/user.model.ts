import {Model} from './model';

/**
 * user object model
 */
export class UserModel extends Model {
    
    name: string;
    email: string;
    phone: number;
    api_token: string;
    password: string;
    password_confirmation: string;
    
}

