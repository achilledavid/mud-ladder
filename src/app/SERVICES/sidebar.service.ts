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
        { title: 'Accueil', link: '/home', icon: 'fa fa-home' },
        {
            title: 'Matchs', icon: 'fa fa-gamepad', menu: [
                { title: 'Trouver un match', link: '/matchs/find' },
                { title: 'Matchs en cours', link: '/matchs/ongoing' },
            ]
        },
        { title: 'Historique', link: '/history', icon: 'fa fa-history' },
        { title: 'Mon compte', link: '/account', icon: 'fa fa-user' }
    ];

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            this.closeSidebar();
        });
    }

    public getItems(): Array<sidebar_item> {
        return this.items;
    }

    public openSidebar() {
        this.opened = true;
    }

    public closeSidebar() {
        this.opened = false;
    }

    public getSidebarState(): boolean {
        return this.opened;
    }
}
