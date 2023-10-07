import { Route } from '@angular/router';
import { HomeComponent } from './Home/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    //   {
    //     path: 'products',
    //     loadComponent: () =>
    //       import('@angular-monorepo/products').then((m) => m.ProductListComponent),
    //   },
];
