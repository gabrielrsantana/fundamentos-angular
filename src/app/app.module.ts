import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    SegundoComponentComponent,
    PipeCustomizadoComponent,
    MultiplicaPorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
