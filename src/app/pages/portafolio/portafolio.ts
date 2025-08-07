import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio implements OnInit{

  constructor( public productosService: ProductosService) {}

  ngOnInit() {
    
  }
  
}
