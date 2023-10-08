import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CommonUiModule } from '@food-delivery-app/common-ui';
import { HomeBannerComponent } from './Home/HomeBanner/home-banner.component';
import { HomeComponent } from './Home/home.component';
import { MenuFilterComponent } from './Home/MenuFilter/menu-filter.component';
import { RestaurantGridComponent } from './Home/RestaurantGrid/restaurant-grid.component';
import { RestaurantCardComponent } from './Home/RestaurantGrid/RestaurantCard/restaurant-card.component';
import { AllRestaurantComponent } from './Pages/All-Restaurant/all-restaurant.component';
import { RestaurantFilterComponent } from './Pages/All-Restaurant/Restaurant-Filter/restaurant-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    HomeComponent,
    MenuFilterComponent,
    RestaurantGridComponent,
    RestaurantCardComponent,
    AllRestaurantComponent,
    RestaurantFilterComponent,
  ],
  imports: [
    CommonUiModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
