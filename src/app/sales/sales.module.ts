import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

import { FlyPipe } from './pipes/fly.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    FlyPipe,
    UppercasePipe,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
