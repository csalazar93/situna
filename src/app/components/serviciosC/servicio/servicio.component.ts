import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  //Para el manejo de la lista de contactos------------------------------------------------------------------------------------
  tipoContacto: number = 0;
  nuevoContacto: boolean = false; //Determinar si se muestra el formulario de registro de contactos, segun tipo de contacto
  contactosLista: any[] = []; //Lista de los contactos a registrar
  public contactosModel = {
    id: 0,
    tipo:0,
    contacto:''
  };
  editarContacto:boolean = false;
  //Fin Manejo Contactos--------------------------------------------------------------------------------------------------------

  //Saber si se da al boton guardar
  submitted = false;

  constructor(private router: Router) { }

  tituloFormulario: string = "Datos de Servicio"

  ngOnInit(): void {
  }

  returnServiceList() {
    this.router.navigate(["/servicios/lista"]);
  }

  onSubmit() {
    this.submitted = true;

    this.returnServiceList();
  }


  //Metodos y funciones para el manejo del form para contactos
  
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

    this.tipoContacto = tipo;
    
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
