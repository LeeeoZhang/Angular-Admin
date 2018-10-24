import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';

@NgModule({
    declarations: [
        AppComponent,
        CrisisListComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HeroesModule,
        AppRoutingModule,
    ],
    providers: [
        // no need to place any providers due to the `providedIn` flag...
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
