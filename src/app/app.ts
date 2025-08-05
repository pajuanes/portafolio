import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from './shared/footer/footer';

//Rutas
import { app_routes } from './app.routes';
import { RouterModule } from '@angular/router';

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
  protected title = 'portafolio';
}
