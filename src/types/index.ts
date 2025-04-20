export interface Product {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    id_sucursal: number;
}

export interface Haircut {
    id: number;
    nombre: string;
    precio: number;
}

export interface Location {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    horario: string;
    isPrimary?: boolean;
}