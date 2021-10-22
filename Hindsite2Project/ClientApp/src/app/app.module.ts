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
import { EmployeeComponent } from './employee/employee.component';
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
import { SeedingComponent } from './services/seeding/seeding.component';
import { WeedControlComponent } from './services/weed-control/weed-control.component';
import { YepComponent } from './services/yep/yep.component';
import { ErosinComponent } from './services/erosin/erosin.component';
import { IrrigationComponent } from './services/irrigation/irrigation.component';
import { MonitoringComponent } from './services/monitoring/monitoring.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactMessageComponent } from './contact/contact-message/contact-message.component';
import { ContactLocatedComponent } from './contact/contact-located/contact-located.component';
import { HomeQuoteComponent } from './home/home-quote/home-quote.component';
import { PaytimeComponent } from './employee/paytime/paytime.component';
import { CalendarComponent } from './employee/calendar/calendar.component';
import { EmployeeDefinitionComponent } from './employee/employee-definition/employee-definition.component';
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
    EmployeeComponent,
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
    SeedingComponent,
    WeedControlComponent,
    YepComponent,
    ErosinComponent,
    IrrigationComponent,
    MonitoringComponent,
    ContactDetailComponent,
    ContactMessageComponent,
    ContactLocatedComponent,
    HomeQuoteComponent,
    PaytimeComponent,
    CalendarComponent,
    EmployeeDefinitionComponent,
    ClientsLoginComponent,
    MonitoringComponent,
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

