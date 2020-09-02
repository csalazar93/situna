export class AtractivoTuristico{
    id_ficha_inventario: string;
    nombre_atractivo: string;
    id_provincia: number;
    id_canton: number;
    id_distrito: number;
    localidad: string;
    latitud: string;
    longitud: string;
    medio_acceso: string;
    id_medio_acceso: number;
    id_condicion_ruta: number;
    id_estacionalidad: number;
    descripcion_atractivo: string;
    tipo_atractivo: string; //Pùblico o privado
    id_categoria: number;
    id_tipo_categoria: number;
    id_subtipo_categoria: number;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}