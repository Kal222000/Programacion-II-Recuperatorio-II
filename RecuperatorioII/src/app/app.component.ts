import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Evento } from './evento/evento';

@Component({
  standalone : true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    general = true;
    crear = false;
    Editar = false;
    Listar = false;
    Eliminar = false;

    Eventos : Evento[] = [];
    Aux : Evento = {
    Nombre : '',
    Descripcion : '',
    Fecha : '',
    Tipo : '',
    Estado : ''
    }

    agregar_evento(nom : string, des : string, fecha : string, tipo : string, est : string) : void {
      if(fecha == ''){
        alert('Llene todos los campos')
        return;
      }
      if(nom == '' || des == '' || tipo == '' || est == ''){
        alert('Llene todos los campos')
        return;
      }

      var aux : Evento = {
      Nombre : nom,
      Descripcion : des,
      Fecha : fecha,
      Tipo : tipo,
      Estado : est
      }

      this.Eventos.push(aux);

      this.ajustar_datos();

      alert('Evento Creado')
    }

    eliminar_evento(nom : string, fecha : string, est : string) : void{
      if(nom == '' || est == '' || fecha == ''){
        alert('Llene los Campos');
        return;
      }
      for(let i = 0; i < this.Eventos.length; i++){
        if(this.Eventos[i].Nombre == nom && this.Eventos[i].Fecha == fecha && this.Eventos[i].Estado == est){
          this.Eventos.splice(i,1);
          alert('Evento Eliminado');
          this.ajustar_datos();
          return;
        }
      }
      alert('Evento no Encontrado');
      this.ajustar_datos();
    }

    mostrar() : void {
      this.general = !this.general;
    }

    mostrarC() : void {
      this.crear = !this.crear;
      this.ajustar_datos();
    }

    mostrarE() : void {
      this.Editar = !this.Editar;
      this.ajustar_datos();
    }

    mostrarL() : void {
      this.Listar = !this.Listar;
      this.ajustar_datos();
    }

    mostrarEl() : void {
      this.Eliminar = !this.Eliminar;
      this.ajustar_datos();
    }

    ajustar_datos() : void {
      this.Aux = {
      Nombre : '',
      Descripcion : '',
      Fecha : '',
      Tipo : '',
      Estado : ''
      }
    }
}
