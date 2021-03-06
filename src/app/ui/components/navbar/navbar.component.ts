import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../../models/sidebar-item.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isVisible = false;
    sidebarItems: SidebarItem[] = [{
        label: 'Proffessionnel',
        href: [
            '/'
        ],
        icon: 'fal fa-home'
    }, {
        label: 'Mon Profil',
        href: [
            '/profil'
        ],
        icon: 'fal fa-user'
    }, {
        label: 'Connectivité',
        icon: 'fal fa-handshake',
        href: [],
        subMenu: [{
            label: 'Fonctionnalités téléphone',
            href: ['/connectivite', 'telephone']
        }, {
            label: 'Objets connectés',
            href: ['/connectivite', 'objets-connectes']
        }]
    }, {
        label: 'Communication',
        href: [
            '/communication'
        ],
        icon: 'fal fa-comments'
    }, {
        label: 'Finance',
        href: [
            '/finance'
        ],
        icon: 'fal fa-money-bill-alt'
    }, {
        label: 'Photographie',
        href: [
            '/photographie'
        ],
        icon: 'fal fa-camera-alt'
    }, {
        label: 'Bureautique',
        href: [
            '/bureautique'
        ],
        icon: 'fal fa-desktop-alt'
    }, {
        label: 'Réseaux sociaux',
        href: [
            '/reseaux-sociaux'
        ],
        icon: 'fal fa-share-alt'
    }, {
        label: 'Connexion / inscription',
        href: [
            '/connexion'
        ],
        icon: 'fal fa-sign-in-alt'
    }];

    constructor() { }

    ngOnInit() {
    }

}
