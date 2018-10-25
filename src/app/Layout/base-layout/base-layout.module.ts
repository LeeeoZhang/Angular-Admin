import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseLayoutRoutingModule} from './base-layout.routing.module';
import {MatSidenavContainer, MatSidenavContent, MatSidenav} from '@angular/material';

import {BaseLayoutComponent} from './base-layout.component';
import {HeaderComponent} from '../../Component/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        BaseLayoutRoutingModule,
    ],
    declarations: [
        BaseLayoutComponent,
        HeaderComponent,
        MatSidenavContainer,
        MatSidenavContent,
        MatSidenav,
    ]
})
export class BaseLayoutModule {
}
