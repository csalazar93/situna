export class AdminSolicitudesCambio{
    id_solicitud: string;
    id_ficha_inventario: string;
    fecha_solicitud: Date;
    descripcion_solicitud: string;
    usuario_solicita: string;
    aprobada: boolean;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}