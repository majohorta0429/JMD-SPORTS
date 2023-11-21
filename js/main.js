const productos = [
    
    //Accesorios
    {
        id: "a1",
        titulo: "Morral",           
        imagen: "../img/Accesorios/a1.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 150000 
    },
    {
        id: "a2",
        titulo: "Maleta",
        imagen: "../img/Accesorios/a2.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 200000 
    },
    {
        id: "a3",
        titulo: "Gafas mujer",
        imagen: "../img/accesorios/a3.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 80000 
    },
    {
        id: "a4",
        titulo: "Gafas hombre",
        imagen: "../img/accesorios/a4.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 90000 
    },
    {
        id: "a5",
        titulo: "Maleta",           
        imagen: "../img/accesorios/a5.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 180000 
    },
    {
        id: "a6",
        titulo: "Reloj hombre",
        imagen: "../img/accesorios/a6.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 300000 
    },
    {
        id: "a7",
        titulo: "Gorra plana",
        imagen: "../img/accesorios/a7.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 130000 
    },
    {
        id: "a8",
        titulo: "Gorra",
        imagen: "../img/accesorios/a8.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 120000 
    },
    {
        id: "a9",
        titulo: "Reloj dama",
        imagen: "../img/accesorios/a9.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 250000 
    },

    //Hombre
    {
        id: "h1",
        titulo: "Camisa",
        imagen: "../img/Hombre/h1.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 200000 
    },
    {
        id: "h2",
        titulo: "Conjunto",
        imagen: "../img/Hombre/h2.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 400000 
    },
    {
        id: "h3",
        titulo: "Camisa",
        imagen: "../img/Hombre/h3.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 200000 
    },
    {
        id: "h4",
        titulo: "Camisa",
        imagen: "../img/Hombre/h4.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 180000 
    },
    {
        id: "h5",
        titulo: "Buso",
        imagen: "../img/Hombre/h5.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 300000 
    },
    {
        id: "h6",
        titulo: "Jogger",
        imagen: "../img/Hombre/h6.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 230000 
    },
    {
        id: "h7",
        titulo: "Sudadera",
        imagen: "../img/Hombre/h7.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 400000 
    },
    {
        id: "h8",
        titulo: "Chaqueta",
        imagen: "../img/Hombre/h8.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 230000 
    },
    {
        id: "h9",
        titulo: "Sudadera",
        imagen: "../img/Hombre/h9.png",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 250000 
    },

    //Mujer
    {
        id: "m1",
        titulo: "Blusa",
        imagen: "../img/Mujer/m1.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 95000 
    },
    {
        id: "m2",
        titulo: "Conjunto",
        imagen: "../img/Mujer/m2.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 430.000 
    },
    {
        id: "m3",
        titulo: "Leggie",
        imagen: "../img/Mujer/m3.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 130000 
    },
    {
        id: "m4",
        titulo: "Conjunto",
        imagen: "../img/Mujer/m4.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 430000 
    },
    {
        id: "m5",
        titulo: "Chaqueta",
        imagen: "../img/Mujer/m5.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 390000 
    },
    {
        id: "m6",
        titulo: "Camisa rosada",
        imagen: "../img/Mujer/m6.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 180000 
    },
    {
        id: "m7",
        titulo: "Camisa salmon",
        imagen: "../img/Mujer/m7.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 90000 
    },
    {
        id: "m8",
        titulo: "Vestido",
        imagen: "../img/Mujer/m8.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 180000 
    },
    {
        id: "m9",
        titulo: "Falda con short",
        imagen: "../img/Mujer/m9.png",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 210000 
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"></img>
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id= "${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }     
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];

}


function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}