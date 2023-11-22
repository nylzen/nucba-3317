const productContainer = document.getElementById('product')

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    renderizar(){
        const product = document.createElement('div')
        product.innerHTML = `<h1>${this.nombre} ${this.precio}</h1>`

        return product
    }
}

const productos = [
    new Producto('Pantalon', 100),
    new Producto('Remera', 200),
    new Producto('Medias', 50),
]

// console.log(productos)

productos.forEach(producto => {
    productContainer.appendChild(producto.renderizar())
})

console.log(productos[0].renderizar())
