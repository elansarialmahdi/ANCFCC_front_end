import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page';
import { SignupPageComponent } from './signup-page/signup-page';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: '**', redirectTo: '/login' }
];

