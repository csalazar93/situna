import { Component, OnInit } from '@angular/core';

//Animaciones en angular
//import {trigger, state, style, animate, transition} from '@angular/animations';

//Import jquery para usar jquery en angular
import * as $ from 'jquery';

declare function ConfiguracionInicialPlanta();

declare function MoveToSectionPlanta(section: any);

declare function MoveToCategoriePlanta(categoria: any, isChecked: boolean);

declare function MoverAPracticaAmigablePlanta(practica: any);

declare function MoveToOtraPracticaPlanta(opcionSeleccionada: any, isChecked: boolean);

declare function obtenerLocalizacion(ficha:any);

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css'],
  /*animations:[
    trigger('aniFormulario', [
      state('inactive', style({
        transform: 'scale(1)',
        visibility:'collapse'
      })),
      state('active', style({
        transform: 'scale(1)',
        visibility: 'visible'
      })),
      transition('inactive => active', [animate('500ms ease-in')]),
      transition('active => inactive', [animate('500ms ease-out')])
    ])
  ]*/

})
export class PlantaComponent implements OnInit {

  //public state:string = "inactive";
  tipoContacto: number = 0;
  nuevoContacto: boolean = false; //Determinar si se muestra el formulario de registro de telèfonos
  contactosLista: any[] = []; //Lista de los telefonos a registrar
  public contactosModel = {
    id: 0,
    tipo:0,
    contacto:''
  };
  editarContacto:boolean = false;

  constructor() {
  }

  ngOnInit(): void {

    $(document).ready(function () {
      //Colocar la fecha actual de la aplicaciòn de la planta
      ConfiguracionInicialPlanta();

      //Secciones de la ficha de inventario
      $("a.btnSection").click(function () {

        MoveToSectionPlanta('#' + $(this).attr('fragment'));

      });

      //Categorias

      $("input[name='categoriaPlanta']").click(function () {

        MoveToCategoriePlanta($(this).val(), $(this).is(':checked'));

      });

      //Practicas amigables

      $("input[name='cuentaCertificacon']").click(function () {

        MoverAPracticaAmigablePlanta($(this).val());

      });

      //Habilitar el textarea de OTRA de la opcion 4 de la pregunta 24
      $("input[name='practicaAmigable']").click(function () {

        MoveToOtraPracticaPlanta($(this).val(), $(this).is(':checked'));

      });
    });
  }

  ObtenerLocalizacion(){
    obtenerLocalizacion('P');
  }

  MostrarFormContacto(tipoContacto){
    this.nuevoContacto = tipoContacto === this.tipoContacto ? !this.nuevoContacto : this.nuevoContacto;
    this.tipoContacto = tipoContacto;
    this.editarContacto = false;
    //this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  RegistrarContacto(contacto){
    let contactoRegistrar = {
      id: this.contactosLista.length > 0 ? this.contactosLista[this.contactosLista.length-1].id + 1 : this.contactosLista.length + 1,
      tipo: this.tipoContacto,
      contacto: contacto
    };

    this.contactosLista.push(contactoRegistrar);

    console.log(this.contactosLista);
    
    this.contactosModel = {
      id: 0,
      tipo: 0,
      contacto: ''
    };

    this.editarContacto = false;
    //this.tipoContacto = 0;
  }

  ActualizarContacto(id, telefono){

    let contactoEditar = this.contactosLista.find(x => x.id == id);
    contactoEditar.contacto = telefono;

    console.log(this.contactosLista);
    
    this.contactosModel = {
      id: 0,
      tipo: 0,
      contacto: ''
    };

    this.editarContacto = false;
  }

  CancelarRegistroContacto(){
    this.MostrarFormContacto(0);
    this.editarContacto = false;
  }

  EditarRegistroContacto(id, contacto, tipo){
    this.contactosModel.id = id;
    this.contactosModel.contacto = contacto;
    this.tipoContacto = tipo;

    this.editarContacto = true;
  }

  EliminarRegistroContacto(id, contacto, tipo){

    this,this.tipoContacto = tipo;
    
    let contactoEliminarIndex = this.contactosLista.findIndex(x => x.id === id);
    this.contactosLista.splice(contactoEliminarIndex, 1);

    this.editarContacto = false;
  }

  FiltrarListaTipo(tipo){
    return this.contactosLista.filter(
      contacto => contacto.tipo === tipo
    );
  }

}
