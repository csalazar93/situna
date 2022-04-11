import { CarrerasPPSXPlanta } from './CarrerrasPPSXPlanta';
import { CategoriasXPlanta } from './CategoriasXPlanta';
import { CertificacionesXPlanta } from './CertificacionesXPlanta';
import { ContactoFicha } from './ContactoFicha';
import { FichaInventario } from './FichaInventario';
import { NormativasXPlanta } from './NormativasXPlanta';
import { PlantaAlojamiento } from './PlantaAlojamiento';
import { PlantaTuristica } from './PlantaTuristica';
import { ServiciosXPlanta } from './ServiciosXPlanta';

export class FichaPlanta{
    /*Data principal*/
    data: FichaInventario;

    /*Se obtienen los datos específicos de la planta*/
    info_planta: PlantaTuristica[];
    contactos_planta: ContactoFicha[];
    servicios_planta: ServiciosXPlanta[];
    categorias_planta: CategoriasXPlanta[];
    alojamiento_planta: PlantaAlojamiento[];
    normativa_planta: NormativasXPlanta[];
    certificaciones_planta: CertificacionesXPlanta[];
    carreras_pps_planta: CarrerasPPSXPlanta[];
}