import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/servicios/admin.service';
import { PlantaService } from 'src/app/servicios/planta.service';

import { AdminProvincia } from 'src/app/modelos/AdminProvincia';
import { AdminCanton } from 'src/app/modelos/AdminCanton';
import { AdminDistrito } from 'src/app/modelos/AdminDistrito';
import { PlantaServicio } from 'src/app/modelos/PlantaServicio';

//Animaciones en angular
//import {trigger, state, style, animate, transition} from '@angular/animations';

//Import jquery para usar jquery en angular
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { FichaPlanta } from 'src/app/modelos/FichaPlanta';


declare function ConfiguracionInicialPlanta();

declare function MoveToSectionPlanta(section: any);

declare function MoveToCategoriePlanta(categoria: any, isChecked: boolean);

declare function MoverAPracticaAmigablePlanta(practica: any);

declare function MoveToOtraPracticaPlanta(opcionSeleccionada: any, isChecked: boolean);

declare function obtenerLocalizacion(ficha:any);

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']

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

  /*Obtener datos de la API*/
  provinciasList: AdminProvincia[];
  /*Provincia seleccionada*/
  provinciaSeleccionada: number = 1;/*Provincia nùmero 1*/

  /*Obtener datos de la API*/
  cantonesList: AdminCanton[];
  /*Provincia seleccionada*/
  cantonSeleccionado: number = 1;/*Provincia nùmero 1*/

  /*Obtener datos de la API*/
  distritosList: AdminDistrito[];
  /*Provincia seleccionada*/
  distritoSeleccionado: number = 1;/*Provincia nùmero 1*/

  /*Listado de servicios que tiene la planta para elegir*/
  serviciosPlantaList: PlantaServicio[];

  /*Declarar acceso al service en el constructor*/
  constructor(private adminservice: AdminService, private plantaservice: PlantaService) {
  }

  ngOnInit(): void {

    /**-------------------JQUERY PARA UI */
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

    /**---------------------CARGAR LAS PROVINCIAS */
    /*Obtener la data de provincias*/
    this.CargarProvincias();

    /*Obtener la lista de servicios*/
    this.CargarServiciosPlanta();
  }

  /*Cargar los servicios que puede tener una planta desde la REST API*/
  CargarServiciosPlanta(){
    this.plantaservice.getPlantaServiciosList().subscribe(
      data => {
        /*AQUI ES DONDE LLAMO PARA COLOCAR LOS SERVICIOS QUE TIENE LA PLANTA EN ESPECIFICO
        data[0].seleccionado = true;*/
        this.serviciosPlantaList = data;
        console.log(this.serviciosPlantaList);
      },
      error => {
        console.log(error);
      }
    );
  }

  /*Asi se llama al mètodo del servicio*/
  CargarProvincias(){
    this.adminservice.getProvinciasList().subscribe(
      data =>{
        this.provinciasList = data;

        this.CargarCantones();

        this.CargarDistritos();
      },
      error =>{
        console.log(error);
      }
    );
  }

  /*Llamar al servicio de cargar cantones*/
  CargarCantones(){
    this.adminservice.getCantonesProvinciaList(this.provinciaSeleccionada).subscribe(
      data =>{
        this.cantonesList = data;
        this.cantonSeleccionado = this.cantonesList[0].id_canton;

        this.CargarDistritos();
      },
      error =>{
        console.log(error);
      }
    );  
  }

  /*Llamar al servicio de cargar distritos*/
  CargarDistritos(){
    this.adminservice.getDistritosCantonList(this.cantonSeleccionado).subscribe(
      data =>{
        this.distritosList = data;
        this.distritoSeleccionado = this.distritosList[0].id_distrito;
      },
      error =>{
        console.log(error);
      }
    );    
  }

  /*Cargar los cantones de la provincia seleccionada*/
  CargarCantonesProvincia(){
    this.CargarCantones();
    console.log(this.provinciaSeleccionada);
  }

  /*Cargar los distritos de el canton seleccionada*/
  CargarDistritosCanton(){
    this.CargarDistritos();
    console.log(this.cantonSeleccionado);
  }
  /*Distrito seleccionado*/
  CargarDistritoSeleccionado(){
    console.log(this.distritoSeleccionado);
  }

  /**---------------------------------------------------------FUNCIONES DE UI Y LOCALIZACION-------------------------------------------------------------------------------------------------- */
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
