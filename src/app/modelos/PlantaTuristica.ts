
export class PlantaTuristica{
    id_ficha_inventario : string;
    nombre_proyecto : string;
    representante_legal : string;
    id_provincia : number;
    id_canton : number;
    id_distrito : number;
    localidad : string;
    latitud : string;
    longitud : string;
    cantidad_hombres : number;
    cantidad_mujeres : number;
    primer_mes_mayor_ingreso : number;
    segundo_mes_mayor_ingreso : number;
    tercer_mes_mayor_ingreso : number
    primer_mes_menor_ingreso : number;
    segundo_mes_menor_ingreso : number;
    tercer_mes_menor_ingreso : number;
    cant_personas_atiende : number;
    principal_atractivo : string;
    presenta_certificacion : boolean;
    audit_fecha_registro : Date;
    audit_usuario_registro : Date;
    audit_fecha_modificacion : Date;
    audit_usuario_modificacion : Date;
    categoria_mas_ingreso : number;

}