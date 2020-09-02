export class ContactoFicha{
    id_t_contacto: number;
    id_ficha_inventario: string;
    id_tipo_contacto: number;
    contacto: string; 

    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}