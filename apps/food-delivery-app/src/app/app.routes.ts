import { Route } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AllRestaurantComponent } from './Pages/All-Restaurant/all-restaurant.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: AllRestaurantComponent,
        pathMatch: 'full',
      },
    //   {
    //     path: 'products',
    //     loadComponent: () =>
    //       import('@angular-monorepo/products').then((m) => m.ProductListComponent),
    //   },
];
