import { Component, OnInit } from '@angular/core';

import { Config } from '../../../environments/environment';
import { ProductModel } from '../../models/product.model';

import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    config: any = Config;
    products: ProductModel[] = [{
        name: "Congue potenti pulvinar montes iaculis mus, fermentum nihil minima",
        main_picture: "/products/1.jpg",
        price: 100,
        qty: 10,
        create_date: new Date(2017, 0, 1)
    }, {
        name: "Massa fames eaque deserunt proident perspiciatis, minima hymenaeos unde",
        main_picture: "/products/2.jpg",
        price: 250,
        qty: 20,
        create_date: new Date(2017, 0, 5)
    }, {
        name: "Praesentium curabitur, aliquam soluta hac atque, temporibus aptent",
        main_picture: "/products/3.jpg",
        price: 80,
        qty: 5,
        create_date: new Date(2017, 0, 11)
    }, {
        name: "Pellentesque eaque voluptatibus aenean laborum deserunt ac montes nesciunt maxime",
        main_picture: "/products/4.jpg",
        price: 530,
        qty: 30,
        create_date: new Date(2017, 0, 28)
    }];
    
    constructor(private menu: MenuService) { }

    ngOnInit() {
    }

}
