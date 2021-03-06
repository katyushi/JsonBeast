import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PeopleService} from './people.service';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
// tslint:disable-next-line: deprecation
        HttpModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide:
            RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        PeopleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
