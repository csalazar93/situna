import { Component, OnInit } from '@angular/core';
import { FichaInventario } from 'src/app/modelos/FichaInventario';
import { FichaPlanta } from 'src/app/modelos/FichaPlanta';
import { PlantaService } from 'src/app/servicios/planta.service';


//Import jquery
/*import * as $ from 'jquery';

declare function OpenPlanta();*/

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  /*Lista de las fichas de planta registradas*/
  allFichasPlantaList: FichaPlanta[] = [];
  allFichasPlantaListAux: FichaPlanta[] = [];


  constructor(private plantaservice: PlantaService) { }

  ngOnInit(): void {
    /*$(document).ready(function () {
      
      $("#menuPrincipal a:not(.dropdown-toggle)").click(function () {
        $(".navbar-toggler").addClass("collapsed");
        $("#navbarSupportedContent").removeClass("show", 250);
      });

      $("#btnPlanta").click(function () {
        OpenPlanta();
      });
    });*/
    this.CargarAllFichasPlanta();
  }

  /*Cargar los servicios que puede tener una planta desde la REST API*/
  CargarAllFichasPlanta(){
    this.plantaservice.getAllFichasPlanta().subscribe(
      data => {
        this.allFichasPlantaListAux = Array(data)[0];
        console.log(this.allFichasPlantaListAux);

        for (const key in this.allFichasPlantaListAux) {
          if (Object.prototype.hasOwnProperty.call(this.allFichasPlantaListAux, key)) {
            const element = this.allFichasPlantaListAux[key];
            /*console.log(element);
            let fichaNew = new FichaPlanta();
            fichaNew = element;*/
            this.allFichasPlantaList.push(element);
          }
        }

        console.log(this.allFichasPlantaList);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
