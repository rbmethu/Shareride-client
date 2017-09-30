import {AfterViewInit, OnInit, ViewChild, Type} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subject} from 'rxjs/Rx';

import {MenuItem} from './../model/menu';
import {ToolBarMenu} from './../component/tool-bar/tool-bar.component';

import {Data} from './../data/data';
import {Model} from './../model/model';

export abstract class ListComponent<T extends Model> implements OnInit, AfterViewInit {
    
    items: T[];
    selected: T;
    title: string;
    add: MenuItem;
    refresh: MenuItem;

    constructor(
        protected data: Data<T>,
        protected router: Router,
        protected route: ActivatedRoute) {}

    ngOnInit(): void {
        this.add = ToolBarMenu.addMenu(this.formComponent(),
            this.getPath()+'/add');
        this.title = this.getName()+' List';
        this.fetchList();
        this.afterInit();
    }
    
    afterInit(): void {
        
    }

    ngAfterViewInit(): void {
        
    }

    itemLink(unique: string) {
        this.router.navigate(['item', unique], {relativeTo: this.route});
    }

    fetchList(): void {
        this.data.fetchList(this.filters(null)).then(list => {
            this.onListLoad(list);
            this.items = list;
            this.onfetch(list)
        });
    }
    
    onfetch(list: T[]): void {
        
    }
    
    filters(params: ParamMap): string[] {
        return [];
    }
    
    protected onListLoad(list: T[]): void {
        
    }
    
    abstract formComponent(): Type<any>;
    abstract getName(): string;
    abstract getPath(): string;
}
