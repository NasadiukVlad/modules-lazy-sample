import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';
import {UserComponent} from './user.component';
import {UserRouting} from './user.routing';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  imports: [
    CommonModule, UserRouting, SharedAppModule
  ],
  declarations: [UserComponent, UserDetailsComponent, UserEditInfoComponent, UserOrdersComponent]
})
export class UserModule { }


