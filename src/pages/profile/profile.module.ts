import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

import { RegisterLayout2Module } from '../../components/register/layout-2/register-layout-2.module';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),RegisterLayout2Module
  ],
})
export class ProfilePageModule {}
