import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';
import { ProductoDescripcion } from '../interface/producto-descripcion.interface';

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
    // Leer el archivo JSON de los indices de productos
    this.http.get<Producto[]>('https://fir-portfolio-66f29-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
      });
  }

  public getProducto( id: string ) {
    // Leer el archivo JSON de un producto específico
    return this.http.get<ProductoDescripcion[]>(`https://fir-portfolio-66f29-default-rtdb.europe-west1.firebasedatabase.app/productos/${ id }.json`);
  }
  
}
