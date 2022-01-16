import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'


@Injectable({
  providedIn: 'root'
})
export class StatutService {
  secretKey:string="jackycookie";
  connexion:boolean =  this.convertStringToBool(this.decrypt(localStorage?.getItem('isLoggedIn')))
  isAdmin:boolean = this.decrypt(localStorage?.getItem('loggedUser'))==="admin@admin.fr"

  constructor() { }

  convertStringToBool(value:any):boolean{
    if (value?.toLowerCase()==="true"){
      return true
    }else{
      return false
    }
  }

  encrypt(value:any):any{
    if (value===null) return null
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  decrypt(value:any):any{
    if (value == null) return null
    let bytes = CryptoJS.AES.decrypt(value, this.secretKey)
    return bytes.toString(CryptoJS.enc.Utf8)
  }
}
