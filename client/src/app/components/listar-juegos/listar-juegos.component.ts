import { Component, OnInit, HostBinding } from '@angular/core';

import { JuegosService } from './../../services/juegos.service';

@Component({
  selector: 'app-listar-juegos',
  templateUrl: './listar-juegos.component.html',
  styleUrls: ['./listar-juegos.component.css']
})
export class ListarJuegosComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  juegos: any = [];

  constructor(private juegosService: JuegosService) { }

  ngOnInit() {
    this.listarJuegos();
  }

  listarJuegos() {
    this.juegosService.obtenerJuegos().subscribe((res) => {
      this.juegos = res;
    }, err => console.log(err));
  }

  eliminarJuego(id: string) {
    this.juegosService.eliminarJuego(id).subscribe(res => {
      console.log(res);
      this.listarJuegos();
    }, err => console.log(err));
  }
}
