import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLocalesPage } from './maps-locales';
import { MapsLayout2Module } from '../../components/maps/layout-2/maps-layout-2.module';


@NgModule({
  declarations: [
    MapsLocalesPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsLocalesPage),MapsLayout2Module
  ],
})
export class MapsLocalesPageModule {}
