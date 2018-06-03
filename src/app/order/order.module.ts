import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderComponent} from './order.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {OrderRouting} from './order.routing';
import {OrdersListComponent} from './components/orders-list/orders-list.component';
import {SharedAppModule} from '../shared/shared-app.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule, OrderRouting, SharedAppModule
  ],
  declarations: [OrderComponent, OrderDataComponent, OrdersListComponent]
})
export class OrderModule {
}


