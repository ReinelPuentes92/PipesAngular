import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes Angular',
            icon: 'pi pi-desktop',
            items:[
                {
                    label: 'Text - Date',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },  
                {
                    label: 'Numbers',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers'
                },  
                {
                    label: 'No Commons',
                    icon: 'pi pi-globe',
                    routerLink: 'no-commons'
                },               
            ]
        },
        {
            label:'Personalize Pipes',
            icon: 'pi pi-cog',
            routerLink: 'order'
        }
    ];
}

}
