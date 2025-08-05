import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada: boolean = false;

  constructor( private http: HttpClient ) {
    console.log('InfoPagina service initialized');

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: any) => {

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
