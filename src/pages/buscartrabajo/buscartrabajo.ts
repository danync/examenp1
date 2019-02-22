import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobsPage } from '../jobs/jobs';

/**
 * Generated class for the BuscartrabajoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscartrabajo',
  templateUrl: 'buscartrabajo.html',
})
export class BuscartrabajoPage {
  trabajos = [];
  items = [];
  jobsPage = JobsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trabajos = this.navParams.get('trabajos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev){
    console.log(ev.target.value);

    this.items = this.trabajos.filter(trabajo => {
      return trabajo.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    })
  }

  verTrabajo(trabajo){
    this.navCtrl.push(this.jobsPage, {trabajo: trabajo});
  }

}
