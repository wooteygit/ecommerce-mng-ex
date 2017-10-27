import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private menu: MenuService) { }

    ngOnInit() {
    }

}
