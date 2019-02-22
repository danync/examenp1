import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JobsPage } from '../jobs/jobs';
import { BuscartrabajoPage } from '../buscartrabajo/buscartrabajo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trabajos = [];
  jobsPage = JobsPage;
  searchPage = BuscartrabajoPage;


  constructor(public navCtrl: NavController,
              public http: HttpClient) {
  this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
  .subscribe(data => {
  // console.log(JSON.stringify(data));
    if(data.hasOwnProperty('counter_map')){
       console.log(data.counter_map.all);
    }
    if(data.hasOwnProperty('list_ads')){
       this.trabajos = data.list_ads;
    }
  },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  
  
  buscar(){
    this.navCtrl.push(this.searchPage, {trabajos: this.trabajos});
  }

    
  favs(){
    this.navCtrl.push(this.favPage, {trabajos: this.trabajos});
  }

  verTrabajo(trabajo){
    this.navCtrl.push(this.trabajosPage, {trabajo: trabajo});
  }


}

