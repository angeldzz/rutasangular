import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  standalone: false,
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css',
})
export class TablamultiplicarroutingComponent implements OnInit{
  public numero!: number;  
  public resultados: Array<number>; 
constructor(private _activateRoute: ActivatedRoute){
  this.resultados = [];
}
ngOnInit(): void {
  this._activateRoute.params.subscribe((parametros: Params) => {
    if (parametros['num'] !== undefined) {
        this.numero = parametros['num'];
        for (let i = 1; i < 10; i++) {
            this.resultados.push(this.numero * i)
        }
    }
  })
}
}
