//1. Variables y tipos de datos
const nombre = prompt("Ingresá tu nombre de jugador:");
let edad = Number(prompt("¿Cuántos años tenés?"));
let vida = 100;
let puntaje = 0;
let estaActivo = prompt("¿Estás activo? (escribí 'si' o 'no')").toLowerCase() === "si";

// Mostrar resultados
console.log("--- Perfil Creado ---");
console.log("Jugador:", nombre);
console.log("Edad:", edad);
console.log("Vida:", vida);
console.log("Puntaje:", puntaje);
console.log("Activo:", estaActivo);

// 2. Calcular puntaje final
let puntosBase = Number(prompt("Ingresá los puntos base obtenidos:"));
let bonus = Number(prompt("Ingresá el bonus de esta partida:"));
let penalizacion = Number(prompt("Ingresá la penalización (puntos en contra):"));

let puntajeFinal = puntosBase + bonus - penalizacion;

console.log("--- Cálculo de Resultados ---");
console.log(`Puntos Base: ${puntosBase}`);
console.log(`Bonus: +${bonus}`);
console.log(`Penalización: -${penalizacion}`);
console.log("--------------------------");
console.log(`Tu puntaje final es: ${puntajeFinal}`);

// 3. Convertir texto a número
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    const valorTexto = input.value;
    const valorNumero = Number(valorTexto);
    const resultado = valorNumero + 10;
    mensaje.textContent = `El resultado de sumar 10 es: ${resultado}`;
});

// 4. Validar edad mínima
const rl4 = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
rl4.question('Ingresá tu edad: ', (dato) => {
const edad = Number(dato);
if (edad >= 13) {
console.log("Puede jugar");
} else {
console.log("No puede jugar todavía");
}
rl4.close();
});

// 5. Estado del jugador según vida
const rl5 = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
rl5.question('Ingresá la vida del jugador: ', (dato) => {
const vida = Number(dato);

if (vida < 0) {
    console.log("eres hacker estas baneado permanentemente");
} else if (vida === 0) {
    console.log("Game Over");
} else if (vida >= 1 && vida <= 29) {
    console.log("Jugador en peligro");
} else if (vida >= 30 && vida <= 70) {
    console.log("Jugador herido");
} else if (vida > 70) {
    console.log("Jugador en buen estado");
}
rl5.close();
});
// 6. Menú de opciones
const rl6 = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
console.log("Menú disponible: iniciar, configuracion, creditos, salir");
rl6.question('Elegí una opción: ', (opcion) => {
switch (opcion.toLowerCase()) { 
    case "iniciar":
    console.log("Iniciando el juego...");
    break;
    case "configuracion":
    console.log("Abriendo el menú de configuración...");
    break;
    case "creditos":
    console.log("Creado por Santiago Sapei");
    break;
    case "salir":
    console.log("Saliendo del programa...");
    break;
    default:
console.log("Opción no válida. Por favor, elegí una del menú.");
break;
}
});

// 7. Cuenta regresiva

for (let i = 10; i >= 1; i--) {
console.log(i);
}
console.log("¡Comienza!");

// 8. Sumar puntos por rondas
let puntajeTotal = 0;
for (let ronda = 1; ronda <= 5; ronda++) {
puntajeTotal = puntajeTotal + 10;
}
console.log(puntajeTotal);

// 9. Recorrer un inventario
const rl9 = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
const inventario = ["Espada", "Escudo", "Poción", "Mapa", "Antorcha"];
console.log("Primer objeto: " + inventario[0]);
console.log("Último objeto: " + inventario[inventario.length - 1]);
console.log("Cantidad total de objetos: " + inventario.length);
console.log("\nObjetos disponibles (0 a 4):");
inventario.forEach((item, index) => console.log(`${index}: ${item}`));
rl9.question('\n¿Qué objeto querés llevar? (ingresá el número): ', (opcion) => {
const indice = Number(opcion);
if (indice >= 0 && indice < inventario.length) {
console.log("Has elegido llevar: " + inventario[indice]);
} else {
console.log("Ese objeto no existe en tu inventario.");
}
rl9.close();
});

// 10. Mostrar todos los objetos
const inventario2 = ["espada", "poción", "llave", "escudo"];
for (let i = 0; i < inventario2.length; i++) {
console.log("Objeto " + (i + 1) + ": " + inventario2[i]);
}

// 11. Agregar y quitar elementos
let mochila = [];
mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");
mochila.pop(); 
console.log("Mochila final:", mochila);

// 12. Buscar un objeto
if (inventario2.includes("llave")) {
console.log("Ex 12: La puerta se abre");
} else {
console.log("Ex 12: Necesitás una llave");
}
// Funciones, Objetos y DOM Avanzado

// 13. Función de saludo
const rl13 = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
function saludarUsuario(nombre) {
console.log("Bienvenido/a, " + nombre);
}
rl13.question('Ingresá tu nombre: ', (nombreElegido) => {
saludarUsuario(nombreElegido);
rl13.close();
});

// 14. Función para calcular daño
function calcularVidaRestante(vida, danio) {
return vida - danio;
}
let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// 15. Arrow functions
const sumar = (a, b) => {
return a + b;
};
console.log(sumar(10, 5));

// 16. Objeto jugador
const jugadorBase = {
    nombre: "Luna",
    vida: 100,
    energia: 80,
    nivel: 1,
    inventario: ["espada", "poción"]
};
console.log("Jugador:", jugadorBase);

// 17. Modificar propiedades
const jugador = {
    nombre: "Kai",
    nivel: 1,
    monedas: 0
};
jugador.nivel += 1;
jugador.monedas += 50;
console.log("Jugador actualizado:", jugador);

// 18. Array de objetos personajes
const personajes = [
{ nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
{ nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
{ nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];
for (let i = 0; i < personajes.length; i++) {
console.log(personajes[i].nombre + " es " + personajes[i].tipo + " y está en nivel " + personajes[i].nivel);
}

// 19. Filtrar personajes por nivel
const personajesFuertes = personajes.filter(p => p.nivel >= 3);
console.log("Personajes fuertes:", personajesFuertes);

// 20. Obtener solo los nombres
const nombres = personajes.map(p => p.nombre);
console.log("Nombres:", nombres);

// 21. Buscar un personaje
const personajeEncontrado = personajes.find(p => p.nombre === "Kai");
console.log("Encontrado:", personajeEncontrado);

// 22. Calcular total de vida
const vidaTotal = personajes.reduce((acc, p) => acc + p.vida, 0);
console.log("Vida total del equipo:", vidaTotal);

// 23. Mostrar mensaje en pantalla (DOM)
mensajePantalla.textContent = "Bienvenido a la guía de JavaScript";
mensajePantalla.style.color = "blue";

// 24. Botón que suma puntos
let puntos = 0;
botonEjecutar.addEventListener("click", function () {
    puntos += 10;
    mensajePantalla.textContent = `Puntos: ${puntos}`;
});

// 25. Validar nombre de usuario
const inputNombre = document.getElementById("dato");
botonEjecutar.addEventListener("click", function () {
    if (inputNombre.value === "") {
        console.log("Ex 25: Ingresá un nombre para continuar");
    } else {
        console.log(`Ex 25: Bienvenido/a, ${inputNombre.value}`);
    }
});

// 26. Guardar puntaje en LocalStorage
const jugadorGuardado = {
nombre: "Luna",
puntaje: 1500
};
localStorage.setItem("datosJugador", JSON.stringify(jugadorGuardado));
const datosGuardados = localStorage.getItem("datosJugador");
const jugadorRecuperado = JSON.parse(datosGuardados);
console.log(jugadorRecuperado);