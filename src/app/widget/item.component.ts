import {OnInit, Type} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {MenuItem} from './../model/menu';
import {ToolBarMenu} from './../component/tool-bar/tool-bar.component';

import {Data} from './../data/data';
import {Model} from './../model/model';

export abstract class ItemComponent<T extends Model> implements OnInit {
    
    item:T;
    title: string;
    edit: MenuItem;
    remove: MenuItem;
    back: boolean= true;

    constructor(
        protected data: Data<T>,
        protected route: ActivatedRoute,
        protected location: Location
    ) {
        this.item = this.newItem();
    }

    ngOnInit(): void {
        this.fetchItem();
    }
    
    fetchItem(): void {
        this.route.paramMap.switchMap((params: ParamMap) => {
            return this.data.fetch(params.get('id'));
        }).subscribe(item => {
            this.title = this.getTitle(item);
            this.edit = ToolBarMenu.editMenu(this.formComponent(),
                this.getPath()+'/edit/' + item.id);
            this.remove = ToolBarMenu.deleteMenu(this.deleteComponent(),
                this.getPath()+'/remove/' + item.id);
            this.item = item;
            this.afterLoad();
        });
    }
    
    afterLoad(): void {
        
    }

    goBack(): void {
        this.location.back();
    }
    
    abstract deleteComponent(): Type<any>;
    abstract formComponent(): Type<any>;
    abstract getName(): string;
    abstract getPath(): string;
    abstract getTitle(item: T): string;
    abstract newItem(): T;
}