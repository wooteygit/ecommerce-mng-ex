import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { StorageService } from '../services/storage.service';
import { MenuService } from '../services/menu.service';

import { environment, Config } from '../../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private title: Title) { }

    ngOnInit(): void {
        this.title.setTitle(Config.AppName);
    }
}

@Component({
    templateUrl: 'app-layout.component.html',
    styleUrls: ['app.component.css']
})
export class AppLayoutComponent implements OnInit {
    env: any = environment;

    constructor(private storage: StorageService, private menu: MenuService) { }

    ngOnInit(): void {
    }

    logOut(): void {
    }
}