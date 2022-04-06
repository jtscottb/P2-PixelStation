import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostComponent } from './post/post.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PalettesComponent } from './palettes/palettes.component';
import { AuthenticationGuard } from './route-guard/authentication.guard';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AdminGuard } from './route-guard/admin.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'post', component: PostComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'palettes', component: PalettesComponent },
  { path: 'tutorials', component: TutorialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*

route guard stuff

 { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },

 { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },

*/
