import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pixel-Station';

  welcome: boolean = true;
  dashboard: boolean = false;

  isLoggedIn(status: boolean) {
    this.welcome = !status;
    this.dashboard = status;
  }
}
