import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLocalesPage } from './maps-locales';

@NgModule({
  declarations: [
    MapsLocalesPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsLocalesPage),
  ],
})
export class MapsLocalesPageModule {}
