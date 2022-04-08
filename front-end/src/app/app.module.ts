import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { NavHolderComponent } from './nav-holder/nav-holder.component';
import { FeaturedArtistBarComponent } from './featured-artist-bar/featured-artist-bar.component';
import { RandomArtBarComponent } from './random-art-bar/random-art-bar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { PostComponent } from './post/post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UserProfileGalleryComponent } from './user-profile-gallery/user-profile-gallery.component';
import { UserProfilePostComponent } from './user-profile-post/user-profile-post.component';
import { UserService } from './services/user.service';
import { AuthenticationGuard } from './route-guard/authentication.guard';
import { AdminGuard } from './route-guard/admin.guard';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { PalettesComponent } from './palettes/palettes.component';
import { PaletteDirectiveDirective } from './palette-directive.directive';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminToDoListComponent } from './admin-to-do-list/admin-to-do-list.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { AdminUserServiceComponent } from './admin-user-service/admin-user-service.component';
import { AdminNavHolderComponent } from './admin-nav-holder/admin-nav-holder.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    WelcomeComponent,
    AdminDashboardComponent,
    ProfilePictureComponent,
    NavHolderComponent,
    FeaturedArtistBarComponent,
    RandomArtBarComponent,
    DashboardHeaderComponent,
    PostComponent,

    UserProfileComponent,
    UserProfileGalleryComponent,
    UserProfilePostComponent,
    ThumbnailComponent,
    PalettesComponent,
    PaletteDirectiveDirective,
    TutorialsComponent,
    PostFormComponent,
    AboutUsComponent,
    AdminToDoListComponent,
    AdminControlComponent,
    AdminUserServiceComponent,
    AdminNavHolderComponent,
    CommentFormComponent,
    ViewCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [UserService, AuthenticationGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
