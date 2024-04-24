//Ejercicio 1
const persona = {
    nombre: "Camilo",
    edad: "27",
    ciudad: "Medellin"
}

//Ejercicio 2
persona.ocupacion = "ingeniero"

//Ejercicio 3
console.log(persona.edad)

//Ejercicio 4
const libro = {
    titulo: "Los Miserables",
    autor: "Victor Hugo",
    año: "1862"
}

//Ejercicio 5
informacion = Object.assign(persona, libro)

//Ejercicio 6
persona.nombre = "Pepito"

//Ejercicio 7
delete libro.año

//Ejercicio 8
const coche = {
    modelo: "Spark GT",
    marca: "Chevrolet",
    año: "2013"
}

//Ejercicio 9
console.log(coche)

//Ejercicio 10
coche.saludo = function () {
    return `El coche es un ${this.modelo}`
}

//Ejercicio 11
const circulo = {
    radio: "4",
    color: "azul"
}

//Ejercicio 12
const areaCirculo = Math.PI * Math.pow(circulo.radio, 2)

//Ejercicio 13
const rectangulo = {
    ancho: "10",
    largo: "5"
}

//Ejercicio 14
const perimetroRectangulo = 2 * (rectangulo.ancho + rectangulo.largo)

//Ejercicio 15
formas = Object.assign(circulo, rectangulo)

//Ejercicio 16
const computadora = {
    marca: "Lenovo",
    modelo: "2019",
    precio: "$1000"
}

//Ejercicio 17
console.log(computadora.precio);

//Ejercicio 18
computadora.tarjetaGrafica = true

//Ejercicio 19
const mascota = {
    nombre: "Machitas",
    especie: "Dalmata",
    edad: "5 años"
}

//Ejercicio 20
console.log(mascota.especie);

//Ejercicio 21
const fruta = {
    nombre: "Pera",
    color: "Verde"
}

//Ejercicio 22
fruta.madura = function () {
    return `La fruta ${fruta.nombre} está madura`
}

//Ejercicio 23
const estudiante = {
    nombre: "Juan",
    edad: "24 años",
    calificaciones: [5, 4, 7, 6, 8, 9]
}

//Ejercicio 24
let suma = 0
for (let calificacion of estudiante.calificaciones) {
    suma += calificacion
}
const promedio = suma / estudiante.calificaciones.length
console.log(`El promedio de calificaciones es: ${promedio}`);

//Ejercicio 25
resultado = promedioCalificaciones > 0 ? "aprobado" : "reprobado";
estudiante.aprobado = resultado

//Ejercicio 26
const bolsa = {
    tamaño: "Grande",
    color: "Negra",
    cambiarColor: function (nuevoColor) {
        this.color = nuevoColor;
    }
};

//Ejercicio 27
console.log(bolsa.tamaño)

//Ejercicio 28
bolsa.cambiarColor("Roja")
console.log(bolsa.color)

//Ejercicio 29
const telefono = {
    marca: "Iphone",
    modelo: "2020",
    sistemaOperativo: "IOS"
}

//EJercicio 30
console.log(telefono.sistemaOperativo);

//Ejercicio 31
telefono.RAM="8gb"

//Ejercicio 32
const animal={
    tipo:"leon",
    sonido:"rugir"
}

//Ejercicio 33
console.log(animal.sonido);

//Ejercicio 34
animal.mensaje = function () {
    return `El animal ${animal.tipo} hace un sonido de ${animal.sonido}`
}