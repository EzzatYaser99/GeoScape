import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";
import {ProjectsComponent} from "./Pages/projects/projects.component";
import {ServicesComponent} from "./Pages/services/services.component";
import {PartnersComponent} from "./Pages/partners/partners.component";
import {AboutComponent} from "./Pages/about/about.component";
import {ContactsComponent} from "./Pages/contacts/contacts.component";
import {ServiceDetailsComponent} from "./Component/service-details/service-details.component";

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./Pages/main/main.component').then((m) => m.MainComponent),
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'services/:id', component: ServiceDetailsComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
  { path: '',  pathMatch: 'full', redirectTo: 'main/home' },
  { path: '**', redirectTo: 'main/home' },

];
