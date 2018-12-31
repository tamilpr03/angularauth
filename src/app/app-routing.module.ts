
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { AuthGuard } from './_guards/auth.guard';


export const appRoutes: Routes = [
  { 
    path: 'loginhome', 
    component:LoginhomeComponent
},
  { 
      path: 'login', 
      component: LoginComponent
  },
  { 
      path: 'signup', 
      component: SignupComponent
  },
  {
      path: 'dashboard',
      component: DashboardComponent, canActivate: [AuthGuard] }
];