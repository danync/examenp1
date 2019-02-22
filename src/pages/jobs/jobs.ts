import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  trabajo = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fav: FavoritosProvider) {
    this.trabajo = this.navParams.get('trabajo');
    if(this.trabajo.ad.hasOwnProperty('images')){
      this.imgs = this.trabajo.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
  }

}
