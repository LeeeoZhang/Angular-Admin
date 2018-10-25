import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseLayoutRoutingModule} from './base-layout.routing.module';
import {MatSidenavContainer, MatSidenavContent, MatSidenav, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import {BaseLayoutComponent} from './base-layout.component';
import {HeaderComponent} from '../../Component/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        BaseLayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
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
