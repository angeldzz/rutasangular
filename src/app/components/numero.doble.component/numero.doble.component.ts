import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  standalone: false,
  templateUrl: './numero.doble.component.html',
  styleUrl: './numero.doble.component.css',
})
export class NumeroDobleComponent implements OnInit {
  public doble: number;
  public numero!: number;
  constructor(private _activateRoute: ActivatedRoute, private _router: Router){
    this.doble = 0
    
  }
  redirect(num: number): void{
    this._router.navigate(["/numeroDoble/",num])
  }
  goToHome(){
    this._router.navigate(['/']);
  }
  ngOnInit(): void {
    // aqui es donde nos suscribimos al parametro
    this._activateRoute.params.subscribe((parametros: Params) => {
      //Dentro de Params es donde recibimos los parametros por su :name
      //La sintaxis para recuperarlos es params['Parameter Name']
      // en este ejemplo el parametro es opcional
      if (parametros['numero'] !== null) {
          // EL parametro siempre es STRING
          this.numero = parseInt(parametros['numero'])
          this.doble = this.numero * 2
      }
    })
  }
}
