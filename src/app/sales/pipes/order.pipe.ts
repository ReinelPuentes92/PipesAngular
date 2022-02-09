import { Pipe, PipeTransform } from '@angular/core';

import { Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], order: string = 'no order'): Heroe[] {

    switch(order){

      case 'name':
        return heroes = heroes.sort((a,b) => (a.name > b.name) ? 1 : -1);
      
      case 'fly':
        return heroes = heroes.sort((a,b) => (a.fly > b.fly) ? -1 : 1);

      case 'color':
        return heroes = heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);

      default:
        return heroes;
    }
    
  }

}
