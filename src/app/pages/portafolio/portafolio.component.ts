import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productosSvc: ProductoService) { }

  ngOnInit(): void {
  }

}
