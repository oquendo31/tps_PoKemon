import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './compnents/dashboard/dashboard.component';
import { NormalComponent } from './compnents/normal/normal.component';
import { LuchaComponent } from './compnents/lucha/lucha.component';
import { VoladorComponent } from './compnents/volador/volador.component';
import { VenenoComponent } from './compnents/veneno/veneno.component';
import { FuegoComponent } from './compnents/fuego/fuego.component';
import { AguaComponent } from './compnents/agua/agua.component';
import { ElectricoComponent } from './compnents/electrico/electrico.component';
import { PlantaComponent } from './compnents/planta/planta.component';
import { HieloComponent } from './compnents/hielo/hielo.component';
import { PsiquicoComponent } from './compnents/psiquico/psiquico.component';
import { BichoComponent } from './compnents/bicho/bicho.component';
import { TierraComponent } from './compnents/tierra/tierra.component';
import { RocaComponent } from './compnents/roca/roca.component';
import { FantasmaComponent } from './compnents/fantasma/fantasma.component';
import { DragonComponent } from './compnents/dragon/dragon.component';
import { SiniestroComponent } from './compnents/siniestro/siniestro.component';
import { AceroComponent } from './compnents/acero/acero.component';
import { HadaComponent } from './compnents/hada/hada.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NormalComponent,
    LuchaComponent,
    VoladorComponent,
    VenenoComponent,
    FuegoComponent,
    AguaComponent,
    ElectricoComponent,
    PlantaComponent,
    HieloComponent,
    PsiquicoComponent,
    BichoComponent,
    TierraComponent,
    RocaComponent,
    FantasmaComponent,
    DragonComponent,
    SiniestroComponent,
    AceroComponent,
    HadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
