import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import { StatutService } from 'src/app/utils/services/statut.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public statutServ : StatutService,
    public authServ: AuthentificationService,
  ) { }

  ngOnInit(): void {
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  

}
