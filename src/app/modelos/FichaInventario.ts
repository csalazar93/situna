export class FichaInventario{
    id_ficha_inventario:string;
    tipo_ficha: string;
    investigador: string;
    consecutivo_global: string;
    
    audit_fecha_registro: Date;
    audit_usuario_registro: string;
    audit_fecha_modificacion: Date;
    audit_usuario_modificacion: string;
}