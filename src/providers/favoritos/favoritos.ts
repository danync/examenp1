import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {

  favoritos = [];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }
  remove(producto){
    let index = this.favoritos.findIndex(item =>{
      return item.ad.subject == producto.ad.subject &&
             item.ad.user.name == producto.ad.user.account.name;
    });

    if (index > -1){
      this.favoritos.splice(index, 1);

      const toast = this.toastCtrl.create({
        message: 'Producto eliminado de favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
    
    existe(producto){
    return this.favoritos.some(item => {
      return item.ad.subject == producto.ad.subject &&
             item.ad.user.account.name == producto.ad.user.account.name;
    })
  }
  addFavoritos(producto){
    this.favoritos.push(producto);

    const toast = this.toastCtrl.create({
      message: 'Producto agregado a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos(){
    return this.favoritos;
  }

}
