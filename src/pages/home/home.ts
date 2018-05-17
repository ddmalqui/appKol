import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { IService } from '../../services/IService';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService,ListViewGoogleCardsService]

})
export class HomePage {

  page: any;
  service: IService;
  data: any = {};
  params: any = {};

  constructor(public navCtrl: NavController, public serviceHome: HomeService,
  	public googlecardService : ListViewGoogleCardsService, navParams: NavParams) { 
       
      this.data = googlecardService.getDataForLayout2();
      this.page =  {
                      "title": "Styled cards 2",
                      "theme": "layout2"
                    }
       this.params = googlecardService.prepareParams(this.page); 
       this.params.data = googlecardService.load(this.page);
       
        //this.params = this.service.prepareParams(this.page, navCtrl);
          //this.params.data = googlecardService.load(this.page);
    	//console.log(this.data);

}

}