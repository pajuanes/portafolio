import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interface/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item implements OnInit {

  producto: ProductoDescripcion[] = [];
  id?: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe( parametros => 
      this.productoService.getProducto( parametros['id'] )
        .subscribe( ( producto: ProductoDescripcion[] | any ) => {
          this.id = parametros['id'];
          this.producto = [producto];
          console.log(producto);
        })
    );
  }

}
