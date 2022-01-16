import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthentificationService } from './utils/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jacky Cookie';

}