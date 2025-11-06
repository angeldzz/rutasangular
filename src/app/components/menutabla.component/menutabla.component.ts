import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  standalone: false,
  templateUrl: './menutabla.component.html',
  styleUrl: './menutabla.component.css',
})
export class MenutablaComponent implements OnInit{
  public numAleatorios: Array<number>
  constructor(){
    this.numAleatorios = []
  }
  ngOnInit(): void {
      for (let i = 0; i < 10; i++) {
        this.numAleatorios.push(Math.floor(Math.random() * 100) + 1)
      }
  }
}
