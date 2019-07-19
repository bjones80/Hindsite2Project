import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { YepComponent } from './yep/yep.component';
import { ContactComponent } from './contact/contact.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { HomeLandComponent } from './home/home-land/home-land.component';
import { HomeWeedControlComponent } from './home/home-weed-control/home-weed-control.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutHindsiteComponent } from './about/about-hindsite/about-hindsite.component';
import { AboutGalleryComponent } from './about/about-gallery/about-gallery.component';
import { AboutBossComponent } from './about/about-boss/about-boss.component';
import { AboutTimeLineComponent } from './about/about-time-line/about-time-line.component';
import { AboutBossGalleryComponent } from './about/about-boss-gallery/about-boss-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ReclamationComponent } from './services/reclamation/reclamation.component';
import { WeedControlComponent } from './services/weed-control/weed-control.component';
import { MonitoringComponent } from './services/monitoring/monitoring.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactMessageComponent } from './contact/contact-message/contact-message.component';
import { ContactLocatedComponent } from './contact/contact-located/contact-located.component';
import { HomeQuoteComponent } from './home/home-quote/home-quote.component';
import { PaytimeComponent } from './yep/paytime/paytime.component';
import { CalendarComponent } from './yep/calendar/calendar.component';
import { YepDefinitionComponent } from './yep/yep-definition/yep-definition.component';
import { ClientsLoginComponent } from './clients/clients-login/clients-login.component';
import { GpsComponent } from './gps/gps.component';
import { GpsListComponent } from './gps/gps-list/gps-list.component';
import { GpsItemComponent } from './gps/gps-list/gps-item/gps-item.component';
import { GpsEditComponent } from './gps/gps-edit/gps-edit.component';
import { GpsFilterPipe } from './gps/gps-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    YepComponent,
    ContactComponent,
    HomeGalleryComponent,
    HomeLandComponent,
    HomeWeedControlComponent,
    AboutHindsiteComponent,
    AboutGalleryComponent,
    AboutBossComponent,
    AboutTimeLineComponent,
    AboutBossGalleryComponent,
    FooterComponent,
    ReclamationComponent,
    WeedControlComponent,
    MonitoringComponent,
    ContactDetailComponent,
    ContactMessageComponent,
    ContactLocatedComponent,
    HomeQuoteComponent,
    PaytimeComponent,
    CalendarComponent,
    YepDefinitionComponent,
    ClientsLoginComponent,
    GpsComponent,
    GpsEditComponent,
    GpsListComponent,
    GpsItemComponent,
    GpsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

