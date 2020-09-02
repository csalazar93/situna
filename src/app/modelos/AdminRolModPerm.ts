export class AdminRolModPerm{
    id_rol: number;
    id_modulo: number;
    id_permiso: number;
    activo: boolean;

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}