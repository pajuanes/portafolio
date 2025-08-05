import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {

  constructor( public _infoService: InfoPaginaService ) { }

  ngOnInit() {

  }

}
