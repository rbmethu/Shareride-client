/**
 * conviniency object for menu items
 */
export class MenuItem {
    link: string;
    icon: string;
    title: string;
}

/**
 * menu item that support child menu
 */
export class Menu extends MenuItem {
    
    items: MenuItem[]= [];
}