import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  public base! : number;
  public altura! : number;
  public resultado! : string;

  constructor() { }

  public calcularArea() : void{
    this.resultado = "A área é de " + (this.base * this.altura) / 2 + " 2cm².";
  }

  ngOnInit() {
  }

}
