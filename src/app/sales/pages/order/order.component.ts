import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  format: boolean = false;
  orderFormat: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Aquaman',
      fly: true,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green
    } 
];

  changeFormat(){
    this.format = !this.format;
  }

  orderName(value: string){
    this.orderFormat = value;
    console.log(value); 
  }

}
