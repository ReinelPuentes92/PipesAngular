import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {

  nameLower: string = 'reinel';
  nameUpper: string = 'REINEL';
  nameComple: string = 'rEinEl PUenTes'; 

  date: Date = new Date();

}
