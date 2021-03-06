import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton, NavController } from 'ionic-angular';
import { MapsService } from '../../../../services/maps-service';
import { MapsLocalesPage } from '../../../../pages/maps-locales/maps-locales';
import { BuscarProductoPage } from '../../../../pages/buscar-producto/buscar-producto';

@IonicPage()
@Component({
    selector: 'google-card-layout-2',
    templateUrl: 'google-card.html'
})
export class GoogleCardLayout2 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    slider = {};
    constructor(public navCtrl: NavController) { }

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }

    goToPage(page : string){
         this.navCtrl.push(page);
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }
}
