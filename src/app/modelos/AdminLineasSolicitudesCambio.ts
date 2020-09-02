export class AdminLineasSolicitudesCambio{
    id_solicitud_linea: number;
    id_solicitud: string;
    numero_pregunta: number;
    descripcion_cambio_linea: string;
    check_aplicada: boolean;
    fecha_aplicacion: Date;
    usuario_aplicacion: string;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}