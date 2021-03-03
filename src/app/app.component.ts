import { Component } from '@angular/core';
import { ProductoService } from '../app/services/producto/producto.service';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public productosSvc: ProductoService, public info_PaginaService: InfoPaginaService){
    
  }
}
