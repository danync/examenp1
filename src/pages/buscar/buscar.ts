import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamesPage } from '../games/games';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  productos = [];
  items = [];
  gamesPage = GamesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productos = this.navParams.get('productos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev){
    console.log(ev.target.value);

    this.items = this.productos.filter(producto => {
      return producto.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    })
  }

  verProducto(producto){
    this.navCtrl.push(this.gamesPage, {producto: producto});
  }

}
