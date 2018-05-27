import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LucesPage } from './luces';

import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';


@NgModule({
  declarations: [
    LucesPage,
  ],
  imports: [
    IonicPageModule.forChild(LucesPage),SearchBarLayout3Module
  ],
})
export class LucesPageModule {}
