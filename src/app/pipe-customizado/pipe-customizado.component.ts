import { Component, OnInit } from '@angular/core';
import { MultiplicaPorPipe } from '../multiplica-por.pipe';

@Component({
  selector: 'app-pipe-customizado',
  templateUrl: './pipe-customizado.component.html',
  styleUrls: ['./pipe-customizado.component.css']
})
export class PipeCustomizadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
