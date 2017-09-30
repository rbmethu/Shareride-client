import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {AppService} from '../service/app.service';

import 'rxjs/add/operator/toPromise';
import {Model} from '../model/model';

/**
 * common api query methods
 */
@Injectable()
export abstract class Data<T extends Model> {

    protected url = 'http://local/Server/public/api';

    constructor(protected http: Http,
        protected service: AppService) {

    }

    /**
     * send POST request for given object and 
     * path defined
     */
    create(item: T): Promise<T> {
        return this.http.post(
            this.link(),
            item,
            {headers: this.header()}
        ).toPromise()
            .then(res => {
                this.service.setStatus(res.status);
                return res.json() as T;
            }).catch(error => this.handleError(error));
    }

    /**
     * send PUT request for given object and 
     * path defined
     */
    update(item: T): Promise<T> {
        const url = `${this.link()}/${item.id}`;
        return this.http.put(
            url,
            item,
            {headers: this.header()}
        ).toPromise()
            .then(res => {
                this.service.setStatus(res.status);
                return res.json() as T;
            }).catch(error => this.handleError(error));
    }

    /**
     * send DELETE request for given object and 
     * path defined
     */
    remove(item: T): Promise<boolean> {
        const url = `${this.link()}/${item.id}`;
        return this.http.delete(
            url,
            {headers: this.header()}
        ).toPromise()
            .then(res => {
                this.service.setStatus(res.status);
                return res.json() == item.id;
            }).catch(error => this.handleError(error));
    }

    /**
     * send GET request for single item given unique identifier
     * and path defined
     */
    fetch(unique: string): Promise<T> {
        var url = `${this.link()}/${unique}`;
        return this.http.get(
            url,
            {headers: this.header()}
        ).toPromise()
            .then(res => {
                this.service.setStatus(res.status);
                return res.json() as T;
            }).catch(error => this.handleError(error));
    }

    /**
     * send GET request for all items at the 
     * path defined
     */
    fetchList(filters: string[] = []): Promise<T[]> {
        return this.http.get(
            this.link() + this.filterList(filters),
            {headers: this.header()}
        ).toPromise()
            .then(res => {
                this.service.setStatus(res.status);
                return res.json() as T[];
            }).catch(error => this.handleError(error));
    }

    /**
     * add custom filter fields to request
     */
    filterList(filters: string[]): string {
        var args = '';
        for (var filter of filters) {
            if (args.length < 1) {
                args = '/' + filter;
            } else {
                args += '/' + filter;
            }
        }
        return args;
    }

    /**
     * make full path to resource
     */
    link(): string {
        return this.url + this.path();
    }
    
    /**
     * add HTTP header to request
     */
    header(): Headers {
        return new Headers(
            {
                'Authorization': "Bearer " + this.authorization()
            });
    }

    /**
     * get Header authorization key
     */
    authorization(): string {
        var text = "";
        if (this.service.loggedIn()) {
            text = this.service.user.api_token;
        }
        return text;
    }

    /**
     * handle network errors that may occur
     */
    protected handleError(error: any): Promise<any> {
        this.service.setStatus(error.status);
        console.error('An error occurred', error);
        return Promise.reject(error._body);
    }

    /**
     * define endpoint for the resource group
     */
    protected abstract path(): string;
}