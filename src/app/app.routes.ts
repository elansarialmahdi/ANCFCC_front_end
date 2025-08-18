import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page';
import { SignupPageComponent } from './signup-page/signup-page';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { PersonalInfo } from './components/personal-info/personal-info';
import { TitreFoncierComponent } from './components/titre-foncier/titre-foncier';




export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'user-dashboard', component: UserDashboard },
  { path: 'info-per', component: PersonalInfo },
  { path: 'titre-foncier', component: TitreFoncierComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  
  { path: '**', redirectTo: '/login' }
];