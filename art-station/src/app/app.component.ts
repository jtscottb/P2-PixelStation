import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pixel-Station';

  login: boolean = false;
  register: boolean = false;
  about: boolean = false;

  showLogin() {
    this.login = true;
    this.register = false;
    this.about = false;
  }
  showRegister() {
    this.login = false;
    this.register = true;
    this.about = false;
  }
  showAbout() {
    this.login = false;
    this.register = false;
    this.about = true;
  }
}
