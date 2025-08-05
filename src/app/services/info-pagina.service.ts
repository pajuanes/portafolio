import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor( private http: HttpClient ) {
    console.log('InfoPagina service initialized');

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log( resp );

      });
  }

  getInfo() {
    // Logic to fetch or return information
    return {
      title: 'My Portfolio',
      description: 'This is a portfolio page showcasing my work.'
    };
  }
  
}
