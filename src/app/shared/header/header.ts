import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  constructor( public _servicio: InfoPaginaService,
               private router: Router ) { }

  ngOnInit() {

  }

  buscarProducto( termino: string ) {

    // console.log(termino);

    if ( termino.length < 1 ) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
