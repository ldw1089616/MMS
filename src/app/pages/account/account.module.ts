import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account';
import { AccountPageRoutingModule } from './account-routing.module';
import {OrderControllerService} from '../../service';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  declarations: [
    AccountPage,
  ],
  providers: [
    OrderControllerService
  ]
})
export class AccountModule { }
