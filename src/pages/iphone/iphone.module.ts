import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IphonePage } from './iphone';


import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';

@NgModule({
  declarations: [
    IphonePage,
  ],
  imports: [
    IonicPageModule.forChild(IphonePage),SearchBarLayout3Module
  ],
})
export class IphonePageModule {}
