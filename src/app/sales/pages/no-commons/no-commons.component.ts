import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  //i18nselect
  name: string = 'Oscar';
  gender: string = 'Masculino';
  invitationMap ={
    'Masculino': 'Invitarlo',
    'Femenino': 'Invitarla',
  }

  changePerson(){
    this.name = 'Maria Fernanda';
    this.gender = 'Femenino'
  }

  //i18nplural
  client: string[] = ['Maria','Jose','Juan','Fernanda','Laura','Catalina','Rodrigo'];
  clientMap ={
    '=0': 'No tenemos ningun cliente esperando',
    '=1': '1 cliente esperando',
    '=2': '2 clientes esperando',
    '=3': '3 clientes esperando',
    'other': '# clientes esperando'
  }

  deletePerson(){
    this.client.pop();
  }

  //Keyvalue Pipe
  person = {
    name: 'Reinel',
    age: '29',
    email: 'reinel.puentes92@gmail.com'
  }

  //Json Pipe
  heroes = [
    {
      name: 'Superman',
      flying: true
    },
    {
      name: 'Ironman',
      flying: true
    },
    {
      name: 'WonderWomen',
      flying: true
    }
  ];

  //Async Pipe
  myObservable = interval(5000);

  promess = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve('Have data promise');
    }, 3500);
  });

}
