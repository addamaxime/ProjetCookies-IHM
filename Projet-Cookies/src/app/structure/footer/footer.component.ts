import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  getInfos() {
    console.log("test")
    Swal.fire({
      title : 'Inscription validée',
      icon: 'success',
      timer: 2000
    }
    )
    
  }

  mentions(){
    window.location.href = ("https://lafabrique-cookies.fr/fr/content/2-mentions-legales")
  }

}
