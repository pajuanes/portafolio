import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('InfoPagina service initialized');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina)  => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {

    this.http.get<any[]>('https://fir-portfolio-66f29-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
        // console.log(resp);
      });
  }
  
}

