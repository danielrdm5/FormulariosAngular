import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Angel D.',
    apellido: 'Garcia',
    email: 'daniel_rdm@hotmail.com',
    pais: 'MEX',
    genero: 'M'
  }

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;
        this.paises.unshift({
          nombre: '[Seleccione País]',
          codigo: ''
        });
        
      });
  }

  guardar( forma: NgForm) {
    if( forma.invalid ) {
      Object.values ( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
  }
}
