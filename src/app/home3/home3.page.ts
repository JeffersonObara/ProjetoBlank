import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {

  public largura! : number;
  public altura2! : number;
  public resultado2! : string;

  constructor() { }

  public calcularArea() : void{
  this.resultado2 = "A área é de " + (this.largura * this.altura2) + " cm².";
  }

  ngOnInit() {
  }

}