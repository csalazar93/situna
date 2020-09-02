export class ServiciosXAtractivo{
    id_t_servicios_atractivo: number; //PK
    id_ficha_inventario: string;
    id_servicio: number;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}