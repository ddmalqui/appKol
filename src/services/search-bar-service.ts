import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'searchBars';

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Simple", "theme": "layout1" },
            { "title": "Field + header", "theme": "layout2" },
            { "title": "Field + header 2", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };


    getDataForLayout1 = (): any => {
        return {
            "toolBarTitle": "Simple",
            "items": [
                {
                    "title": "Friends",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Enemies",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Neutral",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Family",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Guests",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Students",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Friends",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Enemies",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Neutral",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Family",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Guests",
                    "description": "254 people",
                    "icon": "icon-account-check"
                },
                {
                    "title": "Students",
                    "description": "254 people",
                    "icon": "icon-account-check"
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            "toolBarTitle": "Field + header",
            "headerImage": "assets/images/background/30.jpg",
            "searchText": "Search by",
            "items": [
                {
                    "title": "Song",
                    "icon": "icon-music-box"
                },
                {
                    "title": "Album",
                    "icon": "icon-headset"
                },
                {
                    "title": "Artist",
                    "icon": "icon-human-child"
                },
                {
                    "title": "Genre",
                    "icon": "icon-menu"
                },
                {
                    "title": "Song",
                    "icon": "icon-music-box"
                },
                {
                    "title": "Album",
                    "icon": "icon-headset"
                },
                {
                    "title": "Artist",
                    "icon": "icon-human-child"
                },
                {
                    "title": "Genre",
                    "icon": "icon-menu"
                },
                {
                    "title": "Album",
                    "icon": "icon-headset"
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            "headerImage": "assets/images/background/drone.jpeg",
            "items": [
                {
                    "id": 1,
                    "title": "Cable HDMI-HDMI",
                    "description": "1 Metro reforzado",
                    "price": "$200",
                    "icon": "icon-map-marker-radius",
                    "img": "assets/images/productos/cables/Cable-HDMI-1-metro.png"
                },
                {
                    "id": 2,
                    "title": "Cable 3.5-3.5",
                    "description": "Machos - 2M",
                    "price": "$120",
                    "img": "assets/images/productos/cables/cable35-35.png"
                },
                {
                    "id": 3,
                    "title": "Router TPLink",
                    "description": "Antena Doble",
                    "price": "$760",
                    "img": "assets/images/productos/wifi/router.jpg"
                },
                {
                    "id": 4,
                    "title": "Amplificador WIFI",
                    "description": "amplifica senal",
                    "price": "$500",
                    "img": "assets/images/productos/wifi/amplificadorWifi.jpg"
                },
                {
                    "id": 5,
                    "title": "joystick Play 4",
                    "description": "Original",
                    "price": "$400",
                    "img": "assets/images/productos/ps/joystickPS4.jpg"
                },
                {
                    "id": 6,
                    "title": "joystick Play 3",
                    "description": "Replica",
                    "price": "$300",
                    "img": "assets/images/productos/ps/joystickPS4Replica.jpg"
                },
                {
                    "id": 7,
                    "title": "Tranasmisor FM",
                    "description": "con Bluetooth",
                    "price": "$123",
                    "img": "assets/images/productos/transmisorFM.jpg"
                },
                {
                    "id": 8,
                    "title": "Ojo de pez",
                    "description": "3 focos",
                    "price": "$150",
                    "img": "assets/images/productos/ojodePez.jpg"
                }
            ]
        }
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onTextChange': function (text: any) {
                 // that.toastCtrl.presentToast(text);
            },
            'onItemClick': function (item: any) {
                 // that.toastCtrl.presentToast(item.title);
            }
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: {},
            theme: item.theme,
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('searchBars/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
}
