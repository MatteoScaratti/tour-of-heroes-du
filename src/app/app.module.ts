import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AppRoutingModule
  ],
  providers: [HeroService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
