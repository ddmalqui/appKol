import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLocalesPage } from './maps-locales';
import { MapsLayout3Module } from '../../components/maps/layout-3/maps-layout-3.module';


@NgModule({
  declarations: [
    MapsLocalesPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsLocalesPage),MapsLayout3Module,
  ],
})
export class MapsLocalesPageModule {}
