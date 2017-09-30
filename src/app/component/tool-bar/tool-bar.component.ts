import {Component, OnInit, Input, Type} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from './../../model/menu';
import {Location} from '@angular/common';

@Component({
    selector: 'tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
    
    @Input() list: MenuItem;
    @Input() view: MenuItem;
    @Input() edit: MenuItem;
    @Input() refresh: MenuItem;
    @Input() remove: MenuItem;
    @Input() add: MenuItem;
    @Input() title: string;
    @Input() back: boolean;
    @Input() base: string[];
    
    constructor(
        private location: Location,
        private router: Router) {}

    ngOnInit() {
        
    }

    handle(item: MenuItem){
        this.goTo(item.link);
    }
    
    goTo(link: string): void {
        this.router.navigate(link.split('/'));
    }

    goBack(): void {
        this.location.back();
    }
}

export class ToolBarMenu {
    
    static addMenu( component: Type<any>, link: string= ""): MenuItem {
        return {link: link, title: "Add", icon: "fa-plus"};
    }
    
    static editMenu( component: Type<any>, link: string= ""): MenuItem {
        return {link: link, title: "Edit", icon: "fa-edit"};
    }
    
    static listMenu( component: Type<any>, link: string= ""): MenuItem {
        return {link: link, title: "List", icon: "fa-list"};
    }
    
    static viewMenu( component: Type<any>, link: string= ""): MenuItem {
        return {link: link, title: "View", icon: "fa-eye"};
    }
    
    static deleteMenu( component: Type<any>, link: string= ""): MenuItem {
        return {link: link, title: "Delete", icon: "fa-trash-o"};
    }
    
    static refreshMenu(call: () => void): MenuItem {
        return {link: '#', title: "Refresh", icon: "fa-refresh"};
    }
}
