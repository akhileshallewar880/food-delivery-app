import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { CartBtnComponent } from './cart-btn/cart-btn.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CartBtnComponent,
  ],
  exports: [HeaderComponent, LogoComponent, FooterComponent, CartBtnComponent],
})
export class CommonUiModule {}
