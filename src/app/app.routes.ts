import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const app_routes: Routes = [
    { path: '', redirectTo: 'portafolio', pathMatch: 'full' },
    { path: 'portafolio', loadComponent: () => import('./pages/portafolio/portafolio').then(m => m.Portafolio) },
    { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
    { path: 'item/:id', loadComponent: () => import('./pages/item/item').then(m => m.Item) },
    { path: 'search/:termino', loadComponent: () => import('./pages/search/search').then(m => m.Search) },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export class AppRoutes {



}


