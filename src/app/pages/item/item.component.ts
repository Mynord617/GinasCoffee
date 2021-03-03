import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto/producto.service';
import { productoDescripcion } from '../../models/producto-descripcion/producto-descripcion';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productoDescripcion;
  id: string;
  constructor(private route: ActivatedRoute, public productoSvc: ProductoService) { }

  ngOnInit() {

    this.route.params.subscribe(parametros => {
      this.productoSvc.getProducto(parametros['id'])
        .subscribe((producto: productoDescripcion) => {
          this.id = parametros['id'];
          this.producto = producto;
        })
    })
  }

}
