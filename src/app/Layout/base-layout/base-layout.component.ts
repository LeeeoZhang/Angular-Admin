import {Component, ViewChild} from '@angular/core';
import {MatSidenavContainer, MatSidenavContent, MatSidenav} from '@angular/material';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent  {

    constructor() {
    }

    @ViewChild(MatSidenav)
    private sidenavContent: MatSidenav;

    openSlide() {
        this.sidenavContent.toggle();
    }

}
