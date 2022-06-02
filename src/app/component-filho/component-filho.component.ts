import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.css']
})
export class ComponentFilhoComponent {

@Input() sobrenome = "";

@Output() mostraNome = new EventEmitter();

nome ="" ;

}
