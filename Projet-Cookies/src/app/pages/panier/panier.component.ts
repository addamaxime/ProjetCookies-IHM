import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';
import { IPanier } from 'src/app/utils/modeles/ipanier';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import { CookiesService } from 'src/app/utils/services/cookies.service';
import { UsersService } from 'src/app/utils/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  user: any
  listePanier: Array<IPanier> | undefined

  constructor(public cookieServ: CookiesService, public userServ: UsersService, public authServ: AuthentificationService, public panierServ: PanierService) { }

  ngOnInit(): void {
    this.getOneUserWithMail()
  }

  getOneUserWithMail() {
    this.cookieServ.getPanier().subscribe(
      (res: any[]) => {
        this.listePanier = res.filter((a: any) => {
          return a.mail_username === this.authServ.decrypt(localStorage.getItem('loggedUser'))
        })
        console.log(this.listePanier)
      })
  }

  totalPrix() {
    let total = 0
    if (this.listePanier?.length) {
      for (let i = 0; i < this.listePanier?.length; i++) {
        if (this.listePanier[i]) {
          // @ts-ignore: Object is possibly 'null'.
          total += Number(this.listePanier[i]!.price_cookie)
        }
      }
    }
    return total
  }

  supprimerCookie(item: any) {
    this.panierServ.deleteCookieFromPanier(item.id).subscribe((result) => {
      location.reload();
    })
  }

alertClick(){
  Swal.fire(
    'Votre paiement a bien été pris en compte',
    'Merci de votre confiance ! ',
    'success'
  )
}

  }
