import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosPage } from '../favoritos/favoritos';
import { GamesPage } from '../games/games';

/**
 * Generated class for the JuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
})
export class JuegosPage {

  productos = [];
  buscarPage = BuscarPage;
  favPage = FavoritosPage;
  gamesPage = GamesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data => {
    //  console.log(JSON.stringify(data));
      if(data.hasOwnProperty('counter_map')){
        console.log(data.counter_map.all);
      }
      if(data.hasOwnProperty('list_ads')){
        this.productos = data.list_ads;
      }
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }

  
  buscar(){
    this.navCtrl.push(this.buscarPage, {productos: this.productos});
  }

    
  favs(){
    this.navCtrl.push(this.favPage, {productos: this.productos});
  }

  verProducto(producto){
    this.navCtrl.push(this.gamesPage, {producto: producto});
  }

}