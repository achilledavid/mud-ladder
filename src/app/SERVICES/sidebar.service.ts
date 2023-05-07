import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface sidebar_item {
    title: string;
    link?: string;
    icon?: string;
    menu?: Array<sidebar_item>;
}

@Injectable({
    providedIn: 'root'
})

export class SidebarService {
    opened: boolean = false;

    private items: Array<sidebar_item> = [
        { title: 'home', link: '/home', icon: 'fa fa-home' },
        {
            title: 'matchs', icon: 'fa fa-gamepad', menu: [
                { title: 'find', link: '/matchs/find' },
                { title: 'ongoing', link: '/matchs/ongoing' },
            ]
        },
        { title: 'history', link: '/history', icon: 'fa fa-history' }
    ];

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (this.opened) this.closeSidebar();
            console.log('router')
        });
    }

    public getItems(): Array<sidebar_item> {
        return this.items;
    }

    public openSidebar() {
        this.opened = true;
        console.log('open')
    }

    public closeSidebar() {
        this.opened = false;
        console.log('close')
    }

    public getSidebarState(): boolean {
        return this.opened;
    }
}
