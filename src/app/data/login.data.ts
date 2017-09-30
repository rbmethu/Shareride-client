import {Data} from './data';
import {UserModel} from './../model/user.model';

export class LoginData extends Data<UserModel> {
    
    /**
     * handle user logout
     */
    logout(): Promise<boolean> {
        let url = this.url+'/logout';
        return this.http.post(
            url,
            JSON.stringify(""),
            {headers: this.header()}
        ).toPromise()
            .then(res => {
                this.service.setStatus(res.status);
                return res.status == 200;
            }).catch(error => this.handleError(error));
    }

    protected path(): string {
        return '/login';
    }
    
}