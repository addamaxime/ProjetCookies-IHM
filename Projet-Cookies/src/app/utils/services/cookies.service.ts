import { Injectable } from '@angular/core';
import { ICookie } from '../modeles/icookie';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IUser } from '../modeles/iuser';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  listeCookies: Array<ICookie> = [];

  constructor(private http: HttpClient) {
    this.getCookies();
  }

  getCookies() {
    return this.http.get<Array<ICookie>>("http://localhost:3000/cookies").subscribe(
      data => {
        this.listeCookies = data
      }
    )
  }

  deleteCookie(id: any) {
    return this.http.delete("http://localhost:3000/cookies/" + id)
  }

  getCurrentCookie(id: any) {
    return this.http.get<ICookie>("http://localhost:3000/cookies/" + id)
  }

  updateCookie(id: any, data: any) {
    return this.http.put("http://localhost:3000/cookies/" + id, data)
  }

  saveCookie(data: any) {
    return this.http.post("http://localhost:3000/cookies", data)
  }

  cookieToPanier(data:any){
    return this.http.post("http://localhost:3000/panier", data)

  }

  /*// Récupérer un cookie dans la liste à partir de son id
  getCookiesByID(id : unknown): ICookie | undefined{
    return this.listeCookies.find(e => e._id ==id)
  } */
} 
