import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login';
import { LoginPageRoutingModule } from './login-routing.module';
import { LocalStorageService, SessionStorageService } from '../../common-service';
import { AuthControllerService} from '../../service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
  ],
  providers: [
    LocalStorageService,
    SessionStorageService,
    AuthControllerService
  ]
})
export class LoginModule { }
