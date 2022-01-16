import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookiesService } from 'src/app/utils/services/cookies.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-cookies-edit',
  templateUrl: './admin-cookies-edit.component.html',
  styleUrls: ['./admin-cookies-edit.component.css']
})
export class AdminCookiesEditComponent implements OnInit {
  alert:boolean=false
  editCookie = new FormGroup({
    name: new FormControl(null,[
      Validators.required,
      Validators.minLength(5)
    ]),
    recette: new FormControl(null,[
      Validators.required,
      Validators.minLength(5)
    ]),
    prix: new FormControl(null,[
      Validators.min(0),
      Validators.required
    ]),
    photo: new FormControl(null)
  })

  constructor(private router:ActivatedRoute, private cookieServ:CookiesService) { }

  ngOnInit(): void {
    this.cookieServ.getCurrentCookie(this.router.snapshot.params['id']).
    subscribe((result)=>{
      this.editCookie = new FormGroup({
        name: new FormControl(result['name'],[
          Validators.required,
          Validators.minLength(5)
        ]),
        recette: new FormControl(result['recette'],[
          Validators.required,
          Validators.minLength(5)
        ]),
        prix: new FormControl(result['prix'],[
          Validators.required
        ]),
        photo : new FormControl(result['photo'])
      })
    })
  }

  launchUpdate(){
    this.cookieServ.updateCookie(this.router.snapshot.params['id'],this.editCookie.value)
    .subscribe((result)=>{
    })
    Swal.fire(
      'Cookie modifié',
      'Le cookie a bien été modifié.',
      'success'
    )
  }
}
