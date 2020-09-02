export class PlantaAlojamiento{
    id_ficha_inventario: string;
    cant_hab_sencillas: number;
    cant_hab_dobles: number;
    cant_hab_triples: number;
    cant_hab_cuadruples: number;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}