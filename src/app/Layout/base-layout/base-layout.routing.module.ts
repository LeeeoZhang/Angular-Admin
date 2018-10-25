import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './base-layout.component';

const baseLayoutRoutes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(baseLayoutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BaseLayoutRoutingModule {
}
