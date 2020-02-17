export class Empleados {
    idEmpleado: number;
    Empleado: string;
    Clave: string;
}

export class NewEmpleados {
    constructor(
        public idEmpleado: number,
        public Empleado: string,
        public Clave: string
    ) {};            
};

export function EmpleadosToAJSON(data): Empleados[] {
    if (!data)
        return [];

    return data["empleados"].records.map((val) => {
        return {
            idEmpleado: val[0],
            Empleado: val[1],
            Clave: val[2]
        }
    });               
}