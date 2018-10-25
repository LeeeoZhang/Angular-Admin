import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {BaseLayoutModule} from './Layout/base-layout/base-layout.module';


import {AppComponent} from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        BaseLayoutModule,
        AppRoutingModule,
    ],
    providers: [
        // no need to place any providers due to the `providedIn` flag...
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
