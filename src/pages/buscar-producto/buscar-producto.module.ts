import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarProductoPage } from './buscar-producto';

import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';

@NgModule({
  declarations: [
    BuscarProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarProductoPage),SearchBarLayout3Module
  ],
})
export class BuscarProductoPageModule {}
