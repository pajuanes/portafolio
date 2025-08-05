import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from './shared/footer/footer';

//Rutas
// import { app_routes } from './app.routes';
// import { RouterModule } from '@angular/router';

import { InfoPaginaService } from './services/info-pagina.service';

//Componentes
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from "./pages/about/about";
import { Item } from './pages/item/item';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Portafolio, About, Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor( public infoPaginaService: InfoPaginaService) {
    console.log('App component initialized');
  }

}
