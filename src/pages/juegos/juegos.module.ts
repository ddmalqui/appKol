import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegosPage } from './juegos';

import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';



@NgModule({
  declarations: [
    JuegosPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegosPage),SearchBarLayout3Module
  ],
})
export class JuegosPageModule {}
