import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-pai',
  templateUrl: './component-pai.component.html',
  styleUrls: ['./component-pai.component.css']
})
export class ComponentPaiComponent{
sobrenome ="da silva";

mostraNome(nomeCompleto:any){
  alert(`o nome completo é:${nomeCompleto}`);
}

}
