import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostulationPageComponent } from './pages/postulation-page/postulation-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LoginGuard } from './guards/login.guard';
import { CheckLoginGuard } from './guards/check-login.guard';
import { PasswordrecoverPageComponent } from './pages/passwordrecover-page/passwordrecover-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'profile',
    canActivate: [LoginGuard],
    component: ProfilePageComponent
  },
  {
    path: 'password-recover',
    component: PasswordrecoverPageComponent
  },
  {
    path: 'postulacion',
    canActivate: [LoginGuard],
    component: PostulationPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
