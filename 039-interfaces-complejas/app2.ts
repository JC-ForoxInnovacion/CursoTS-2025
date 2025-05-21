import { sepCorto, sepLargo } from "./separadores.js";


(()=> {

  interface Producto {
    codProducto: string,
    descProducto: string,
    proveedor: Proveedores[],
    tiendas: Tiendas[]
  }

  interface Proveedores { 
      idProveedor: string,
      nombre: string
    }

  interface Tiendas {
    codCiudad: string,
    ciudad: Ciudades[]
  }

  interface Ciudades{
    calle: string,
    telefono: number
  }

  let productoX: Producto = {
    codProducto: 'string',
    descProducto: 'string',
    proveedor: [
      {
        idProveedor: 'string',
        nombre: 'string'
      },
            {
        idProveedor: 'string',
        nombre: 'string'
      }
    ],
    tiendas: [
      {
        codCiudad: 'string',
        ciudad:[
          {
            calle: 'string',
            telefono: 0
          },
          {
            calle: 'string',
            telefono: 0
          },
          {
            calle: 'string',
            telefono: 0
          }
        ]
      },
            {
        codCiudad: 'string',
        ciudad:[
          {
            calle: 'string',
            telefono: 0
          }
        ]
      }
    ]
  }

})();

