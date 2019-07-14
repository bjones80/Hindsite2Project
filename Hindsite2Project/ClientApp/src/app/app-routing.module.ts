import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { YepComponent } from './yep/yep.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { AboutBossComponent } from './about/about-boss/about-boss.component';
import { AboutHindsiteComponent } from './about/about-hindsite/about-hindsite.component';
import { AboutTimeLineComponent } from './about/about-time-line/about-time-line.component';
import { AboutBossGalleryComponent } from './about/about-boss-gallery/about-boss-gallery.component';
import { ReclamationComponent } from './services/reclamation/reclamation.component';
import { WeedControlComponent } from './services/weed-control/weed-control.component';
import { MonitoringComponent } from './services/monitoring/monitoring.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', redirectTo : '/about/hindsite', pathMatch: 'full'},
    { path: 'about', component: AboutComponent, children: [
        {path: 'ourStory', component: AboutBossComponent},
        {path: 'hindsite', component: AboutHindsiteComponent},
        {path: 'timeline', component: AboutTimeLineComponent},
        {path: 'gallery', component: AboutBossGalleryComponent}
    ]},
    { path: 'services', component: ServicesComponent, children: [
        {path: 'reclamation', component: ReclamationComponent},
        {path: 'weedControl', component: WeedControlComponent},
        {path: 'monitoring', component: MonitoringComponent}
    ]}, 
    { path: 'clients', component: ClientsComponent},
    { path: 'yep', component: YepComponent},
    { path: 'contact', component: ContactComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}