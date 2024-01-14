import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ForgotUsernameComponent } from './component/forgot-username/forgot-username.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: "full"
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: "full"
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch: "full"
  },

  {
    path: 'forgot-username',
    component: ForgotUsernameComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
