import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {

  
celulares: Celular[]=[
{ id:1, nome:"celular XL", descricao:"celular grande",esgotado:false},
{ id:2, nome:"celular small", descricao:"celular pequeno",esgotado:true},
{ id:3, nome:"celular water proof", descricao:"celular a prova dahua",esgotado:true}

];
  

}
