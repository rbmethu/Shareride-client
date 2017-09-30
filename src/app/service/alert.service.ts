import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AlertService {
    
    private subject = new Subject<any>();
    private keep = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keep) {
                    this.keep = false;
                } else {
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keep= false) {
        this.keep = keep;
        this.subject.next({type: 'success', text: message});
    }

    error(message: string, keep= false) {
        this.keep = keep;
        this.subject.next({type: 'error', text: message});
    }
    
    info(message: string, keep= false) {
        this.keep = keep;
        this.subject.next({type: 'info', text: message});
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}