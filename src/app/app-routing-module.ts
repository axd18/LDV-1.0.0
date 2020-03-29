import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { Work1Component } from './pages/work1/work1.component';
import { HomeComponent } from './pages/home/home.component';


// tslint:disable-next-line:variable-name
const app_routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work1', component: Work1Component },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
