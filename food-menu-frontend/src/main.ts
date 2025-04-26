import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FoodMenuComponent } from './app/food-menu/food-menu.component';
import { LandingPageComponent } from './app/landing-page/landing-page.component';

const routes = [
  { path: '', component: LandingPageComponent },  // Landing page (no navbar)
  { path: 'menu', component: FoodMenuComponent }, // Food menu (with navbar)
  { path: '**', redirectTo: '' }                  // Redirect to landing page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));