import { Component, OnInit, HostBinding } from '@angular/core';

import { Juego } from './../../models/Juego';
import { JuegosService } from './../../services/juegos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-juegos',
  templateUrl: './form-juegos.component.html',
  styleUrls: ['./form-juegos.component.css']
})
export class FormJuegosComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  juego: any = {
    idJuego: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    creadoEn: new Date()
  }

  editar: boolean = false;

  constructor(private juegosService: JuegosService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;

    if (params.id) {
      this.juegosService.obtenerJuego(params.id).subscribe((res) => {
        console.log(res);
        this.juego = res;
        this.editar = true;
      }, err => console.log(err));
    }
  }

  actualizarJuego() {
    delete this.juego.creadoEn;
    this.juegosService.actualizarJuego(this.juego.idJuego, this.juego).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/juegos']);
    }, err => console.log(err));
  }

  guardarJuego() {
    delete this.juego.idJuego;
    delete this.juego.creadoEn;
    this.juegosService.guardarJuego(this.juego).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/juegos']);
    }, err => console.log(err));
  }
}
