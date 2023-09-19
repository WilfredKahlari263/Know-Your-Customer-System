import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressFormComponent } from './components/address-form.component';
import { UtilityFormComponent } from './components/utility-form.component';
import { WalletFormComponent } from './components/wallet-form.component';
import { UserFormComponent } from './components/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddressFormComponent,
    UtilityFormComponent,
    WalletFormComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



