import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ComposeMessageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HeroesModule,
        CrisisCenterModule,
        AppRoutingModule,
    ],
    providers: [
        // no need to place any providers due to the `providedIn` flag...
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
