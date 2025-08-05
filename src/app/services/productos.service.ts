import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos() {
    // Leer el archivo JSON
    this.http.get<Producto[]>('https://fir-portfolio-66f29-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
      });
  }
  
}
