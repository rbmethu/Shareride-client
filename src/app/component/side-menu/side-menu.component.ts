import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Menu, MenuItem} from './../../model/menu';

@Component({
    selector: 'side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit {
    
    selectedMenu: string;

    constructor(
        private router: Router
        ) {}

    ngOnInit() {
        
    }
    
    goTo(item: MenuItem, menu: Menu): void {
        this.selectedMenu = menu.link;
        this.router.navigate(item.link.split('/'));
        
    }
    
    menus(): Menu[] {
        return [
            this.makeMenu('Dashboard', 'dashboard', 'fa-dashboard'),
            this.makeMenu('My Rides', 'ride', 'fa-car'),
        ];
    }
    
    active(menu: Menu): string {
        return this.selectedMenu == menu.link ? 'active': '';
    }
    
    makeMenu(title: string, link: string, icon: string = "fa-bars"): Menu {
        return {
            link: link,
            title: title,
            icon: icon,
            items: []
        }
    }
}
