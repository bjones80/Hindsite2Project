import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutBossComponent } from './about/about-boss/about-boss.component';
import { AboutTimeLineComponent } from './about/about-time-line/about-time-line.component';
import { AboutBossGalleryComponent } from './about/about-boss-gallery/about-boss-gallery.component';
import { SeedingComponent } from './services/seeding/seeding.component';
import { WeedControlComponent } from './services/weed-control/weed-control.component';
import { YepComponent } from './services/yep/yep.component';
import { ErosinComponent } from './services/erosin/erosin.component';
import { IrrigationComponent } from './services/irrigation/irrigation.component';
import { MonitoringComponent } from './services/monitoring/monitoring.component';
import { GpsEditComponent } from './gps/gps-edit/gps-edit.component';
import { GpsComponent } from './gps/gps.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', redirectTo : '/about/ourStory', pathMatch: 'full'},
    { path: 'about', component: AboutComponent, children: [
        {path: 'ourStory', component: AboutBossComponent},
        {path: 'timeline', component: AboutTimeLineComponent},
        {path: 'gallery', component: AboutBossGalleryComponent}
    ]},
    { path: 'services', component: ServicesComponent, children: [
        {path: 'seeding', component: SeedingComponent},
        {path: 'weedControl', component: WeedControlComponent},
        {path: 'monitoring', component: MonitoringComponent},
        {path: 'yep', component: YepComponent},
        {path: 'irrigation', component: IrrigationComponent},
        {path: 'erosin', component: ErosinComponent}
    ]}, 
    {path: 'clients', component: ClientsComponent},
    {path: 'gpsInfo', component: GpsComponent, children: [
        {path: 'add', component: GpsEditComponent },
        {path: ':id/edit', component: GpsEditComponent }
    ]},
    { path: 'employee', component: EmployeeComponent},
    { path: 'contact', component: ContactComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
