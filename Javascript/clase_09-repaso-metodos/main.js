const productos = [
  {
    id: 1,
    nombre: "Smartphone Galaxy S21",
    precio: 799.99,
    stock: 20,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 2,
    nombre: "Camiseta de Algodón",
    precio: 19.99,
    stock: 50,
    categorias: ["Ropa"],
  },
  {
    id: 3,
    nombre: "Juego de Ollas de Acero Inoxidable",
    precio: 149.99,
    stock: 10,
    categorias: ["Hogar", "Cocina"],
  },
  {
    id: 4,
    nombre: "Smart TV 4K 55 pulgadas",
    precio: 699.99,
    stock: 15,
    categorias: ["Electrónica"],
  },
  {
    id: 5,
    nombre: "Zapatillas de Running Nike Air Max",
    precio: 129.99,
    stock: 30,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 6,
    nombre: "Robot Aspiradora Inteligente",
    precio: 299.99,
    stock: 5,
    categorias: ["Hogar", "Tecnología"],
  },
  {
    id: 7,
    nombre: "Tablet Samsung Galaxy Tab A",
    precio: 199.99,
    stock: 25,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 8,
    nombre: "Auriculares Inalámbricos Sony",
    precio: 89.99,
    stock: 40,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 9,
    nombre: "Chaqueta Impermeable Columbia",
    precio: 79.99,
    stock: 20,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 10,
    nombre: "Licuadora de Alta Potencia",
    precio: 49.99,
    stock: 0,
    categorias: ["Hogar", "Cocina"],
  },
];

// 1. **Filtrar productos por categoría:**
// Filtra los productos para obtener solo aquellos que pertenecen a la categoría "Ropa".

const productosRopa = productos.filter((producto) =>
  producto.categorias.includes("Ropa")
);

// console.log(productosRopa);

// 2. Usando destructuring traer el nombre de los productos en un nuevo array

// const nombreProductos = productos.map((producto) => producto.nombre);
const nombreProductos = productos.map(({ nombre }) => nombre);
// console.log(nombreProductos);

// 3. **Encontrar productos agotados:**
// Encuentra y muestra los productos que tienen un stock igual a 0.

const productosAgotados = productos.filter((producto) => producto.stock === 0);
// console.log(productosAgotados);

// 4. **Calcular el valor total del inventario:**
// Calcula el valor total del inventario sumando el precio de todos los productos en stock.

const valorTotalInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
// console.log(`El valor total del inventario es de $${valorTotalInventario}`);
// console.log(valorTotalInventario);

// 5. **Encontrar productos de tecnología:**
// Encuentra y muestra los productos que pertenecen a la categoría "Tecnología".

const filtrarProductos = (array, categoria) => {
  return array.filter((producto) => {
    return producto.categorias.includes(categoria);
  });
};

// console.log(filtrarProductos(productos, "Tecnología"));

const productosTecnologia = productos.filter((producto) =>
  producto.categorias.includes("Tecnología")
);
// console.log(productosTecnologia);

// 6. **Ordenar productos por precio:**
// Ordena los productos por precio de menor a mayor.

// const productosMenorAMayor = productos.sort((a, b) => a.precio - b.precio);
// console.log(productosMenorAMayor);

// 7. **Modificar el precio de todos los productos:**
// Aumenta el precio de todos los productos en un 10%.
const productosInflados = productos.map((producto) => ({
  ...producto,
  precioInflado: producto.precio * 1.1,
}));

// console.log(productosInflados);

// 8. **Encontrar productos que pertenecen a múltiples categorías:**
// Encuentra y muestra los productos que pertenecen a más de una categoría (por ejemplo, "Electrónica" y "Tecnología").

const multipleCategoria = productos.filter(
  (producto) => producto.categorias.length > 1
);

// console.log(multipleCategoria);

// 9. **Encontrar el producto más caro:**
// Encuentra el producto con el precio más alto.

const productoMasCaro = productos.reduce((productoMasCaro, producto) =>
  producto.precio > productoMasCaro.precio ? producto : productoMasCaro
);

// console.log(productoMasCaro);

// 10. **Filtrar productos por precio:**
// Filtra los productos para obtener aquellos que tienen un precio menor o igual a $30.

const productoMenorIgual30 = productos.filter(
  (producto) => producto.precio <= 30
);
// console.log(productoMenorIgual30);

// 11.  Encontrar productos con nombres largos (más de 30 caracteres)
const productosMasDe30 = productos
  .filter(({ nombre }) => nombre.length > 10)
  .slice(-5)
  .map((producto) => {
    return `El producto mas largo es ${producto.nombre}`;
  });
// console.log(productosMasDe30);
// 12. Encontrar productos con stock mínimo (menor o igual a 10 unidades)

const productoStockMinimo = productos.filter(
  (producto) => producto.stock <= 10
);
// console.log(productoStockMinimo);

// 13. Hacer una función que devuelva un nuevo array con los productos actuales pero que aquellos que valgan mas de $300 tengan un descuento del 50%
const productosConDescuento = productos.map((producto) =>
  producto.precio > 300
    ? { ...producto, precio: producto.precio * 1.5 }
    : producto
);

// console.log(productosConDescuento);

// 14. Calcular el promedio de precios de productos en la categoría "Ropa”

const productosRopa2 = productos.filter((producto) =>
  producto.categorias.includes("Ropa")
);
// console.log(productosRopa2);
const promedioPrecioRopa =
  productosRopa2.reduce((total, producto) => total + producto.precio, 0) /
  productosRopa2.length;

// console.log(promedioPrecioRopa);

// Imprimir por consola (por cada producto) : "El producto *nombre* sale $*precio*"

const imprimirNombrePrecio = productos.forEach((producto) =>
  console.log(`El producto ${producto.nombre} sale $${producto.precio}`)
);

imprimirNombrePrecio;
