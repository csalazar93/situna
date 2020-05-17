import { Component, OnInit } from '@angular/core';

//Import jquery para usar jquery en angular
import * as $ from 'jquery';

declare function ConfiguracionInicialAtractivo();

declare function MoveToSectionAtractivo(section:any);

declare function MoveToCategorieAtractivo(categoria:any);

declare function MoveToTipeAtractivo(tipo:any);

declare function obtenerLocalizacion(ficha:any);

@Component({
  selector: 'app-atractivo',
  templateUrl: './atractivo.component.html',
  styleUrls: ['./atractivo.component.css']
})
export class AtractivoComponent implements OnInit {

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
      //Fecha por defecto
      ConfiguracionInicialAtractivo();

      //Comportamiento de las secciones de la ficha de atractivos
      $("a.btnSection").click(function () {
        MoveToSectionAtractivo('#' + $(this).attr('fragment'));
      });

      //Categorias
      $("input[name$='categoriaAtractivo']").click(function () {
        MoveToCategorieAtractivo($(this).val());
      });

      //Tipos
      $("input[name$='tipoAtractivo']").click(function () {
        MoveToTipeAtractivo($(this).val());
      });
    });
  }

  ObtenerLocalizacion(){
    obtenerLocalizacion('A');
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
