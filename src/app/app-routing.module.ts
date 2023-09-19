
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './components/address-form.component.js';
import { UtilityFormComponent } from './components/utility-form.component.js';
import { WalletFormComponent } from './components/wallet-form.component.js';
import { FooterComponent } from './components/footer.component.js';
import { HeaderComponent } from './components/header.component.js';
import { UserFormComponent } from './components/user-form.component.js';


const routes: Routes = [
  { path: 'address-form', component: AddressFormComponent},
  { path: 'footer-form', component: FooterComponent},
  { path: 'header-form', component: HeaderComponent},
  { path: 'user-form', component: UserFormComponent},
  { path: 'utility-form', component: UtilityFormComponent},
  { path: 'wallet-form', component: WalletFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

