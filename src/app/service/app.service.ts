import {Injectable} from '@angular/core';
import {UserModel} from '../model/user.model';

@Injectable()
export class AppService {
    
    status: number= 200;
    user: UserModel;
    
    setStatus(status: number): void {
        this.status= status;
    }
    
    statusOk(): void {
        this.setStatus(200);
    }
    
    loggedIn() {
        return this.user != null;
    }
    
}