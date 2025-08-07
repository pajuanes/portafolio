import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, RouterModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  constructor ( private route: ActivatedRoute,
                public productoService: ProductosService ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      const searchTerm = params['termino'];
      console.log('Search term:', searchTerm);

      this.productoService.buscarProducto( params['termino'] );
      // Aquí puedes llamar al servicio de productos para buscar los productos
      // que coincidan con el término de búsqueda.
    });
  }

}
