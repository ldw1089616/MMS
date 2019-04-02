import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService, SessionStorageService } from '../../common-service';
import { AuthControllerService} from '../../service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    LocalStorageService,
    SessionStorageService,
    AuthControllerService
  ]
})
export class HomeModule { }
