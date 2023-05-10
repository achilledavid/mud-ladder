import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

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
            title: 'rankings', link: '/rankings', icon: 'fa fa-list-ol', menu: [
                { title: 'players', link: '/rankings/players', icon: 'fa fa-users' },
                { title: '1v1', link: '/rankings/1v1', icon: 'fa fa-boxing-glove' },
                { title: '2v2', link: '/rankings/2v2', icon: 'fa fa-user-group' },
            ]
        },
        {
            title: 'ranked', link: '/ranked', icon: 'fa fa-trophy', menu: [
                { title: '1v1', link: '/ranked/1v1', icon: 'fa fa-boxing-glove' },
                { title: '2v2', link: '/ranked/2v2', icon: 'fa fa-user-group' },
                { title: 'rules', link: '/ranked/rules', icon: 'fa fa-book' },
            ]
        },
        {
            title: 'unranked', link: '/unranked', icon: 'fa fa-gamepad', menu: [
                { title: 'friendlies', link: 'unranked/friendlies', icon: 'fa fa-handshake' },
                { title: '1v1', link: '/unranked/1v1', icon: 'fa fa-boxing-glove' },
                { title: '2v2', link: '/unranked/2v2', icon: 'fa fa-user-group' },
                { title: 'FFA', link: '/unranked/FFA', icon: 'fa fa-users' },
            ]
        },
        {
            title: 'history', link: '/history', icon: 'fa fa-history', menu: [
                { title: 'mine', link: '/history/mine', icon: 'fa fa-user' },
                { title: 'global', link: '/history/global', icon: 'fa fa-earth-africa' },
            ]
        },
        {
            title: 'chat', link: '/chat', icon: 'fa fa-comments', menu: [
                { title: 'global', link: '/chat/global', icon: 'fa fa-earth-africa' },
                { title: 'friends', link: '/chat/friends', icon: 'fa fa-user-friends' },
            ]
        },
        {
            title: 'admin', link: '/admin', icon: 'fa fa-user-shield', menu: [
                { title: 'users', link: '/admin/users', icon: 'fa fa-users' },
                { title: 'games', link: '/admin/games', icon: 'fa fa-gamepad' },
                { title: 'maps', link: '/admin/maps', icon: 'fa fa-map' },
                { title: 'modes', link: '/admin/modes', icon: 'fa fa-list-ol' },
                { title: 'ranks', link: '/admin/ranks', icon: 'fa fa-trophy' },
                { title: 'settings', link: '/admin/settings', icon: 'fa fa-cog' },
            ]
        },
        {
            title: 'about', link: '/about', icon: 'fa fa-info-circle', menu: [
                { title: 'how to play', link: '/how-to-play', icon: 'fa fa-book' },
                { title: 'updates', link: '/updates', icon: 'fa fa-bullhorn' },
                { title: 'report a bug', link: '/report-bug', icon: 'fa fa-bug' },
                { title: 'donate', link: '/donate', icon: 'fa fa-donate' },
                { title: 'privacy', link: '/privacy', icon: 'fa fa-user-secret' },
                { title: 'terms', link: '/terms', icon: 'fa fa-file-alt' },
                { title: 'contact', link: '/contact', icon: 'fa fa-envelope' },
            ]
        },
    ];

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (this.opened) this.closeSidebar();
            }
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
