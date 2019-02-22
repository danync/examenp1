import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  producto = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fav: FavoritosProvider) {
    this.producto = this.navParams.get('producto');
    if(this.producto.ad.hasOwnProperty('images')){
      this.imgs = this.producto.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

  
  favoritos(producto){
    this.fav.addFavoritos(producto);
  }

}
