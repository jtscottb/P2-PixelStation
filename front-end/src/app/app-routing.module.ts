import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostComponent } from './post/post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PalettesComponent } from './palettes/palettes.component';
import { AuthenticationGuard } from './route-guard/authentication.guard';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AdminGuard } from './route-guard/admin.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
<<<<<<< HEAD:art-station/src/app/app-routing.module.ts
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminDashboardComponent },
=======
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },
>>>>>>> 43b71cbbfbdf25e7831d0c5c72e98491a07da8cb:front-end/src/app/app-routing.module.ts
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
