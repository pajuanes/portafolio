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
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( ( resolve, reject ) => {

      // Leer el archivo JSON de los indices de productos
      this.http.get<Producto[]>('https://fir-portfolio-66f29-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve(resp);
        }, (error) => {
          console.error('Error loading products:', error);
          reject(error);
        } );

    } );
  }

  getProducto( id: string ) {
    // Leer el archivo JSON de un producto específico
    return this.http.get<ProductoDescripcion[]>(`https://fir-portfolio-66f29-default-rtdb.europe-west1.firebasedatabase.app/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {

    // this.productosFiltrado = []; // Reiniciar el array de productos filtrados
    if ( this.productos.length === 0 ) {
      // Cargar productos
      this.cargarProductos().then( () => {
        // Ejecutar después de cargar los productos
        this.filtrarProductos( termino );
      });
    } else {
      // Aplicar el filtro
      this.filtrarProductos( termino );
    }

    console.log(this.productosFiltrado);

    // this.productosFiltrado = this.productos.filter( (producto: Producto) => {
    //   return true;
    // });

  }

  private filtrarProductos( termino: string ) {

    this.productos.forEach( (producto: Producto) => {

      if ( producto.categoria.indexOf( termino ) >= 0 || 
           producto.titulo.toLowerCase().indexOf( termino.toLowerCase() ) >= 0 ) {
        this.productosFiltrado.push( producto );
      }

    });

  }
  
}
