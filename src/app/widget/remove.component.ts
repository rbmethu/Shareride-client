import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AlertService} from './../service/alert.service';

import {Data} from './../data/data';
import {Model} from './../model/model';

export abstract class RemoveComponent<T extends Model> implements OnInit {
    
    item:T;
    title: string;
    back: boolean= true;

    constructor(
        protected data: Data<T>,
        protected route: ActivatedRoute,
        protected location: Location,
        protected alert: AlertService,
    ) {}

    ngOnInit(): void {
        this.item = this.newItem();
        this.title = "Delete " + this.getName();
        this.route.paramMap.switchMap((params: ParamMap) => {
            return this.data.fetch(params.get('id'));
        }).subscribe(item => {
            this.item = item;
        });
    }

    goBack(): void {
        this.location.back();
    }
    
    remove() {
        if (this.item.id){
            this.data.remove(this.item).then((item)=> {
                if (item){
                    this.onSuccess();
                    this.alert.success(this.getName() + " " 
                        +this.successMessage(this.item)+" deleted", true);
                } else {
                    this.alert.error("Error deleting " 
                        +this.errorMessage(this.item));
                }
            })
        } else {
            this.alert.error("Invalid " + this.getName());
        }
    }
    
    onSuccess(): void {
        this.goBack();
    }
    
    abstract newItem(): T;
    abstract getName(): string;
    abstract errorMessage(item: T): string;
    abstract successMessage(item: T): string;
}