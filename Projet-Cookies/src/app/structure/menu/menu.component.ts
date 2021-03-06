import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import { StatutService } from 'src/app/utils/services/statut.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  constructor(
    public statutServ: StatutService,
    public authServ: AuthentificationService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  changePageAndReload() {
    this.router.navigate(['/cookies']).then(() => {
      window.location.reload();
    });
  }

  goHomePage() {
    this.router.navigate([''])
  }
}
