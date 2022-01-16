import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../modeles/iuser';
import { FormGroup } from '@angular/forms';
import { StatutService } from './statut.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import * as CryptoJS from 'crypto-js'


export interface LoginForm {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  secretKey:string="jackycookie";

  public loggedUser: string | undefined;
  public isloggedIn: boolean = false;

  constructor(private http: HttpClient,
    private statutServ: StatutService,
    private router: Router) { }

  login(loginForm: FormGroup) {
    this.http.get<any>("http://localhost:3000/users")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === loginForm.value.email && this.decrypt(a.password).toString() === loginForm.value.password
        });
        if (user) {

          Swal.fire(
            'Connexion réussie!',
            'Nous avons réussi à vous identifier !',
            'success'
          )
          this.statutServ.connexion = true
          loginForm.reset();
          this.router.navigate(['cookies'])
          localStorage.setItem('loggedUser', this.encrypt(user.email));
          localStorage.setItem('isLoggedIn', this.encrypt(String(this.statutServ.connexion))) 

        } else {
          alert("Données incorrectes !")
        }
      }, err => {
        alert("Oups, il y a eu un problème.")
      })
  }

  register(user: IUser) {
    user.password = this.encrypt(user.password)
    user.passwordConfirm = user.password
    return this.http.post<IUser>("http://localhost:3000/users", user)
  }

  logOut() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.statutServ.connexion = false
    this.statutServ.isAdmin = false
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn', this.encrypt(String(this.isloggedIn)));
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
  }

  loginAdmin(loginForm: FormGroup) {
    this.http.get<any>("http://localhost:3000/admin")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === loginForm.value.email && this.decrypt(a.password).toString()=== loginForm.value.password
        });
        if (user) {

          Swal.fire(
            'Connexion réussie!',
            'Nous avons réussi à vous identifier !',
            'success'
          )
          this.statutServ.connexion = true
          loginForm.reset();
          this.router.navigate(['admin-cookies'])
          localStorage.setItem('loggedUser', this.encrypt(user.email));
          localStorage.setItem('isLoggedIn', this.encrypt(String(this.statutServ.connexion)))
          console.log(this.statutServ.isAdmin)
          this.statutServ.isAdmin = true
          console.log(this.statutServ.isAdmin)

        } else {
          alert("Données incorrectes !")
        }
      }, err => {
        alert("Oups, il y a eu un problème.")
      })
  }

  encrypt(value:any):string{
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  decrypt(value:any):string{
    let bytes = CryptoJS.AES.decrypt(value, this.secretKey)
    return bytes.toString(CryptoJS.enc.Utf8)
  }


  





}
