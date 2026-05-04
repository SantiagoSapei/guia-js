Respuestas del Trabajo Práctico - Módulo #0
27. Diferencia entre let, const y var
const: Usalo para cosas que no cambian nunca, como el nombre de tu juego o la gravedad. Una vez que le das un valor, no podés cambiarlo.

let: Usalo para cosas que sí van a cambiar, como la vida del jugador, el puntaje o la posición del personaje.

var: Es la forma "vieja". No se usa más porque es un poco "desprolija": permite que declares la misma variable dos veces sin avisarte y a veces causa errores porque se mezcla en todo el código. Con let y const, JavaScript es más ordenado.

28. ¿Qué es el "scope"?

Imaginate que el scope es como una serie de cajas. Lo que ponés dentro de una caja pequeña solo se puede ver desde adentro de esa caja. Pero si algo está afuera, en el patio (el scope global), todos lo pueden ver.

Análisis del código:
¿Qué se muestra primero?
Se muestra: "Local".

¿Qué se muestra después?
Se muestra: "Global".

¿Por qué pasa esto?

El primer mensaje: Cuando llamás a la función mostrarNombre(), el programa entra en una "cajita" cerrada. Adentro de esa caja, creaste un nuevo nombre que dice "Local". Como JavaScript siempre mira primero lo que tiene más cerca, usa ese y se olvida del de afuera.

El segundo mensaje: Una vez que la función termina, esa "cajita" se destruye. Cuando hacés el último console.log afuera, el programa ya no tiene acceso a lo que pasó dentro de la función, así que solo puede ver el nombre que declaraste al principio de todo (el global).


29. Diferencia entre array y objeto
Array (Lista): Es ideal para guardar muchas cosas iguales o similares en fila.

Ejemplo: Una lista de ítems: ["espada", "escudo", "poción"]. Accedés por posición (el 0, el 1, etc.).

Objeto: Es ideal para describir una sola cosa con lujo de detalle.

Ejemplo: Un jugador: { nombre: "Santi", nivel: 2, vida: 100 }. Accedés por el nombre de la característica (la propiedad).

30. Eventos en JavaScript
Un evento son señales que indican acciones o sucesos específicos dentro de una página web (como hacer click, presionar una tecla, cargar el documento o redimensionar la ventana).

boton.addEventListener("click", function () { console.log("El usuario hizo clic"); });

¿Quién escucha?: El botón (boton).

¿Qué escucha?: El click del mouse (click).

¿Qué hace?: Muestra un mensaje en la consola.

¿Para qué sirve?: En un juego, esto es lo que hace que cuando apretás un botón en pantalla, el personaje ataque o el juego empiece. Sin eventos, la página sería solo un dibujo estático que no hace nada.