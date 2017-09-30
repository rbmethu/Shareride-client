import {OnInit, Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {Data} from './../data/data';
import {Model} from './../model/model';

import {AlertService} from '../service/alert.service';

export abstract class FormComponent<T extends Model, D extends Data<T>> implements OnInit {
    
    @Input() item: T;
    title: string;

    constructor(
        protected data: D,
        protected alert: AlertService,
        protected route: ActivatedRoute,
        protected location: Location
    ) {
        this.item= this.newItem()
    }

    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => {
            var unique = params.get('id');
            if (unique){
                this.title= 'Edit '+this.getName();
                return this.data.fetch(unique);
            } else {
                this.title= 'Add '+this.getName();
                return Promise.resolve(this.newItem());
            }
        }).subscribe(item => {
            this.item = item;
        });
    }
    
    save(): void {
        if (this.check()){
            this.handleSave();
        }
    }

    protected handleSave(): void {
        if (this.item.id){
            this.data.update(this.item).then((item)=> {
                if (item){
                    this.item= item;
                    this.goBack();
                    this.alert.success(this.getName()+" updated", true);
                } else {
                    this.alert.error("Error updating "+this.getName());
                }
            })
        } else {
            this.data.create(this.item).then((item) => {
                if (item){
                    this.item= item;
                    this.goBack();
                    this.alert.success(this.getName()+" added", true);
                } else {
                    this.alert.error("Error adding "+this.getName());
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
    
    goBack(): void {
        this.location.back();
    }
    
    abstract newItem(): T;
    abstract check(): boolean;
    abstract getName(): string;
}