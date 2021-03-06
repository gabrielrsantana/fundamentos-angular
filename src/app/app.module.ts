import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentPersonalizadoComponent } from './component-personalizado/component-personalizado.component';
import { ComponentPaiComponent } from './component-pai/component-pai.component';
import { ComponentFilhoComponent } from './component-filho/component-filho.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    SegundoComponentComponent,
    PipeCustomizadoComponent,
    MultiplicaPorPipe,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentPersonalizadoComponent,
    ComponentPaiComponent,
    ComponentFilhoComponent,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
