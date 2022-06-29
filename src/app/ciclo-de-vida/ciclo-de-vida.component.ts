import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }
 
  horario = new Date();
  timer:any = null!;    //a interrrogacao diz que nao tem conteudo mas na primeira ooportunidade recebe valor
  
// para receber propridade texto
@Input() texto = "";


  ngOnInit(): void {
    console.log("evento OnINit disparou");
    this.timer = setInterval(()=>this.horario = new Date(), 1000);

  }
/**
 * 
 * @param changes qualquewr mudanca no componente inicia esse metodo
 */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("o evento OnChanges disparou com as seguintes mudanças "+changes);
    console.log(changes);
  }
  ngOnDestroy(): void {
   clearInterval(this.timer);
  }
 

}
