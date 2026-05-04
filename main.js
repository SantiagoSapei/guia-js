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
// --- BLOQUE 2: Funciones, Objetos y DOM Avanzado ---

// 13. Función de saludo
function saludarUsuario(nombreUsuario) {
    console.log(`Ex 13: Bienvenido/a, ${nombreUsuario}`);
}
saludarUsuario("Milo");

// 14. Función para calcular daño
function calcularVidaRestante(vida, danio) {
    return vida - danio;
}
let resultadoVida = calcularVidaRestante(100, 30);
console.log("Ex 14 - Vida restante:", resultadoVida);

// 15. Arrow functions
const sumar = (a, b) => a + b;
console.log("Ex 15 - Suma:", sumar(10, 5));

// 16. Objeto jugador
const jugador = {
    nombre: "Luna",
    vida: 100,
    energia: 80,
    nivel: 1,
    inventario: ["espada", "poción"]
};
console.log("Ex 16 - Jugador:", jugador);

// 17. Modificar propiedades
const jugador2 = {
    nombre: "Kai",
    nivel: 1,
    monedas: 0
};
jugador2.nivel += 1;
jugador2.monedas += 50;
console.log("Ex 17 - Jugador actualizado:", jugador2);

// 18. Array de objetos (Usando los personajes de data.js)
// Nota: 'personajes' ya viene definido en data.js
console.log("Ex 18 - Lista de personajes:");
personajes.forEach(p => {
    console.log(`${p.nombre} es ${p.tipo} y está en nivel ${p.nivel}`);
});

// 19. Filtrar personajes por nivel
const personajesFuertes = personajes.filter(p => p.nivel >= 3);
console.log("Ex 19 - Personajes fuertes:", personajesFuertes);

// 20. Obtener solo los nombres
const nombres = personajes.map(p => p.nombre);
console.log("Ex 20 - Nombres:", nombres);

// 21. Buscar un personaje
const personajeEncontrado = personajes.find(p => p.nombre === "Kai");
console.log("Ex 21 - Encontrado:", personajeEncontrado);

// 22. Calcular total de vida
const vidaTotal = personajes.reduce((acc, p) => acc + p.vida, 0);
console.log("Ex 22 - Vida total del equipo:", vidaTotal);

// 23. Mostrar mensaje en pantalla (DOM)
mensajePantalla.textContent = "Bienvenido a la guía de JavaScript";
mensajePantalla.style.color = "blue"; // Desafío extra

// 24. Botón que suma puntos
let puntos = 0;
botonEjecutar.addEventListener("click", function () {
    puntos += 10;
    mensajePantalla.textContent = `Puntos: ${puntos}`;
});

// 25. Validar nombre de usuario
const inputNombre = document.getElementById("dato");
// Usaremos el mismo botón para esta validación según la consigna
botonEjecutar.addEventListener("click", function () {
    if (inputNombre.value === "") {
        console.log("Ex 25: Ingresá un nombre para continuar");
    } else {
        console.log(`Ex 25: Bienvenido/a, ${inputNombre.value}`);
}
});

// 26. Guardar puntaje en LocalStorage
const datosJugador = {
nombre: "Luna",
puntaje: 1500
};

localStorage.setItem("jugadorGuardado", JSON.stringify(datosJugador));
const recuperado = JSON.parse(localStorage.getItem("jugadorGuardado"));
console.log("Ex 26 - Recuperado de LocalStorage:", recuperado);