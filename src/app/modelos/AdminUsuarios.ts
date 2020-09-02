export class AdminUsuarios{
    usuario: string;
    cedula: string;
    nombre_pila: string;
    primer_apellido: string;
    segundo_apellido: string;
    profesion: string;
    grado_academico: string;
    telefono1: string;
    telefono2: string;
    email_1: string;
    email_2: string;
    contrasena: string;
    activo: boolean;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}