import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.page.html',
  styleUrls: ['./home4.page.scss'],
})
export class Home4Page implements OnInit {

  public resultado3! : string;
  public base2! : number;
  public apotema! : number;

  constructor() { }

  public calcularArea() : void{
    this.resultado3 = "A área é de " + (5 * this.apotema * this.base2) / 2 + " cm².";
  } 

  ngOnInit() {
  }

}
