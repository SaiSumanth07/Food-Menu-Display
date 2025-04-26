// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { FoodMenuComponent } from './food-menu/food-menu.component';

export const routes: Routes = [
  { 
    path: '', 
    component: FoodMenuComponent  // This will render in the router-outlet
  },
  // Add other routes as needed
];