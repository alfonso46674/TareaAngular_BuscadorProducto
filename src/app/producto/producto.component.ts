import { Component, OnInit } from '@angular/core';
import { Product } from './Product';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  busqueda = '';
  productos: Product[];
  copiaProductos: Product[];
  check: boolean;

  src = 'https://picsum.photos/id/12/100/100'
  
  constructor() { 
    this.productos = [new Product(12,"Smartphone","LG","Quadcore 3GHZ",12018.5,5),
                      new Product(123,"Smartwatch","Sony","3GB Ram", 4999.9,0),
                      new Product(34,"SmartTV","Sony","52 pulgadas, conexion wifi",8999.9,3)],

    this.copiaProductos = this.productos.map(a => Object.assign({},a));
  }

  ngOnInit(): void {
  }

  buscar(){ // filtra los productos mediante la busqueda 
    this.copiaProductos = this.productos.filter(o =>{
        return (o["nombre"].toUpperCase().includes(this.busqueda.toUpperCase()) ||
                o["marca"].toUpperCase().includes(this.busqueda.toUpperCase()) ||
                o["descripcion"].toUpperCase().includes(this.busqueda.toUpperCase()) );
      });
  }

  checkExistencia(val:boolean){ // filtra por existencia
    if(val){
      this.copiaProductos = this.productos.filter( o =>{
        return (o["existencia"] > 0);
      });
    } else{
      this.copiaProductos = this.productos.map(a => Object.assign({},a));
    }
  }

  checkOrdenar(val:boolean){ // filtra de mayor a menor
    if(val){
      this.copiaProductos.sort((a, b) =>{
        let comparacion = 0;
        if (a.precio > b.precio){
          comparacion = -1;
        } else if(a.precio < b.precio){
          comparacion = 1;
        }
        return comparacion;
      });

    } else{
      this.copiaProductos = this.productos.map(a => Object.assign({},a));
    }
  }

  checkMayorA(val:boolean){ // flitra si la existencia es mayor o igual a 3
    if(val){
      this.check = true;
    }else{
      this.check = false;
    }
  }

}
