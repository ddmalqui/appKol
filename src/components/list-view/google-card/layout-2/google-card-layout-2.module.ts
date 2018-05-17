import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout2 } from './google-card-layout-2';
import { MapsLayout3Module } from '../../../maps/layout-3/maps-layout-3.module';


@NgModule({
    declarations: [
        GoogleCardLayout2,
    ],
    imports: [
        IonicPageModule.forChild(GoogleCardLayout2),
    ],
    exports: [
        GoogleCardLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoogleCardLayout2Module { }
