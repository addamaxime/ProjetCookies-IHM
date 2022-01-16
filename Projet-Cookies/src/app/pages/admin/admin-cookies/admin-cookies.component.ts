import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/utils/services/cookies.service';

@Component({
  selector: 'app-admin-cookies',
  templateUrl: './admin-cookies.component.html',
  styleUrls: ['./admin-cookies.component.css']
})
export class AdminCookiesComponent implements OnInit {

  constructor(public cookieServ:CookiesService) { }

  ngOnInit(): void {
  }

  deleteCookie(item:any){
    console.warn("okey")
    this.cookieServ.listeCookies.splice(item.id,1)
    this.cookieServ.deleteCookie(item.id).subscribe((result) =>{
      console.warn("result",result)
    })
  }

}
