import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParlantesPage } from './parlantes';



import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';

@NgModule({
  declarations: [
    ParlantesPage,
  ],
  imports: [
    IonicPageModule.forChild(ParlantesPage),SearchBarLayout3Module
  ],
})
export class ParlantesPageModule {}
