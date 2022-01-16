import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CookiesService } from 'src/app/utils/services/cookies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cookies-add',
  templateUrl: './admin-cookies-add.component.html',
  styleUrls: ['./admin-cookies-add.component.css']
})
export class AdminCookiesAddComponent implements OnInit {

  alert:boolean=false
  addCookie = new FormGroup({
    name: new FormControl(null,[
      Validators.required,
      Validators.minLength(5)
    ]),
    recette: new FormControl(null,[
      Validators.required,
      Validators.minLength(5)
    ]),
    prix: new FormControl(null,[
      Validators.required,
      Validators.min(0)
    ]),
    photo: new FormControl(null,[
      Validators.required,
    ])
  })
  constructor(private cookieServ:CookiesService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addNewCookie(){
    if (this.addCookie.invalid){
      return
    }
    this.cookieServ.saveCookie(this.addCookie.value).subscribe((result)=>{
    })
    Swal.fire(
      'Cookie ajouté',
      'Le cookie a bien été ajouté à la liste de cookies disponibles.',
      'success'
    ).then((result)=> {
      this.router.navigate(['admin-cookies']);

    })
    
  }
}
