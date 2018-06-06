import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalizacionPage } from './personalizacion';

import { GoogleCardLayout3Module } from '../../components/list-view/google-card/layout-3/google-card-layout-3.module';


@NgModule({
  declarations: [
    PersonalizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalizacionPage),GoogleCardLayout3Module
  ],
})
export class PersonalizacionPageModule {}
