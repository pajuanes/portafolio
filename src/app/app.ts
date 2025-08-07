import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from './shared/footer/footer';

//Servicios
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

//Componentes
// import { Portafolio } from './pages/portafolio/portafolio';
// import { About } from "./pages/about/about";
// import { Item } from './pages/item/item';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor( public infoPaginaService: InfoPaginaService,
               public productosService: ProductosService) {
    console.log('App component initialized');
  }

}
