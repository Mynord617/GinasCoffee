import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../../models/productos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando = true;
  productos: Productos[] = [];
  productosFiltrado: Productos[] =[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos() {

    return new Promise<void>( (resolve, reject) => {
      this.http.get('https://portafoliogyna-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Productos[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });

  }

  getProducto(id: string) {
   return this.http.get(`https://portafoliogyna-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if ( this.productos.length === 0) {
      this.cargarProductos().then( ()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos( termino );
    }
 }

  private filtrarProductos(termino: string){

    this.productosFiltrado =[];
    
    termino = termino.toLocaleLowerCase();
    
    this.productos.forEach(prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)) {
        this.productosFiltrado.push(prod);
      }
    })
    
  }
}
