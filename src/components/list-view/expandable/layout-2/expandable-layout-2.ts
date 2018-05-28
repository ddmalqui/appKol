import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton, NavController, Slides } from 'ionic-angular';
import { MapsLocalesPage } from '../../../../pages/maps-locales/maps-locales';
import { BuscarProductoPage } from '../../../../pages/buscar-producto/buscar-producto';
import {IphonePage} from '../../../../pages/iphone/iphone';
import {AuricularesPage} from '../../../../pages/auriculares/auriculares';
import {ParlantesPage} from '../../../../pages/parlantes/parlantes';
import {LucesPage} from '../../../../pages/luces/luces';



@IonicPage()
@Component({
  selector: 'expandable-layout-2',
  templateUrl: 'expandable.html'
})
export class ExpandableLayout2 {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  /*Slider*/
  @ViewChild('wizardSlider') slider: Slides;
  sliderOptions = { pager: true };
  path:boolean = false;
  prev:boolean = true;
  next:boolean = true;
  finish:boolean = true


  constructor(public navCtrl: NavController) { 

  this.prev = false;
        this.next = true;
        this.finish = false;
      }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  goToPage(page : string){
     this.navCtrl.push(page);
  }


  ngAfterViewInit() {
    this.content.ionScroll.subscribe((d) => {
      this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
    });
  }

  changeSlide(index: number): void {
        if (index > 0) {
            this.slider.slideNext(300);
        } else {
            this.slider.slidePrev(300);
        }
    }

    slideHasChanged(index: number): void {
        try {
            this.prev = !this.slider.isBeginning();
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        } catch (e) { }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        this.data = changes['data'].currentValue;
      }

}
