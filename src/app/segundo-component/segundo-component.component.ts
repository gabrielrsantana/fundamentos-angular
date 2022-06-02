import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {

  //constructor() { }

  //ngOnInit(): void {
 // }
nome = "joao";
dataNascimento="1995-01-01";
urlImagem="/assets/imagem.jpg";

mostrarDataNascimento(){
  alert(`a data de nascimento é:${this.dataNascimento}`);
}



}

