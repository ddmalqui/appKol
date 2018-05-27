import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuricularesPage } from './auriculares';

import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';


@NgModule({
  declarations: [
    AuricularesPage,
  ],
  imports: [
    IonicPageModule.forChild(AuricularesPage),SearchBarLayout3Module
  ],
})
export class AuricularesPageModule {}
