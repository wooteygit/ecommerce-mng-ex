import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared.module';

import { AppComponent, AppLayoutComponent } from './components/app.component';

import { StorageService } from './services/storage.service';
import { MenuService } from './services/menu.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forRoot([
            {
                path: '',
                component: AppLayoutComponent,
                children: [
                    {
                        path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                        path: 'product',
                        component: ProductComponent
                    },
                    {
                        path: 'product/:id',
                        component: ProductFormComponent
                    }
                ]
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ])
    ],
    declarations: [
        AppComponent, AppLayoutComponent, DashboardComponent, ProductComponent, ProductFormComponent, LoginComponent
    ],
    providers: [StorageService, MenuService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
