import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalizacionPage } from './personalizacion';

@NgModule({
  declarations: [
    PersonalizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalizacionPage),
  ],
})
export class PersonalizacionPageModule {}
