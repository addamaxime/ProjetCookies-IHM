import { Component, OnInit } from '@angular/core';
import { ICookie } from 'src/app/utils/modeles/icookie';
import { IPanier } from 'src/app/utils/modeles/ipanier';
import { IUser } from 'src/app/utils/modeles/iuser';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import { CookiesService } from 'src/app/utils/services/cookies.service';
import { StatutService } from 'src/app/utils/services/statut.service';
import { UsersService } from 'src/app/utils/services/users.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})


export class CookiesComponent implements OnInit {

  page: any = { debut: 0, ecart: 4 };
  position: number = 0;
  filtreCookie: string = '';
  listeCookies: Array<ICookie> = [];
  user: any



  constructor(public cookieServ: CookiesService,
    public statutServ: StatutService,
    public userServ: UsersService,
    public authServ: AuthentificationService) {
  }
  collection = {};


  ngOnInit(): void {
    this.getOneUserWithMail()
  }


  changeRecetteShow(item: any): void {
    item.show = !item.show
  }
  getRecetteShow(item: any) {
    return item.show
  }

  getButtonText(item: any) {
    let res = ""
    if (item.show) {
      res = "Cacher la recette"
    } else {
      res = "Voir la recette"
    }
    return res
  }

  pagination(sens: number) {
    if (sens >= 0) {
      this.page.debut += this.page.ecart;
      this.position += this.page.ecart;
    } else {
      this.page.debut -= this.page.ecart;
      this.position -= this.page.ecart;
    }
  }

  lockButtonBefore() {
    if (this.page.debut <= 0) {
      return true
    } else {
      return false
    }
  }

  lockButtonNext(liste: any) {
    if (this.position >= liste.length - this.page.ecart) {
      return true
    } else {
      return false
    }
  }

  getOneUserWithMail() {
    this.userServ.getUsersAndFindOneWithMail(this.authServ.decrypt(localStorage.getItem('loggedUser'))).subscribe(
      (res: any[]) => {
        this.user = res.find((a: any) => {
          return a.email === this.authServ.decrypt(localStorage.getItem('loggedUser'))
        })
      })
      return this.user?.id
  }
  addCookieToPanier(cookie: ICookie) {
    let IdUserFindedWithEmail = this.getOneUserWithMail()
    
    let panier:IPanier= {
      id_cookie: Number(cookie.id),
      name_cookie:cookie.name,
      price_cookie:cookie.prix,
      photo_cookie:cookie.photo,
      id_username: Number(IdUserFindedWithEmail),
      mail_username:this.authServ.decrypt(localStorage.getItem('loggedUser'))
    }
    this.cookieServ.cookieToPanier(panier).subscribe((result)=>{
    })
  }

  /*getCookiesForOneUser(){
    let IdUserFindedWithEmail = this.getOneUserWithMail()
    this.cookieServ.getPanierForOneUser()
  }*/

}
