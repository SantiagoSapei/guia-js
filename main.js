// 1. Datos de un jugador
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;
console.log("Ex 1:", nombre, edad, vida, puntaje, estaActivo);

// 2. Calcular puntaje final
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let puntajeFinal = puntosBase + bonus - penalizacion;
console.log("Ex 2 - Puntaje final:", puntajeFinal);

// 3. Convertir texto a número
const inputDato = document.getElementById("dato");
const botonEjecutar = document.getElementById("btn");
const mensajePantalla = document.getElementById("mensaje");

botonEjecutar.addEventListener("click", function () {
const valor = Number(inputDato.value); 
const resultado = valor + 10;
mensajePantalla.textContent = "Resultado: " + resultado;
});

// 4. Validar edad mínima
let edadUsuario = 15;
if (edadUsuario >= 13) {
console.log("Ex 4: Puede jugar");
} else {
console.log("Ex 4: No puede jugar todavía");
}

// 5. Estado del jugador según vida
let vidaPlayer = 45;
if (vidaPlayer > 70) {
console.log("Ex 5: Jugador en buen estado");
} else if (vidaPlayer >= 30) {
console.log("Ex 5: Jugador herido");
} else if (vidaPlayer >= 1) {
console.log("Ex 5: Jugador en peligro");
} else if (vidaPlayer === 0) {
console.log("Ex 5: Game Over");
} else {
console.log("Ex 5: Vida negativa, ¿es un fantasma?");
}

// 6. Menú de opciones
let opcion = "iniciar";
switch (opcion) {
case "iniciar": console.log("Ex 6: Iniciando juego..."); break;
case "configuracion": console.log("Ex 6: Abriendo ajustes..."); break;
case "creditos": console.log("Ex 6: Creado por Santi Sapei"); break;
case "salir": console.log("Ex 6: Saliendo..."); break;
default: console.log("Ex 6: Opción no válida");
}

// 7. Cuenta regresiva
console.log("Ex 7:");
for (let i = 3; i >= 1; i--) {
console.log(i);
}
console.log("¡Comienza!");

// 8. Sumar puntos por rondas
let puntajeTotal = 0;
for (let ronda = 1; ronda <= 5; ronda++) {
puntajeTotal += 10;
}
console.log("Ex 8 - Puntaje Total:", puntajeTotal);

// 9. Recorrer un inventario
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];
console.log("Ex 9 - Primero:", inventario[0]);
console.log("Ex 9 - Último:", inventario[inventario.length - 1]);
console.log("Ex 9 - Total:", inventario.length);

// 10. Mostrar todos los objetos
console.log("Ex 10 - Lista completa:");
for (let i = 0; i < inventario.length; i++) {
console.log("- " + inventario[i]);
}

// 11. Agregar y quitar elementos
let mochila = [];
mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");
mochila.pop(); // Quita mapa
console.log("Ex 11 - Mochila final:", mochila);

// 12. Buscar un objeto
if (inventario.includes("llave")) {
console.log("Ex 12: La puerta se abre");
} else {
console.log("Ex 12: Necesitás una llave");
}