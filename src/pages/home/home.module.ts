import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';
import { GoogleCardLayout2Module } from '../../components/list-view/google-card/layout-2/google-card-layout-2.module';
import { GoogleCardLayout3Module } from '../../components/list-view/google-card/layout-3/google-card-layout-3.module';

import { ExpandableLayout1Module } from '../../components/list-view/expandable/layout-1/expandable-layout-1.module';
import { ExpandableLayout2Module } from '../../components/list-view/expandable/layout-2/expandable-layout-2.module';
import { ExpandableLayout3Module } from '../../components/list-view/expandable/layout-3/expandable-layout-3.module';


@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        GoogleCardLayout1Module, GoogleCardLayout2Module, GoogleCardLayout3Module
        ,ExpandableLayout1Module,ExpandableLayout2Module,ExpandableLayout3Module
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageModule { }
