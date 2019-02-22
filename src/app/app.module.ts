import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JuegosPage } from '../pages/juegos/juegos';
import { CompuPage } from '../pages/compu/compu';
import { TabsPage } from '../pages/tabs/tabs';
import { BuscarPage } from '../pages/buscar/buscar';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { GamesPage } from '../pages/games/games';
import { BuscartrabajoPage } from '../pages/buscartrabajo/buscartrabajo';
import { BuscarmascotaPage } from '../pages/buscarmascota/buscarmascota';
import { JobsPage } from '../pages/jobs/jobs';
import { PetsPage } from '../pages/pets/pets';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    JuegosPage,
    CompuPage,
    BuscarPage,
    FavoritosPage,
    GamesPage,
    BuscartrabajoPage,
    BuscarmascotaPage,
    JobsPage,
    PetsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    JuegosPage,
    CompuPage,
    BuscarPage,
    FavoritosPage,
    GamesPage,
    BuscartrabajoPage,
    BuscarmascotaPage,
    JobsPage,
    PetsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
