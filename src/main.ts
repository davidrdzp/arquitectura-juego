import './style.css'

// ───────────────────────── Base de datos del cuestionario ─────────────────────────
interface Question {
  pregunta: string
  opciones: string[] // siempre 4
  respuestaCorrecta: number // índice 0-3
}

const questionBank: Question[] = [
  {
    pregunta: '¿Cuál es el origen exacto del llamado “cuello de botella de Von Neumann”?',
    opciones: [
      'La ALU es incapaz de operar con más de dos registros a la vez.',
      'Datos e instrucciones comparten la misma memoria y el mismo bus, por lo que no pueden leerse simultáneamente.',
      'La memoria caché es demasiado pequeña para almacenar programas completos.',
      'Los dispositivos de E/S utilizan el mismo bus que la unidad de control.',
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'Una ventaja directa de la arquitectura Harvard frente a Von Neumann es:',
    opciones: [
      'Requiere menos hardware y es más económica.',
      'Permite almacenar programas y datos en el mismo espacio de direcciones.',
      'Elimina por completo la necesidad de una unidad de control.',
      'Puede leer una instrucción y un dato en el mismo ciclo gracias a memorias y buses independientes.',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: '¿Cuál de los siguientes elementos NO forma parte del modelo original de Von Neumann (1945)?',
    opciones: [
      'Una jerarquía de caché L1/L2/L3 integrada en el procesador',
      'Unidad Aritmético-Lógica',
      'Memoria que almacena datos e instrucciones',
      'Dispositivos de entrada y salida',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: '¿Cuál es el orden correcto del ciclo de instrucción básico?',
    opciones: ['Decode → Fetch → Execute', 'Execute → Fetch → Decode', 'Fetch → Decode → Execute', 'Fetch → Execute → Decode'],
    respuestaCorrecta: 2,
  },
  {
    pregunta: '¿Qué bus transporta la dirección de la posición de memoria que la CPU desea leer o escribir?',
    opciones: ['Bus de datos', 'Bus de control', 'Bus de direcciones', 'Bus de E/S serial'],
    respuestaCorrecta: 2,
  },
  {
    pregunta: 'En el esquema de la CPU, ¿cuál es la función principal de la Unidad de Control?',
    opciones: [
      'Interpretar las instrucciones y dirigir el funcionamiento del resto del sistema',
      'Ejecutar operaciones AND, OR y NOT',
      'Almacenar de forma permanente el sistema operativo',
      'Convertir las señales digitales en analógicas',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: '¿Qué registro contiene la dirección de la siguiente instrucción que se va a ejecutar?',
    opciones: ['Acumulador', 'Contador de programa', 'Registro de estado', 'Registro de instrucción'],
    respuestaCorrecta: 1,
  },
  {
    pregunta: '¿Cuál conjunto de características describe mejor a una arquitectura CISC?',
    opciones: [
      'Instrucciones simples, longitud fija y control cableado',
      'Arquitectura Load-Store estricta con gran banco de registros',
      'Un solo ciclo de reloj por cada instrucción sin excepción',
      'Instrucciones complejas, longitud variable y unidad de control basada en microcódigo',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: 'Una arquitectura RISC con filosofía Load-Store estricta implica que:',
    opciones: [
      'Las operaciones aritméticas pueden operar directamente sobre datos en RAM.',
      'Las instrucciones tienen longitud variable según el operando.',
      'No se pueden utilizar registros internos.',
      'La memoria solo se accede mediante instrucciones de carga y almacenamiento; la aritmética se hace entre registros.',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: '¿Por qué RISC suele preferir una unidad de control cableada en lugar de microcódigo?',
    opciones: [
      'Porque es más rápida al no tener que interpretar microinstrucciones',
      'Porque permite instrucciones de longitud variable',
      'Porque consume más ciclos pero ocupa menos silicio',
      'Porque elimina la necesidad de registros',
    ],
    respuestaCorrecta: 0,
  },
  // ── Preguntas 11-50 ──
  {
    pregunta: 'La segmentación de cauce (pipelining) consiste en:',
    opciones: [
      'Duplicar la memoria para tener dos copias de cada instrucción',
      'Ejecutar un programa completo en cada núcleo sin sincronización',
      'Dividir la ejecución de una instrucción en etapas para solapar varias instrucciones a la vez',
      'Reducir la frecuencia de reloj para ahorrar energía',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: 'Dos etapas del pipeline intentan acceder a la misma memoria unificada en el mismo ciclo. ¿Qué tipo de riesgo (hazard) se presenta?',
    opciones: ['Riesgo de control', 'Riesgo estructural', 'Riesgo de datos', 'Riesgo de predicción'],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'Considera: ADD R1, R2, R3 seguida inmediatamente de SUB R4, R1, R5. ¿Qué problema puede ocurrir en un pipeline?',
    opciones: [
      'Riesgo de datos, porque SUB necesita el valor de R1 que ADD aún no ha escrito',
      'Riesgo estructural, porque ambas usan la ALU',
      'Riesgo de control, porque hay un salto',
      'Ningún riesgo, porque ambas instrucciones son independientes',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: 'Las instrucciones de salto condicional (if, bucles) provocan principalmente un riesgo de:',
    opciones: ['Datos', 'Estructural', 'Coherencia de caché', 'Control'],
    respuestaCorrecta: 3,
  },
  {
    pregunta:
      '¿Qué técnica reduce los riesgos de datos pasando el resultado de una etapa del pipeline directamente a la siguiente sin esperar a escribirlo en el registro?',
    opciones: ['Branch prediction', 'Protocolo MESI', 'Data forwarding (adelantamiento)', 'Segmentación de memoria'],
    respuestaCorrecta: 2,
  },
  {
    pregunta: 'Cuando el predictor de saltos falla, ¿qué ocurre?',
    opciones: [
      'El programa termina con error',
      'Se limpia (flush) el pipeline y se paga una penalización de ciclos',
      'Se duplica la memoria caché',
      'Se pasa automáticamente a arquitectura Harvard',
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'Un procesador es superescalar cuando:',
    opciones: [
      'Tiene más de 64 GB de RAM',
      'Puede despachar y ejecutar varias instrucciones en un mismo ciclo gracias a unidades funcionales duplicadas',
      'Opera exclusivamente con instrucciones de longitud fija',
      'Utiliza únicamente ejecución en orden (in-order)',
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'Un pipeline ideal de 5 etapas, sin ningún riesgo, ejecuta 100 instrucciones. ¿Cuántos ciclos de reloj necesita en total?',
    opciones: ['500 ciclos', '105 ciclos', '104 ciclos', '100 ciclos'],
    respuestaCorrecta: 2,
  },
  {
    pregunta: 'Un programa recorre un bucle y accede repetidamente a la variable “contador”. Este comportamiento ilustra la:',
    opciones: ['Localidad temporal', 'Localidad espacial', 'Coherencia de caché', 'Predicción de saltos'],
    respuestaCorrecta: 0,
  },
  {
    pregunta: 'Al recorrer secuencialmente un arreglo, es probable que el programa acceda a posiciones contiguas. Esto justifica que la caché:',
    opciones: [
      'Borre cada dato tras usarlo',
      'Solo guarde instrucciones',
      'Funcione sin memoria principal',
      'Traiga bloques (líneas) completos de memoria en lugar de una sola palabra',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: 'En el protocolo MESI, una línea de caché en estado M (Modified):',
    opciones: [
      'Está en varias cachés y coincide con la RAM',
      'No contiene datos válidos',
      'Existe únicamente en la RAM',
      'Solo existe en esa caché, ha sido modificada y la RAM tiene un valor desactualizado',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: '¿Cuál es la diferencia entre los estados E (Exclusive) y S (Shared) en MESI?',
    opciones: [
      'E está en una sola caché y coincide con la RAM; S puede estar en varias cachés y coincide con la RAM',
      'E está modificada; S está invalidada',
      'E está en todas las cachés; S solo en una',
      'No hay diferencia, son sinónimos',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: 'Si un núcleo escribe en una línea que otros núcleos tienen en estado S, el protocolo MESI hará que las copias de los otros núcleos pasen a:',
    opciones: ['Exclusive', 'Invalid', 'Modified', 'Shared'],
    respuestaCorrecta: 1,
  },
  {
    pregunta: '¿Cuál es la principal ventaja de fabricar procesadores con chiplets frente a un diseño monolítico?',
    opciones: [
      'Eliminan la necesidad de usar silicio',
      'Garantizan que no existan latencias entre núcleos',
      'Mejoran el rendimiento de fabricación (yield) y permiten combinar distintos nodos de fabricación',
      'Hacen innecesaria la memoria caché',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: 'Para cargas de IA, una GPU/TPU se diferencia de una CPU en que:',
    opciones: [
      'Tiene pocos núcleos muy complejos con grandes predictores de saltos',
      'Solo ejecuta instrucciones de control',
      'Tiene miles de núcleos aritméticos simples optimizados para multiplicación y acumulación de matrices',
      'No utiliza memoria',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: '¿Qué distingue a RISC-V de x86 y ARM?',
    opciones: [
      'Es un ISA abierto y modular, sin licencias ni regalías',
      'Es una arquitectura CISC de Intel',
      'Solo puede usarse en supercomputadoras',
      'Es exclusivo de dispositivos móviles',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: '¿Cuál afirmación sobre x86 y ARM es correcta?',
    opciones: [
      'Ambos son ISA abiertos',
      'Ambos son filosofía RISC pura',
      'ARM es de filosofía CISC y x86 de RISC',
      'x86 es de filosofía CISC y ARM de filosofía RISC',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: '¿Qué tecnología caracteriza a la segunda generación de computadoras (1956-1963)?',
    opciones: ['Tubos de vacío', 'Transistores', 'Circuitos integrados', 'Microprocesadores'],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'La aparición de los circuitos integrados (chips) corresponde a la:',
    opciones: ['Primera generación', 'Tercera generación', 'Segunda generación', 'Cuarta generación'],
    respuestaCorrecta: 1,
  },
  {
    pregunta: '¿Qué hecho define a la cuarta generación (1971-1980)?',
    opciones: [
      'El uso de tubos de vacío',
      'La computación cuántica',
      'La invención del ábaco',
      'La integración de las funciones principales de una computadora en un microprocesador, permitiendo la PC',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: 'Las computadoras de primera generación, como ENIAC y EDVAC, se caracterizaban por:',
    opciones: [
      'Usar válvulas de vacío, ser muy grandes, consumir mucha energía y programarse en lenguaje máquina',
      'Usar transistores y lenguajes de alto nivel',
      'Usar microprocesadores',
      'Ser portátiles',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: 'Los lenguajes de alto nivel COBOL y FORTRAN se introdujeron durante la:',
    opciones: ['Primera generación', 'Cuarta generación', 'Segunda generación', 'Quinta generación'],
    respuestaCorrecta: 2,
  },
  {
    pregunta:
      'Según la clasificación por tamaño y capacidad, ¿qué tipo de computadora es esencial en bancos, aerolíneas y grandes gobiernos para procesar enormes volúmenes de datos?',
    opciones: ['Mainframe (macrocomputadora)', 'Microcomputadora', 'Netbook', 'Computadora analógica'],
    respuestaCorrecta: 0,
  },
  {
    pregunta: '¿Cuál clasificación describe a las computadoras más potentes y costosas, usadas en simulaciones complejas e investigación científica?',
    opciones: ['Minicomputadoras', 'Supercomputadoras', 'Microcomputadoras', 'Híbridas'],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'Una computadora que usa señales continuas para representar información y resulta eficiente para simular sistemas físicos es:',
    opciones: ['Digital', 'Binaria', 'Mainframe', 'Analógica'],
    respuestaCorrecta: 3,
  },
  {
    pregunta: '¿Cuál de los siguientes es un ejemplo de software de sistema (no de aplicación)?',
    opciones: ['Una hoja de cálculo', 'Un editor de fotografías', 'Un controlador (driver) de dispositivo', 'Un navegador web'],
    respuestaCorrecta: 2,
  },
  {
    pregunta: 'En el chipset clásico, ¿cuál es la función del Northbridge?',
    opciones: [
      'Comunicar los periféricos lentos como USB y audio',
      'Almacenar el sistema operativo',
      'Suministrar corriente a la fuente de poder',
      'Comunicar de forma rápida a la CPU con la memoria RAM y la tarjeta gráfica',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: 'Respecto a los tipos de socket, la diferencia entre LGA y PGA es que:',
    opciones: [
      'LGA tiene los pines en el procesador y PGA en la placa',
      'LGA tiene los pines en el socket de la placa madre y PGA los tiene en el procesador',
      'Ambos carecen de pines',
      'LGA es exclusivo de AMD y PGA de Intel sin excepciones',
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'El bus frontal (FSB) comunicaba tradicionalmente:',
    opciones: ['Al procesador con el Northbridge', 'Al disco duro con el monitor', 'A la RAM con el teclado', 'A la fuente de poder con la placa'],
    respuestaCorrecta: 0,
  },
  {
    pregunta: '¿Cuál es la diferencia fundamental entre RAM y ROM?',
    opciones: [
      'La RAM es no volátil y la ROM es volátil',
      'Ambas son volátiles',
      'La RAM es volátil y de lectura/escritura; la ROM conserva su contenido sin energía',
      'La RAM se usa solo para almacenamiento masivo',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: '¿Qué característica distingue a la memoria DDR de la SDRAM convencional?',
    opciones: [
      'Es no volátil',
      'Funciona sin reloj',
      'Transfiere datos en ambos flancos (subida y bajada) de la señal de reloj',
      'Solo almacena instrucciones',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: '¿Cuál es el orden cronológico correcto de las tecnologías de memoria RAM?',
    opciones: [
      'SDRAM → DDR → DDR2 → DDR3 → DDR4 → DDR5',
      'DDR → SDRAM → DDR2 → DDR3',
      'DDR3 → DDR2 → DDR → SDRAM',
      'SDRAM → DDR2 → DDR → DDR4 → DDR3',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: '¿Por qué un módulo DDR4 no puede instalarse en una ranura DDR3?',
    opciones: [
      'Porque el módulo DDR4 no usa reloj',
      'Porque DDR3 es solo para servidores',
      'Porque DDR4 es volátil y DDR3 no',
      'Porque difieren en la muesca, la cantidad de pines y el voltaje de operación',
    ],
    respuestaCorrecta: 3,
  },
  {
    pregunta: 'Una ventaja del SSD respecto al HDD es que:',
    opciones: [
      'Ofrece más capacidad por menor costo',
      'No tiene partes móviles, por lo que es más rápido, silencioso y resistente a golpes',
      'Necesita un disco giratorio',
      'Es una memoria volátil',
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: 'En un RAID 1 (espejo):',
    opciones: [
      'Los datos se dividen entre discos sin redundancia',
      'Los datos se duplican en dos discos, tolerando la falla de uno',
      'Se usa un solo disco',
      'Se aumenta la capacidad al sumar todos los discos',
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: '¿Cuál es la principal característica de RAID 0?',
    opciones: [
      'Reparte los datos en bandas (striping) entre discos para ganar velocidad, sin tolerancia a fallos',
      'Duplica la información',
      'Agrega paridad distribuida',
      'Es una copia de seguridad en la nube',
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: 'En discos IDE/PATA, las configuraciones Master y Slave sirven para:',
    opciones: [
      'Aumentar el voltaje del disco',
      'Dividir el disco en particiones',
      'Distinguir dos dispositivos que comparten el mismo cable, determinando cuál es el primario',
      'Cifrar la información',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: '¿Cuántos kilobytes hay en 4 GB, considerando 1 KB = 1024 bytes?',
    opciones: ['4,096 KB', '4,000,000 KB', '1,048,576 KB', '4,194,304 KB'],
    respuestaCorrecta: 3,
  },
  {
    pregunta: 'Una unidad de cinta magnética es un dispositivo de acceso secuencial porque:',
    opciones: [
      'Puede saltar directamente a cualquier dirección',
      'Es una memoria RAM',
      'Debe leerse en orden desde el inicio hasta llegar al dato deseado',
      'No almacena información',
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: '¿Cuál de las siguientes NO es una función típica del sistema operativo?',
    opciones: [
      'Administración de memoria',
      'Fabricación de los transistores del procesador',
      'Control de procesos',
      'Manejo de dispositivos',
    ],
    respuestaCorrecta: 1,
  },
]

// ───────────────────────── Canvas setup ─────────────────────────
const app = document.querySelector<HTMLDivElement>('#app')!
const canvas = document.createElement('canvas')
app.appendChild(canvas)
const ctx = canvas.getContext('2d')!

let width = 0
let height = 0

function resize(): void {
  const dpr = window.devicePixelRatio || 1
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0) // dibujamos en píxeles CSS
  // Con el loop detenido (quiz / game over) hay que repintar manualmente
  if (state !== 'running') render()
}

// ───────────────────────── Estado global del juego ─────────────────────────
type GameState = 'menu' | 'running' | 'quiz' | 'gameover'
let state: GameState = 'menu' // el juego arranca en el menú de dificultad
let gameOverTitle = ''

// ───────────────────────── Dificultad ─────────────────────────
type Difficulty = 'easy' | 'normal' | 'hard'

interface DifficultyConfig {
  label: string
  multRate: number // cuánto sube el multiplicador de velocidad por segundo
  startMult: number // multiplicador de velocidad inicial
  waveScale: number // >1 = más espacio entre oleadas de obstáculos; <1 = más juntas
  doubleChance: number // probabilidad base de que una oleada traiga 2 obstáculos (nunca 3)
  jumpCooldown: number // segundos tras aterrizar antes de poder volver a saltar
}

const DIFFICULTIES: Record<Difficulty, DifficultyConfig> = {
  easy: { label: 'FÁCIL', multRate: 1 / 70, startMult: 1, waveScale: 1.3, doubleChance: 0.35, jumpCooldown: 0.15 },
  normal: { label: 'NORMAL', multRate: 1 / 45, startMult: 1, waveScale: 1, doubleChance: 0.55, jumpCooldown: 0.35 },
  hard: { label: 'DIFÍCIL', multRate: 1 / 30, startMult: 1.25, waveScale: 0.85, doubleChance: 0.75, jumpCooldown: 0.55 },
}

let difficulty: Difficulty = 'normal'
let cfg: DifficultyConfig = DIFFICULTIES[difficulty]

// ───────────────────────── High Score (localStorage, uno por dificultad) ─────────────────────────
const HIGH_SCORE_KEY = 'out-of-order-runner:highScore'
// "normal" conserva la clave original para no perder récords anteriores
const highScoreKey = (): string => (difficulty === 'normal' ? HIGH_SCORE_KEY : `${HIGH_SCORE_KEY}:${difficulty}`)

function loadHighScore(): number {
  try {
    const v = Number(localStorage.getItem(highScoreKey()))
    return Number.isFinite(v) && v > 0 ? Math.floor(v) : 0
  } catch {
    return 0 // localStorage no disponible (modo privado, etc.)
  }
}

function saveHighScore(value: number): void {
  try {
    localStorage.setItem(highScoreKey(), String(value))
  } catch {
    /* sin persistencia: el juego sigue funcionando */
  }
}

let highScore = loadHighScore()
let newRecord = false
let playerHidden = false // el chip "explota" en un choque letal

// Efecto glitch global al lanzarse el Game Over: dura medio segundo y luego la pantalla queda congelada
const GLITCH_SECONDS = 0.5
let glitchT = 0 // segundos de glitch restantes

// Revives: tras un choque letal, responder 1 pregunta correctamente devuelve al jugador a la partida.
const MAX_REVIVES = 3 // revives por partida (se recargan al pulsar R)
// Vidas = microchips del HUD. Cada choque cuesta uno; al llegar a 0 → pantalla ERROR 404.
// Son MAX_REVIVES + 1 para que sigan existiendo 3 revives: el 4.º choque ya es el definitivo.
const MAX_LIVES = MAX_REVIVES + 1
const REVIVE_INVULN = 1.6 // segundos de invulnerabilidad (el cubo parpadea) tras revivir
const QUIZ_INVULN = 2.5 // segundos de invencibilidad tras contestar bien un token (bonus + subida de velocidad)
let lives = MAX_LIVES
let reviving = false // true mientras el quiz abierto es un quiz de revivir (no de token)
let invuln = 0

// Aislamiento del teclado durante los modales (quiz de token / quiz de revivir)
let isModalOpen = false // true desde que el quiz arranca (incluida la explosión previa) hasta que se cierra del todo
let isAnswering = false // true tras aceptar UNA respuesta: ignora cualquier otra captura hasta cerrar el modal
/** Teclas pulsadas con el modal abierto: el juego las ignora hasta soltarlas (evita saltos "fantasma" al reanudar). */
const modalHeldKeys = new Set<string>()

/** Choque letal: pierde una vida (microchip). Sin vidas → ERROR 404; con vidas → quiz para revivir. */
function crash(): void {
  lives = Math.max(0, lives - 1)
  if (lives <= 0) {
    gameOver('Pipeline detenido: sin vidas', true)
    return
  }
  reviving = true
  const b = player.bounds
  spawnCrashBurst(b.x + b.w / 2, b.y + b.h / 2)
  playerHidden = true
  themeFlash = 0
  phaseBanner.t = 0
  openQuiz() // pausa el loop; el modal aparece tras la explosión
}

/** Respuesta correcta en el quiz de revivir: limpia el peligro cercano y continúa con invulnerabilidad. */
function revive(): void {
  playerHidden = false
  invuln = REVIVE_INVULN
  const px = player.bounds.x
  // Quita los obstáculos que rodean al jugador (incluido el que lo mató) para no morir en el acto
  obstacles = obstacles.filter((o) => o.x + o.w < px - 60 || o.x > px + 320)
  particles = []
  state = 'running'
  startLoop()
}

/** Detiene el loop y muestra el Game Over con el motivo indicado. */
function gameOver(title: string, crashed = false): void {
  state = 'gameover'
  gameOverTitle = title
  cancelAnimationFrame(gameLoopId)
  themeFlash = 0 // sin destellos ni carteles pegados sobre la pantalla de Game Over
  phaseBanner.t = 0

  if (crashed) {
    const b = player.bounds
    spawnCrashBurst(b.x + b.w / 2, b.y + b.h / 2)
    playerHidden = true
  }

  // Compara con el High Score guardado en el navegador
  const final = Math.floor(score)
  newRecord = final > highScore
  if (newRecord) {
    highScore = final
    saveHighScore(final)
  }

  glitchT = GLITCH_SECONDS // arranca el glitch; effectsFrame lo consume y luego congela la imagen
  render()
  startEffectsLoop() // anima partículas y el glitch; la lógica del juego sigue detenida
}

// Multiplicador de velocidad: 1x = 432 px/s, 2x = 864 px/s, 3x = 1296 px/s
const BASE_SPEED = 432
const SPEED_BOOST = 1.12 // +12 % por respuesta correcta
const MULT_CAP_EARLY = 2 // tope mientras el score sea < MULT_UNLOCK_SCORE
const MULT_CAP_LATE = 3 // tope final, solo tras superar MULT_UNLOCK_SCORE
const MULT_UNLOCK_SCORE = 3000
const QUIZ_BONUS = 1000
const QUIZ_MODAL_DELAY_MS = 450 // pausa breve para ver la explosión dorada antes del modal

let speedMult = 1
let speed = BASE_SPEED
let score = 0

/** De 1x a 2x libremente; de 2x a 3x solo después de 3,000 puntos. */
function multCap(): number {
  return score >= MULT_UNLOCK_SCORE ? MULT_CAP_LATE : MULT_CAP_EARLY
}

function setSpeedMult(m: number): void {
  speedMult = Math.min(multCap(), m)
  speed = BASE_SPEED * speedMult
}

// ───────────────────────── Tema de color (cambia cada 500 XP) ─────────────────────────
type RGB = [number, number, number]

interface Palette {
  accent: RGB // jugador, estela, HUD de score
  lane: RGB // carriles neón, cuadrícula, HUD de frecuencia
  bg: [RGB, RGB, RGB] // degradado del sustrato
}

const THEME_STEP_SCORE = 500 // cada 500 XP: cambia el fondo y aparecen más obstáculos
const THEME_FADE_SECONDS = 0.9

/** Nivel actual (0 al inicio, +1 cada 500 XP). Sube la densidad de obstáculos. */
const currentLevel = (): number => Math.floor(score / THEME_STEP_SCORE)

const PALETTES: Palette[] = [
  { accent: [57, 255, 20], lane: [0, 255, 255], bg: [[4, 32, 26], [6, 32, 42], [7, 23, 51]] }, // Matrix
  { accent: [0, 229, 255], lane: [77, 124, 255], bg: [[4, 16, 40], [6, 20, 58], [10, 14, 70]] }, // Hielo
  { accent: [255, 43, 214], lane: [255, 90, 170], bg: [[36, 6, 36], [26, 8, 44], [12, 8, 52]] }, // Plasma
  { accent: [198, 255, 0], lane: [0, 255, 150], bg: [[18, 32, 4], [8, 36, 24], [4, 30, 34]] }, // Tóxico
  { accent: [0, 255, 208], lane: [140, 100, 255], bg: [[4, 34, 38], [10, 24, 56], [26, 12, 66]] }, // Aqua / Ultravioleta
  { accent: [255, 140, 0], lane: [255, 60, 90], bg: [[40, 16, 4], [34, 10, 22], [22, 8, 40]] }, // Overdrive
]

interface Theme {
  accent: RGB
  lane: RGB
  bg: [RGB, RGB, RGB]
}

const copyRGB = (c: RGB): RGB => [c[0], c[1], c[2]]

function clonePalette(p: Palette): Theme {
  return { accent: copyRGB(p.accent), lane: copyRGB(p.lane), bg: [copyRGB(p.bg[0]), copyRGB(p.bg[1]), copyRGB(p.bg[2])] }
}

const mixRGB = (a: RGB, b: RGB, t: number): RGB => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
]
const css = (c: RGB): string => `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`
const rgba = (c: RGB, a: number): string => `rgba(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])}, ${a})`

let theme: Theme = clonePalette(PALETTES[0]) // colores actuales (mezcla en curso)
let themeFrom: Theme = clonePalette(PALETTES[0])
let themeIndex = 0
let themeT = 1 // 0 → 1 durante la transición
let themeFlash = 0 // destello al cambiar de fase (1 → 0)
let phaseBanner = { text: '', t: 0 } // cartel "FASE N" (t: segundos restantes)

function resetTheme(): void {
  theme = clonePalette(PALETTES[0])
  themeFrom = clonePalette(PALETTES[0])
  themeIndex = 0
  themeT = 1
  themeFlash = 0
  phaseBanner = { text: '', t: 0 }
}

function updateTheme(dt: number): void {
  const step = Math.floor(score / THEME_STEP_SCORE)
  const idx = step % PALETTES.length
  if (idx !== themeIndex) {
    themeFrom = clonePalette(theme) // arranca la transición desde lo que se ve ahora
    themeIndex = idx
    themeT = 0
    themeFlash = 1
    phaseBanner = { text: `FASE ${step + 1}  ·  ${step * THEME_STEP_SCORE} XP`, t: 2.2 }  }
  themeT = Math.min(1, themeT + dt / THEME_FADE_SECONDS)
  const e = themeT * themeT * (3 - 2 * themeT) // smoothstep
  const target = PALETTES[themeIndex]
  theme.accent = mixRGB(themeFrom.accent, target.accent, e)
  theme.lane = mixRGB(themeFrom.lane, target.lane, e)
  theme.bg = [
    mixRGB(themeFrom.bg[0], target.bg[0], e),
    mixRGB(themeFrom.bg[1], target.bg[1], e),
    mixRGB(themeFrom.bg[2], target.bg[2], e),
  ]
  themeFlash = Math.max(0, themeFlash - dt / 0.7)
  phaseBanner.t = Math.max(0, phaseBanner.t - dt)
}

// ───────────────────────── Carriles del pipeline ─────────────────────────
const LANE_COUNT = 3
const LANE_RATIOS = [0.38, 0.58, 0.78] // posición vertical (fracción de la altura)

function laneY(index: number): number {
  return height * LANE_RATIOS[index]
}

// ───────────────────────── Jugador ─────────────────────────
class Player {
  readonly width = 44
  readonly height = 44

  lane = 1 // carril actual (0 = arriba, 2 = abajo)
  baseY = 0 // Y "en el suelo" (animada suavemente hacia el carril objetivo)
  jumpOffset = 0 // altura sobre el suelo (>= 0)
  vy = 0 // velocidad vertical del salto (positiva = hacia arriba)
  onGround = true

  // Físicas "Geometry Dash": gravedad alta + impulso fuerte = salto seco, sin sensación flotante.
  // Altura máxima = v² / 2g ≈ 157 px; tiempo en el aire ≈ 0.55 s (antes 0.69 s).
  private readonly gravity = 4200 // px/s² (antes 2600)
  private readonly jumpVelocity = 1150 // px/s (antes 900)
  private readonly laneSmoothing = 18 // mayor = cambio de carril más rápido

  // Rotación visual del cubo
  rotation = 0 // radianes
  private readonly rotationSpeed = 6.4 // rad/s mientras está en el aire (~1/2 vuelta por salto)
  private readonly snapSmoothing = 40 // rapidez del ajuste al múltiplo de 90° al aterrizar

  // Estela (ghosting): últimas posiciones del jugador
  private trail: TrailPoint[] = []
  private trailTimer = 0
  private static readonly TRAIL_LENGTH = 7
  private static readonly TRAIL_INTERVAL = 0.016 // s entre muestras

  constructor() {
    this.baseY = laneY(this.lane)
  }

  get screenX(): number {
    return width * 0.18
  }

  /** Rectángulo de colisión actual. */
  get bounds(): Rect {
    const feetY = this.baseY - this.jumpOffset
    return { x: this.screenX, y: feetY - this.height, w: this.width, h: this.height }
  }

  changeLane(direction: -1 | 1): void {
    this.lane = Math.min(LANE_COUNT - 1, Math.max(0, this.lane + direction))
  }

  /** Segundos que faltan para poder saltar de nuevo (cuenta desde que aterriza). */
  cooldownLeft = 0

  /** 0 = salto listo, 1 = cooldown recién iniciado. */
  get cooldownRatio(): number {
    return cfg.jumpCooldown > 0 ? this.cooldownLeft / cfg.jumpCooldown : 0
  }

  /** Barrita bajo el cubo que se vacía mientras el salto está en cooldown. */
  drawCooldown(g: CanvasRenderingContext2D): void {
    const r = this.cooldownRatio
    if (r <= 0 || !this.onGround) return
    const w = this.width
    const x = this.screenX
    const y = this.baseY + 9
    g.shadowBlur = 0
    g.fillStyle = 'rgba(0, 0, 0, 0.55)'
    g.fillRect(x, y, w, 4)
    g.fillStyle = '#ffb300'
    g.fillRect(x, y, w * r, 4)
  }

  jump(): void {
    if (!this.onGround || this.cooldownLeft > 0) return
    this.vy = this.jumpVelocity
    this.onGround = false
  }

  update(dt: number): void {
    // Movimiento fluido entre carriles (interpolación exponencial, independiente del FPS)
    const target = laneY(this.lane)
    const t = 1 - Math.exp(-this.laneSmoothing * dt)
    this.baseY += (target - this.baseY) * t

    // Física simple de salto
    if (!this.onGround) {
      this.vy -= this.gravity * dt
      this.jumpOffset += this.vy * dt
      if (this.jumpOffset <= 0) {
        this.jumpOffset = 0
        this.vy = 0
        this.onGround = true
        this.cooldownLeft = cfg.jumpCooldown // el cooldown empieza al aterrizar
        this.rotation %= Math.PI * 2 // evita que el ángulo crezca sin límite
      }
    } else if (this.cooldownLeft > 0) {
      this.cooldownLeft = Math.max(0, this.cooldownLeft - dt)
    }

    // Rotación: constante en el aire; en el suelo se ajusta al múltiplo de 90° más cercano
    if (!this.onGround) {
      this.rotation += this.rotationSpeed * dt
    } else {
      const quarter = Math.PI / 2
      const snapped = Math.round(this.rotation / quarter) * quarter
      const k = 1 - Math.exp(-this.snapSmoothing * dt)
      this.rotation += (snapped - this.rotation) * k
      if (Math.abs(snapped - this.rotation) < 0.002) this.rotation = snapped
    }

    // Estela: muestreo por tiempo (independiente del FPS); las muestras se quedan atrás al avanzar el mundo
    for (const p of this.trail) p.age += dt
    this.trailTimer += dt
    while (this.trailTimer >= Player.TRAIL_INTERVAL) {
      this.trailTimer -= Player.TRAIL_INTERVAL
      const b = this.bounds
      this.trail.unshift({ x: b.x + b.w / 2, y: b.y + b.h / 2, rot: this.rotation, age: 0 })
    }
    if (this.trail.length > Player.TRAIL_LENGTH) this.trail.length = Player.TRAIL_LENGTH
  }

  clearTrail(): void {
    this.trail = []
    this.trailTimer = 0
  }

  /** Ghosting: cuadrados translúcidos en las posiciones pasadas, más tenues cuanto más antiguos. */
  drawTrail(g: CanvasRenderingContext2D): void {
    const n = this.trail.length
    for (let i = n - 1; i >= 0; i--) {
      const p = this.trail[i]
      const alpha = 0.32 * (1 - i / (n + 1))
      const px = p.x - p.age * speed // el mundo avanza hacia la izquierda: la estela queda atrás
      const s = 36 * (1 - i * 0.04)
      g.save()
      g.translate(px, p.y)
      g.rotate(p.rot)
      g.globalAlpha = alpha
      g.fillStyle = css(theme.accent)
      g.fillRect(-s / 2, -s / 2, s, s)
      g.strokeStyle = css(mixRGB(theme.accent, [255, 255, 255], 0.6))
      g.lineWidth = 1
      g.strokeRect(-s / 2, -s / 2, s, s)
      g.restore()
    }
  }

  draw(g: CanvasRenderingContext2D): void {
    const { x, y } = this.bounds
    const cx = x + this.width / 2
    const cy = y + this.height / 2

    // Sombra proyectada sobre la placa: se achica y se aclara cuanto más alto salta
    // (no rota: queda pegada al suelo del carril)
    const lift = 1 / (1 + this.jumpOffset / 160)
    g.save()
    g.translate(cx, this.baseY + 5)
    g.scale(1, 0.2)
    const shadow = g.createRadialGradient(0, 0, 2, 0, 0, (this.width / 2 + 6) * lift)
    shadow.addColorStop(0, `rgba(0, 0, 0, ${0.75 * lift})`)
    shadow.addColorStop(0.6, `rgba(0, 0, 0, ${0.4 * lift})`)
    shadow.addColorStop(1, 'rgba(0, 0, 0, 0)')
    g.fillStyle = shadow
    g.beginPath()
    g.arc(0, 0, (this.width / 2 + 6) * lift, 0, Math.PI * 2)
    g.fill()
    g.restore()

    // Todo el chip se dibuja rotado alrededor de su centro: save → translate → rotate → dibujar → restore
    g.save()
    g.translate(cx, cy)
    g.rotate(this.rotation)
    const lx = -this.width / 2 // esquina superior izquierda en coordenadas locales
    const ly = -this.height / 2

    // Patitas metálicas a los lados (4 por lado)
    const bodyX = lx + 6
    const bodyW = this.width - 12
    const bodyY = ly + 2
    const bodyH = this.height - 4
    for (let k = 0; k < 4; k++) {
      const py = bodyY + 5 + k * 9
      for (const side of [-1, 1]) {
        const px = side < 0 ? lx : bodyX + bodyW
        const pin = g.createLinearGradient(0, py, 0, py + 4)
        pin.addColorStop(0, '#f2f5f7')
        pin.addColorStop(1, '#7d8a93')
        g.fillStyle = pin
        g.fillRect(px, py, 6, 4)
      }
    }

    // Cuerpo del encapsulado: cuadrado oscuro con borde neón
    const body = g.createLinearGradient(bodyX, bodyY, bodyX + bodyW, bodyY + bodyH)
    body.addColorStop(0, '#16233a')
    body.addColorStop(1, '#060a12')
    const ac = css(theme.accent) // el color del chip sigue a la fase actual
    g.save()
    g.shadowColor = ac
    g.shadowBlur = 15
    g.fillStyle = body
    g.fillRect(bodyX, bodyY, bodyW, bodyH)
    g.strokeStyle = ac
    g.lineWidth = 2
    g.strokeRect(bodyX, bodyY, bodyW, bodyH)
    g.restore()

    // Marca del pin 1 (esquina)
    g.fillStyle = ac
    g.fillRect(bodyX + 4, bodyY + 4, 3, 3)

    // Círculo central (die) con pulso suave
    const pulse = 0.65 + 0.35 * Math.sin(Date.now() / 220)
    g.strokeStyle = ac
    g.lineWidth = 2
    g.beginPath()
    g.arc(0, bodyY + bodyH / 2, 8, 0, Math.PI * 2)
    g.stroke()
    g.save()
    g.shadowColor = ac
    g.shadowBlur = 15
    g.fillStyle = rgba(theme.accent, pulse)
    g.beginPath()
    g.arc(0, bodyY + bodyH / 2, 3.5, 0, Math.PI * 2)
    g.fill()
    g.restore()

    g.restore() // fin de la rotación
  }
}

interface TrailPoint {
  x: number // centro del cubo en el momento de la muestra
  y: number
  rot: number
  age: number // segundos desde la muestra
}

interface Rect {
  x: number
  y: number
  w: number
  h: number
}

function intersects(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

let player = new Player()

// ───────────────────────── Sistema simple de partículas ─────────────────────────
type ParticleKind = 'circle' | 'shard' | 'binary'

interface Particle {
  kind: ParticleKind
  x: number
  y: number
  vx: number
  vy: number
  gravity: number // px/s²
  life: number // segundos vividos
  maxLife: number
  size: number
  color: string
  rot: number
  vr: number
  char: string
}

let particles: Particle[] = []

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

/** 15 círculos dorados que salen disparados, caen por gravedad y se desvanecen. */
function spawnGoldBurst(x: number, y: number): void {
  for (let i = 0; i < 15; i++) {
    const angle = rand(0, Math.PI * 2)
    const sp = rand(120, 330)
    particles.push({
      kind: 'circle',
      x,
      y,
      vx: Math.cos(angle) * sp,
      vy: Math.sin(angle) * sp - 140, // sesgo hacia arriba
      gravity: 950,
      life: 0,
      maxLife: rand(0.6, 1.0),
      size: rand(2.5, 5),
      color: '#ffd700',
      rot: 0,
      vr: 0,
      char: '',
    })
  }
}

/** Fragmentos rojos + códigos binarios que caen (choque letal). */
function spawnCrashBurst(x: number, y: number): void {
  const reds = ['#ff1a1a', '#ff5555', '#b30000']
  for (let i = 0; i < 14; i++) {
    const angle = rand(0, Math.PI * 2)
    const sp = rand(160, 400)
    particles.push({
      kind: 'shard',
      x,
      y,
      vx: Math.cos(angle) * sp,
      vy: Math.sin(angle) * sp - 160,
      gravity: 1150,
      life: 0,
      maxLife: rand(0.7, 1.2),
      size: rand(5, 10),
      color: reds[i % reds.length],
      rot: rand(0, Math.PI * 2),
      vr: rand(-12, 12),
      char: '',
    })
  }
  for (let i = 0; i < 18; i++) {
    particles.push({
      kind: 'binary',
      x: x + rand(-45, 45),
      y: y + rand(-35, 5),
      vx: rand(-50, 50),
      vy: rand(-90, 30),
      gravity: 430, // caen más despacio que los fragmentos
      life: 0,
      maxLife: rand(1.0, 1.7),
      size: rand(12, 19),
      color: i % 3 === 0 ? '#ff5555' : '#39ff14',
      rot: 0,
      vr: 0,
      char: Math.random() < 0.5 ? '0' : '1',
    })
  }
}

function updateParticles(dt: number): void {
  for (const p of particles) {
    p.life += dt
    p.vy += p.gravity * dt
    p.x += p.vx * dt
    p.y += p.vy * dt
    p.rot += p.vr * dt
  }
  particles = particles.filter((p) => p.life < p.maxLife)
}

function drawParticles(g: CanvasRenderingContext2D): void {
  for (const p of particles) {
    const alpha = Math.max(0, 1 - p.life / p.maxLife) // se desvanece
    g.save()
    g.globalAlpha = alpha
    g.shadowColor = p.color
    g.shadowBlur = p.kind === 'binary' ? 0 : 15 // el texto va sin glow para que no se emborrone
    g.fillStyle = p.color
    if (p.kind === 'circle') {
      g.beginPath()
      g.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      g.fill()
    } else if (p.kind === 'shard') {
      g.translate(p.x, p.y)
      g.rotate(p.rot)
      g.beginPath()
      g.moveTo(-p.size, p.size * 0.6)
      g.lineTo(p.size, 0)
      g.lineTo(-p.size * 0.3, -p.size)
      g.closePath()
      g.fill()
    } else {
      g.font = `bold ${p.size}px ui-monospace, Consolas, monospace`
      g.textAlign = 'center'
      g.textBaseline = 'middle'
      g.fillText(p.char, p.x, p.y)
    }
    g.restore()
  }
}

// ───────────────────────── Token Dorado ─────────────────────────
class GoldenToken {
  readonly size = 32
  x: number
  readonly lane: number

  constructor(lane: number) {
    this.lane = lane
    this.x = width + 40
  }

  get bounds(): Rect {
    // Flota justo sobre la línea del carril: lo alcanza quien corra por ese carril
    return { x: this.x, y: laneY(this.lane) - this.size - 8, w: this.size, h: this.size }
  }

  update(dt: number): void {
    this.x -= speed * dt
  }

  get offscreen(): boolean {
    return this.x + this.size < 0
  }

  /** Disquete de 8 bits que pulsa (escala + opacidad) con una onda seno. */
  draw(g: CanvasRenderingContext2D): void {
    const { x, y, w, h } = this.bounds
    const wave = Math.sin(Date.now() / 200)
    const scale = 1 + 0.08 * wave
    const alpha = 0.85 + 0.15 * wave

    g.save()
    g.translate(x + w / 2, y + h / 2)
    g.scale(scale, scale)
    g.translate(-w / 2, -h / 2)
    g.globalAlpha = alpha

    // Cuerpo (esquina superior derecha cortada, como un floppy real)
    g.shadowColor = '#ffb000'
    g.shadowBlur = 15
    const bodyGrad = g.createLinearGradient(0, 0, 0, h)
    bodyGrad.addColorStop(0, '#ffd23a')
    bodyGrad.addColorStop(1, '#ff8a00')
    g.fillStyle = bodyGrad
    g.beginPath()
    g.moveTo(0, 0)
    g.lineTo(w - 7, 0)
    g.lineTo(w, 7)
    g.lineTo(w, h)
    g.lineTo(0, h)
    g.closePath()
    g.fill()
    g.shadowBlur = 0

    g.strokeStyle = '#8a4b00'
    g.lineWidth = 2
    g.stroke()

    // Obturador metálico con ranura
    g.fillStyle = '#cfd6db'
    g.fillRect(8, 1, 16, 10)
    g.fillStyle = '#4a545b'
    g.fillRect(17, 3, 4, 6)

    // Etiqueta con "líneas de texto" pixeladas
    g.fillStyle = '#fff4d1'
    g.fillRect(5, 17, w - 10, h - 21)
    g.fillStyle = '#d97a00'
    g.fillRect(8, 21, w - 16, 2)
    g.fillRect(8, 25, w - 22, 2)

    g.restore()
  }
}

let token: GoldenToken | null = null
let nextTokenIn = 3 // segundos hasta el próximo token

// ───────────────────────── Obstáculos mortales ─────────────────────────
// 'raw'  → Riesgo RAW: bloque rojo que ocupa el carril (se esquiva cambiando de carril o saltando).
// 'hole' → Branch Misprediction: agujero en el suelo del carril (solo mata si NO estás saltando).
type ObstacleKind = 'raw' | 'hole'

// El charco morado es grande: no basta con saltar "a ciegas" en bucle, hay que cronometrar el salto
// (antes 84×20 con resplandor de 34 px; ahora casi el doble de ancho y mucho más alto).
const HOLE_W = 130 // a 1x el salto cubre ~237 px: 130 + 44 del cubo deja ~60 px de margen
const HOLE_H = 26
const HOLE_GLOW_H = 60 // altura del resplandor letal que sale del charco

class Obstacle {
  readonly kind: ObstacleKind
  readonly lane: number
  readonly w: number
  readonly h: number
  x: number

  constructor(kind: ObstacleKind, lane: number) {
    this.kind = kind
    this.lane = lane
    this.w = kind === 'raw' ? 44 : HOLE_W
    this.h = kind === 'raw' ? 52 : HOLE_H
    this.x = width + 60
  }

  get bounds(): Rect {
    const y = laneY(this.lane)
    // El bloque se apoya sobre la línea del carril; el agujero se hunde por debajo de ella
    return this.kind === 'raw' ? { x: this.x, y: y - this.h, w: this.w, h: this.h } : { x: this.x, y: y - 2, w: this.w, h: this.h }
  }

  update(dt: number): void {
    this.x -= speed * dt // misma velocidad (y multiplicador) que el resto del juego
  }

  get offscreen(): boolean {
    return this.x + this.w < 0
  }

  draw(g: CanvasRenderingContext2D): void {
    if (this.kind === 'raw') this.drawRaw(g)
    else this.drawHole(g)
  }

  /** Riesgo RAW: muro de datos glitch con rayas de advertencia y brillo rojo. */
  private drawRaw(g: CanvasRenderingContext2D): void {
    const { x, y, w, h } = this.bounds
    const t = Date.now()

    // Brillo rojo alrededor del muro
    g.save()
    g.shadowColor = '#ff1a1a'
    g.shadowBlur = 15
    g.fillStyle = '#1a0000'
    g.fillRect(x, y, w, h)
    g.restore()

    // Rayas diagonales amarillo / negro (zona de peligro)
    g.save()
    g.beginPath()
    g.rect(x, y, w, h)
    g.clip()
    g.fillStyle = '#ffd400'
    const stripe = 9
    for (let k = -h; k < w + h; k += stripe * 2) {
      g.beginPath()
      g.moveTo(x + k, y + h)
      g.lineTo(x + k + stripe, y + h)
      g.lineTo(x + k + stripe + h, y)
      g.lineTo(x + k + h, y)
      g.closePath()
      g.fill()
    }
    g.restore()

    // Glitch: franjas desplazadas que parpadean
    const slot = Math.floor(t / 90)
    for (let s = 0; s < 2; s++) {
      const seed = Math.sin(slot * 12.9898 + s * 78.233) * 43758.5453
      const r = seed - Math.floor(seed)
      if (r > 0.55) {
        const sy = y + Math.floor(((r * 997) % 1) * (h - 6))
        const dx = (r - 0.5) * 14
        g.fillStyle = s === 0 ? 'rgba(255, 30, 30, 0.75)' : 'rgba(0, 255, 255, 0.55)'
        g.fillRect(x + dx, sy, w, 3)
      }
    }

    // Placa de texto
    g.fillStyle = 'rgba(0, 0, 0, 0.82)'
    g.fillRect(x + 2, y + h / 2 - 9, w - 4, 18)
    g.shadowBlur = 0 // sin glow al dibujar texto: evita que se emborrone
    g.fillStyle = '#ff3b3b'
    g.font = 'bold 14px ui-monospace, Consolas, monospace'
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillText('RAW', x + w / 2, y + h / 2 + 1)
    g.textAlign = 'start'
    g.textBaseline = 'alphabetic'

    // Borde rojo brillante
    g.save()
    g.shadowColor = '#ff1a1a'
    g.shadowBlur = 15
    g.strokeStyle = '#ff2a2a'
    g.lineWidth = 2
    g.strokeRect(x, y, w, h)
    g.restore()
  }

  /** Branch Misprediction: abismo de datos con bordes del suelo fracturados y brillo púrpura. */
  private drawHole(g: CanvasRenderingContext2D): void {
    const { x, y, w, h } = this.bounds
    const t = Date.now()
    const pulse = 0.75 + 0.25 * Math.sin(t / 260)

    // Resplandor púrpura que emerge del hueco hacia arriba
    const glowH = HOLE_GLOW_H
    const glow = g.createLinearGradient(0, y + 2 - glowH, 0, y + 2)
    glow.addColorStop(0, 'rgba(128, 0, 128, 0)')
    glow.addColorStop(1, `rgba(128, 0, 128, ${0.6 * pulse})`)
    g.fillStyle = glow
    g.fillRect(x - 4, y + 2 - glowH, w + 8, glowH)

    // Perfil fracturado: bordes izquierdo y derecho con picos (de arriba a abajo)
    const ys = [0, 0.2, 0.42, 0.65, 1]
    const insetL = [0, 8, 1, 9, 3]
    const insetR = [3, 9, 1, 8, 0]
    g.beginPath()
    for (let i = 0; i < ys.length; i++) g.lineTo(x + insetL[i], y + ys[i] * h)
    for (let i = ys.length - 1; i >= 0; i--) g.lineTo(x + w - insetR[i], y + ys[i] * h)
    g.closePath()

    // Fondo del abismo: negro con púrpura profundo en el fondo
    const pit = g.createLinearGradient(0, y, 0, y + h)
    pit.addColorStop(0, '#000000')
    pit.addColorStop(1, `rgba(128, 0, 128, ${0.85 * pulse})`)
    g.save()
    g.shadowColor = '#800080'
    g.shadowBlur = 15
    g.fillStyle = pit
    g.fill()
    g.restore()

    // Bordes rotos del suelo (el neón del carril se corta en picos)
    g.save()
    g.shadowColor = css(theme.lane)
    g.shadowBlur = 15
    g.strokeStyle = css(theme.lane)
    g.lineWidth = 2
    g.beginPath()
    for (let i = 0; i < ys.length; i++) g.lineTo(x + insetL[i], y + ys[i] * h)
    g.stroke()
    g.beginPath()
    for (let i = 0; i < ys.length; i++) g.lineTo(x + w - insetR[i], y + ys[i] * h)
    g.stroke()
    g.restore()

    // Esquirlas del suelo roto sobresaliendo a ambos lados
    g.fillStyle = '#0a4d55'
    g.beginPath()
    g.moveTo(x - 7, y + 2)
    g.lineTo(x - 2, y - 6)
    g.lineTo(x + 3, y + 2)
    g.moveTo(x + w - 3, y + 2)
    g.lineTo(x + w + 2, y - 5)
    g.lineTo(x + w + 7, y + 2)
    g.fill()

    // Partículas de datos que suben del abismo
    g.fillStyle = '#c040c0'
    for (let k = 0; k < 8; k++) {
      const life = ((t / 18 + k * 11) % 30) / 30 // 0 → 1
      g.globalAlpha = 1 - life
      g.fillRect(x + 10 + k * ((w - 24) / 7), y + 2 - life * (HOLE_GLOW_H - 6), 3, 3)
    }
    g.globalAlpha = 1
  }
}

let obstacles: Obstacle[] = []
let nextWaveIn = 1.5 // segundos hasta la próxima "oleada" de obstáculos

/** Carril (0-2) cuyo suelo está más cerca de la coordenada Y dada. */
function nearestLane(y: number): number {
  let best = 0
  for (let i = 1; i < LANE_COUNT; i++) {
    if (Math.abs(laneY(i) - y) < Math.abs(laneY(best) - y)) best = i
  }
  return best
}

function hitsObstacle(o: Obstacle): boolean {
  const p = player.bounds
  const forgiving: Rect = { x: p.x + 3, y: p.y + 3, w: p.w - 6, h: p.h - 6 }

  // Riesgo RAW: AABB puro, en CUALQUIER carril. Si el cubo está por encima del bloque no hay
  // choque (salto por encima), pero si lo golpea desde abajo (saltando desde el carril contiguo),
  // desde un lado o aterriza encima de él, muere.
  if (o.kind === 'raw') return intersects(forgiving, o.bounds)

  // Branch Misprediction (abismo)
  if (nearestLane(player.baseY) === o.lane) {
    // Mismo carril: el salto lo cruza sin problema; si el cubo toca el suelo sobre el hueco, cae.
    if (player.jumpOffset > 4) return false
    const inset = 2
    return p.x + p.w > o.x + inset && p.x < o.x + o.w - inset
  }
  // Desde otro carril (por ejemplo, saltando desde abajo): toda la parte morada es letal,
  // tanto el hueco como el resplandor que sale de él.
  const floor = laneY(o.lane)
  const purpleZone: Rect = { x: o.x + 2, y: floor - HOLE_GLOW_H, w: o.w - 4, h: HOLE_GLOW_H + o.h - 2 }
  return intersects(forgiving, purpleZone)
}

/** Oleada segura: como máximo 2 obstáculos en la misma X, siempre queda ≥1 carril libre. */
function spawnWave(): void {
  const lanes = [0, 1, 2].filter((l) => !(token && token.lane === l && token.x > width - 300))
  for (let i = lanes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[lanes[i], lanes[j]] = [lanes[j], lanes[i]]
  }
  // Más obstáculos con la dificultad y con cada nivel (+5 % de oleadas dobles cada 500 XP). NUNCA 3.
  const doubleChance = Math.min(0.92, cfg.doubleChance + 0.05 * currentLevel())
  const count = Math.min(lanes.length, Math.random() < doubleChance ? 2 : 1)
  for (let i = 0; i < count; i++) {
    obstacles.push(new Obstacle(Math.random() < 0.5 ? 'raw' : 'hole', lanes[i]))
  }
}

function updateObstacles(dt: number): void {
  nextWaveIn -= dt
  if (nextWaveIn <= 0) {
    spawnWave()
    // Intervalo 0.75–1.45 s: se acorta con la velocidad, con cada nivel (+7 % de densidad cada 500 XP)
    // y según la dificultad. El suelo (0.7 s, bajando hasta 0.55 s en niveles altos) mantiene el juego justo.
    const mult = speed / BASE_SPEED
    const density = 1 + 0.07 * currentLevel()
    const floorT = Math.max(0.55, 0.7 - 0.03 * currentLevel()) * Math.max(1, cfg.waveScale)
    nextWaveIn = Math.max(floorT, ((0.75 + Math.random() * 0.7) * cfg.waveScale) / Math.sqrt(mult) / density)
  }

  for (const o of obstacles) {
    o.update(dt)
    if (state === 'running' && invuln <= 0 && hitsObstacle(o)) {
      crash()
    }
  }
  obstacles = obstacles.filter((o) => !o.offscreen) // fuera por el borde izquierdo → se elimina
}

function updateToken(dt: number): void {
  if (!token) {
    nextTokenIn -= dt
    if (nextTokenIn <= 0) {
      // No aparece sobre un obstáculo recién generado
      const free = [0, 1, 2].filter((l) => !obstacles.some((o) => o.lane === l && o.x > width - 300))
      if (free.length) token = new GoldenToken(free[Math.floor(Math.random() * free.length)])
    }
    return
  }
  token.update(dt)
  if (intersects(player.bounds, token.bounds)) {
    const tb = token.bounds
    spawnGoldBurst(tb.x + tb.w / 2, tb.y + tb.h / 2) // explosión justo antes de pausar
    token = null
    nextTokenIn = 4 + Math.random() * 3
    openQuiz() // ← interrupción: detiene el game loop y muestra el modal
  } else if (token.offscreen) {
    token = null
    nextTokenIn = 2 + Math.random() * 3
  }
}

// ───────────────────────── Controles ─────────────────────────
// Teclas que eligen respuesta: 1-4, Numpad 1-4 y letras A-D (índice 0-3)
const ANSWER_KEYS: Record<string, number> = {
  Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3,
  Numpad1: 0, Numpad2: 1, Numpad3: 2, Numpad4: 3,
  KeyA: 0, KeyB: 1, KeyC: 2, KeyD: 3,
}

// 1) Guardia del modal. Se registra ANTES que el listener del juego y en fase de captura, y corta la
//    propagación: con el modal abierto el juego no recibe ninguna tecla (salto, carriles ni R).
window.addEventListener(
  'keydown',
  (e) => {
    if (!isModalOpen) return
    e.preventDefault()
    e.stopImmediatePropagation()
    modalHeldKeys.add(e.code)

    // 2) Respuesta por teclado: una sola pulsación válida; las repeticiones y siguientes se descartan
    if (isAnswering) return
    // Navegación: W/S o ↑/↓ mueven la opción resaltada (se permite mantener pulsada la tecla)
    if (e.code === 'KeyW' || e.code === 'ArrowUp') return moveQuizSelection(-1)
    if (e.code === 'KeyS' || e.code === 'ArrowDown') return moveQuizSelection(1)
    if (e.repeat) return
    // Enter confirma la opción resaltada; 1-4 / A-D responden directo
    if (e.code === 'Enter' || e.code === 'NumpadEnter') return answerQuestion(quizSelected)
    const index = ANSWER_KEYS[e.code]
    if (index !== undefined) answerQuestion(index)
  },
  true,
)

window.addEventListener(
  'keyup',
  (e) => {
    if (isModalOpen) {
      e.preventDefault() // evita que Espacio "clique" el botón enfocado al soltarlo
      e.stopImmediatePropagation()
    }
    modalHeldKeys.delete(e.code)
  },
  true,
)
window.addEventListener('blur', () => modalHeldKeys.clear())

window.addEventListener('keydown', (e) => {
  if (isModalOpen) return // defensa extra: nunca interpretar teclas del juego con el modal abierto
  if (modalHeldKeys.has(e.code)) {
    // Tecla pulsada durante el modal y aún sostenida: no cuenta como salto / carril / reinicio
    e.preventDefault()
    return
  }
  if (state === 'menu') {
    // Menú de dificultad: 1/2/3 eligen directo; ↑/↓ mueven la selección; Enter/Espacio confirman
    const digit = ['Digit1', 'Digit2', 'Digit3', 'Numpad1', 'Numpad2', 'Numpad3'].indexOf(e.code)
    let pick = -1
    if (digit !== -1) pick = digit % 3
    else if (e.code === 'Enter' || e.code === 'Space') {
      const focused = menuButtons.indexOf(document.activeElement as HTMLButtonElement)
      pick = focused !== -1 ? focused : DIFFICULTY_ORDER.indexOf(difficulty)
    } else if (['ArrowUp', 'ArrowDown', 'KeyW', 'KeyS'].includes(e.code)) {
      const cur = Math.max(0, menuButtons.indexOf(document.activeElement as HTMLButtonElement))
      const down = e.code === 'ArrowDown' || e.code === 'KeyS'
      const next = (cur + (down ? 1 : menuButtons.length - 1)) % menuButtons.length
      menuButtons[next].focus()
      e.preventDefault()
      return
    }
    if (pick !== -1 && !e.repeat) {
      e.preventDefault()
      modalHeldKeys.add(e.code) // la tecla sostenida no debe saltar al empezar
      startGame(DIFFICULTY_ORDER[pick])
    }
    return
  }
  if (state === 'gameover') {
    if (e.code === 'KeyR') restartGame()
    else if (e.code === 'KeyM') showMenu() // volver al menú para cambiar de dificultad
    return
  }
  if (state === 'quiz') return // sin modal lógico no debería ocurrir; el juego sigue pausado
  switch (e.code) {
    case 'ArrowUp':
    case 'KeyW': // W = carril de arriba
      player.changeLane(-1)
      e.preventDefault()
      break
    case 'ArrowDown':
    case 'KeyS': // S = carril de abajo
      player.changeLane(1)
      e.preventDefault()
      break
    case 'Space':
      player.jump()
      e.preventDefault()
      break
  }
})

// ───────────────────────── Fondo (placa base) ─────────────────────────
let scrollX = 0
// Líneas de velocidad: aparecen y se intensifican cuanto mayor es el multiplicador
interface Streak {
  x: number
  yRatio: number
  len: number
  f: number // factor de velocidad respecto al mundo (parallax)
}
const streaks: Streak[] = Array.from({ length: 26 }, () => ({
  x: Math.random() * 2200,
  yRatio: Math.random(),
  len: 60 + Math.random() * 180,
  f: 1.5 + Math.random() * 1.2,
}))

const GRID_CELL = 40
let gridOffset = 0 // 0 … 4 celdas; avanza a la velocidad exacta del juego

// Pistas de cobre: se generan una sola vez (determinista) como un "tile" que se repite en X.
interface TraceLayer {
  path: Path2D
  tileW: number
  factor: number // fracción de `speed` a la que se desplaza (parallax)
  offset: number
  lineWidth: number
  color: string
  padRadius: number
}

function mulberry32(seed: number): () => number {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Trazados que solo giran en ángulos de 45° y 90°, terminados en pads (círculos). */
function buildTraces(seed: number, count: number, cell: number, cols: number, rows: number, padRadius: number): Path2D {
  const rnd = mulberry32(seed)
  const path = new Path2D()
  const dirs: [number, number][] = [
    [1, 0],
    [1, 1],
    [1, -1],
    [0, 1],
    [0, -1],
  ]
  for (let i = 0; i < count; i++) {
    let gx = Math.floor(rnd() * cols)
    let gy = Math.floor(rnd() * rows)
    path.moveTo(gx * cell + padRadius, gy * cell)
    path.arc(gx * cell, gy * cell, padRadius, 0, Math.PI * 2) // pad inicial
    path.moveTo(gx * cell, gy * cell)
    let prev = -1
    const segments = 3 + Math.floor(rnd() * 4)
    for (let s = 0; s < segments; s++) {
      let d = Math.floor(rnd() * dirs.length)
      if (d === prev) d = (d + 1) % dirs.length
      const len = 1 + Math.floor(rnd() * 5)
      const nx = gx + dirs[d][0] * len
      const ny = gy + dirs[d][1] * len
      if (nx < 0 || nx > cols || ny < 0 || ny > rows) continue // no cruza el borde del tile
      gx = nx
      gy = ny
      prev = d
      path.lineTo(gx * cell, gy * cell)
    }
    path.moveTo(gx * cell + padRadius, gy * cell)
    path.arc(gx * cell, gy * cell, padRadius, 0, Math.PI * 2) // pad final
  }
  return path
}

const traceLayers: TraceLayer[] = [
  // Capa lejana: más fina y tenue, se mueve más lento
  { path: buildTraces(7, 34, 64, 28, 28, 3), tileW: 28 * 64, factor: 0.2, offset: 0, lineWidth: 1, color: 'rgba(176, 124, 52, 0.22)', padRadius: 3 },
  // Capa cercana: más brillante, amarillo cobrizo
  { path: buildTraces(42, 34, 40, 40, 40, 4), tileW: 40 * 40, factor: 0.45, offset: 0, lineWidth: 2, color: 'rgba(222, 160, 60, 0.42)', padRadius: 4 },
]

interface Chip {
  x: number
  yRatio: number
  w: number
  h: number
}

const chips: Chip[] = []
function spawnChip(x: number): Chip {
  return {
    x,
    yRatio: Math.random() * 0.9 + 0.05,
    w: 40 + Math.random() * 70,
    h: 30 + Math.random() * 50,
  }
}
for (let i = 0; i < 14; i++) chips.push(spawnChip(Math.random() * 2000))

function updateBackground(dt: number): void {
  scrollX = (scrollX + speed * dt) % 80
  gridOffset = (gridOffset + speed * dt) % (GRID_CELL * 4)
  for (const s of streaks) {
    s.x -= speed * s.f * dt
    if (s.x + s.len < 0) {
      s.x = width + rand(0, 400)
      s.yRatio = Math.random()
      s.len = rand(60, 240)
    }
  }
  for (const layer of traceLayers) layer.offset = (layer.offset + speed * layer.factor * dt) % layer.tileW
  for (const chip of chips) {
    chip.x -= speed * 0.6 * dt // parallax más lento
    if (chip.x + chip.w < 0) Object.assign(chip, spawnChip(width + Math.random() * 400))
  }
}

function drawBackground(g: CanvasRenderingContext2D): void {
  // El fondo nunca lleva glow
  g.shadowBlur = 0
  g.shadowColor = 'transparent'

  // Sustrato de la placa: verde botella → azul marino
  const pcb = g.createLinearGradient(0, 0, width, height)
  pcb.addColorStop(0, css(theme.bg[0]))
  pcb.addColorStop(0.55, css(theme.bg[1]))
  pcb.addColorStop(1, css(theme.bg[2]))
  g.fillStyle = pcb
  g.fillRect(0, 0, width, height)

  // Cuadrícula fina tipo blueprint: se desplaza a la izquierda a la velocidad del juego
  const cell = GRID_CELL
  g.lineWidth = 1
  g.strokeStyle = rgba(theme.lane, 0.05)
  g.beginPath()
  for (let x = -gridOffset; x < width; x += cell) {
    g.moveTo(Math.round(x) + 0.5, 0)
    g.lineTo(Math.round(x) + 0.5, height)
  }
  for (let y = 0; y < height; y += cell) {
    g.moveTo(0, y + 0.5)
    g.lineTo(width, y + 0.5)
  }
  g.stroke()
  // Líneas mayores cada 4 celdas
  g.strokeStyle = rgba(theme.lane, 0.09)
  g.beginPath()
  for (let x = -gridOffset; x < width; x += cell) {
    const col = Math.round((x + gridOffset) / cell)
    if (col % 4 === 0) {
      g.moveTo(Math.round(x) + 0.5, 0)
      g.lineTo(Math.round(x) + 0.5, height)
    }
  }
  for (let y = 0; y < height; y += cell * 4) {
    g.moveTo(0, y + 0.5)
    g.lineTo(width, y + 0.5)
  }
  g.stroke()

  // Pistas de cobre con parallax (lejana más lenta que cercana)
  for (const layer of traceLayers) {
    g.save()
    g.strokeStyle = layer.color
    g.lineWidth = layer.lineWidth
    g.lineJoin = 'miter'
    for (let ox = -layer.offset; ox < width; ox += layer.tileW) {
      g.save()
      g.translate(ox, 0)
      g.stroke(layer.path)
      g.restore()
    }
    g.restore()
  }

  // Líneas de velocidad: más visibles a medida que sube el multiplicador (1x casi nada → 3x intenso)
  const intensity = Math.max(0, Math.min(1, (speedMult - 1) / (MULT_CAP_LATE - 1)))
  if (intensity > 0.04) {
    const streakColor = mixRGB(theme.lane, [255, 255, 255], 0.55)
    g.lineWidth = 1.5
    for (const s of streaks) {
      const sy = s.yRatio * height
      const grad = g.createLinearGradient(s.x, 0, s.x + s.len, 0)
      grad.addColorStop(0, rgba(streakColor, 0))
      grad.addColorStop(1, rgba(streakColor, 0.12 + 0.4 * intensity))
      g.strokeStyle = grad
      g.beginPath()
      g.moveTo(s.x, sy)
      g.lineTo(s.x + s.len, sy)
      g.stroke()
    }
  }

  // Chips decorativos (SMD con patitas), por detrás de los carriles
  for (const chip of chips) {
    const y = chip.yRatio * height
    const body = g.createLinearGradient(chip.x, y, chip.x, y + chip.h)
    body.addColorStop(0, 'rgba(14, 30, 40, 0.92)')
    body.addColorStop(1, 'rgba(6, 14, 22, 0.92)')
    // patitas
    g.fillStyle = 'rgba(170, 180, 190, 0.25)'
    for (let p = 6; p < chip.w - 4; p += 9) {
      g.fillRect(chip.x + p, y - 4, 4, 4)
      g.fillRect(chip.x + p, y + chip.h, 4, 4)
    }
    g.fillStyle = body
    g.fillRect(chip.x, y, chip.w, chip.h)
    g.strokeStyle = rgba(theme.lane, 0.18)
    g.lineWidth = 1
    g.strokeRect(chip.x + 0.5, y + 0.5, chip.w - 1, chip.h - 1)
    g.fillStyle = rgba(theme.lane, 0.2)
    g.fillRect(chip.x + 4, y + 4, 3, 3) // marca de pin 1
  }
}

function drawLanes(g: CanvasRenderingContext2D): void {
  const labels = ['FETCH', 'EXECUTE', 'WRITE-BACK']
  for (let i = 0; i < LANE_COUNT; i++) {
    const y = laneY(i)

    // Banda tenue del carril
    const band = g.createLinearGradient(0, y - 60, 0, y)
    band.addColorStop(0, rgba(theme.lane, 0))
    band.addColorStop(1, rgba(theme.lane, 0.08))
    g.fillStyle = band
    g.fillRect(0, y - 60, width, 60)

    // Línea principal con efecto neón (el color sigue a la fase actual)
    g.save()
    g.strokeStyle = css(theme.lane)
    g.lineWidth = 3
    g.shadowColor = css(theme.lane)
    g.shadowBlur = 10
    g.beginPath()
    g.moveTo(0, y)
    g.lineTo(width, y)
    g.stroke()
    g.restore()

    // Núcleo blanco fino para dar sensación de tubo de neón
    g.strokeStyle = rgba(mixRGB(theme.lane, [255, 255, 255], 0.8), 0.85)
    g.lineWidth = 1
    g.beginPath()
    g.moveTo(0, y)
    g.lineTo(width, y)
    g.stroke()

    // Marcas que se desplazan a la izquierda para dar sensación de carrera
    g.strokeStyle = rgba(theme.lane, 0.5)
    g.lineWidth = 2
    g.beginPath()
    for (let x = -scrollX; x < width; x += 80) {
      g.moveTo(x, y + 10)
      g.lineTo(x + 20, y + 10)
    }
    g.stroke()

    g.fillStyle = rgba(theme.lane, 0.65)
    g.font = '12px ui-monospace, Consolas, monospace'
    g.fillText(`LANE ${i + 1} · ${labels[i]}`, 12, y + 26)
  }
}

/** Panel estilo cyberpunk con esquinas cortadas y borde neón. */
function hudPanel(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string): void {
  const c = 10
  g.beginPath()
  g.moveTo(x + c, y)
  g.lineTo(x + w, y)
  g.lineTo(x + w, y + h - c)
  g.lineTo(x + w - c, y + h)
  g.lineTo(x, y + h)
  g.lineTo(x, y + c)
  g.closePath()
  g.save()
  g.fillStyle = 'rgba(2, 10, 16, 0.78)'
  g.fill()
  g.shadowColor = color
  g.shadowBlur = 10
  g.strokeStyle = color
  g.lineWidth = 2
  g.stroke()
  g.restore()
}

/** Microchip verde (vida): cuerpo cuadrado, patitas, círculo central. Apagado = vida perdida. */
function drawLifeChip(g: CanvasRenderingContext2D, x: number, y: number, s: number, alive: boolean): void {
  const leg = 3 // largo de las patitas
  const body = s - leg * 2
  const bx = x + leg
  const by = y + leg
  g.save()
  if (alive) {
    g.shadowColor = '#39ff14'
    g.shadowBlur = 8
  }
  const main = alive ? '#39ff14' : 'rgba(120, 140, 130, 0.35)'
  g.fillStyle = alive ? '#0b3d0b' : 'rgba(20, 28, 24, 0.7)'
  g.fillRect(bx, by, body, body)
  g.strokeStyle = main
  g.lineWidth = 1.5
  g.strokeRect(bx, by, body, body)
  // Patitas en los cuatro lados
  g.fillStyle = main
  for (let k = 0; k < 3; k++) {
    const o = bx + 2 + k * ((body - 6) / 2)
    g.fillRect(o, y, 2, leg) // arriba
    g.fillRect(o, by + body, 2, leg) // abajo
    g.fillRect(x, o, leg, 2) // izquierda
    g.fillRect(bx + body, o, leg, 2) // derecha
  }
  // Círculo central
  g.beginPath()
  g.arc(bx + body / 2, by + body / 2, body * 0.24, 0, Math.PI * 2)
  g.fill()
  g.restore()
}

function drawHud(g: CanvasRenderingContext2D): void {
  const mono = 'ui-monospace, Consolas, monospace'
  const pad = 16
  g.textBaseline = 'alphabetic'

  // Arriba a la derecha: SCORE
  const boxW = 190
  const boxH = 86
  const bx = width - boxW - pad
  hudPanel(g, bx, pad, boxW, boxH, css(theme.accent))
  g.textAlign = 'left'
  g.fillStyle = rgba(theme.accent, 0.75)
  g.font = `12px ${mono}`
  g.fillText('SCORE', bx + 14, pad + 22)
  g.shadowBlur = 0 // texto nítido: sin glow
  g.fillStyle = css(mixRGB(theme.accent, [255, 255, 255], 0.65))
  g.font = `bold 28px ${mono}`
  g.fillText(String(Math.floor(score)).padStart(6, '0'), bx + 14, pad + 52)

  // High Score histórico (si el score actual ya lo supera, se muestra el actual)
  const hi = Math.max(highScore, Math.floor(score))
  g.fillStyle = '#ffd700'
  g.font = `bold 13px ${mono}`
  g.fillText(`HI ${String(hi).padStart(6, '0')}`, bx + 14, pad + 74)

  // Vidas: una fila de microchips verdes bajo el score (los perdidos quedan apagados)
  const chipS = 20
  const chipGap = 8
  const rowW = MAX_LIVES * chipS + (MAX_LIVES - 1) * chipGap
  for (let i = 0; i < MAX_LIVES; i++) {
    drawLifeChip(g, bx + boxW - rowW + i * (chipS + chipGap), pad + boxH + 8, chipS, i < lives)
  }
  g.font = `bold 12px ${mono}`
  g.textAlign = 'right'
  g.fillStyle = rgba(theme.accent, 0.75)
  g.fillText(`${cfg.label} · NIVEL ${currentLevel() + 1}`, bx + boxW, pad + boxH + 52)
  g.textAlign = 'left'

  // Arriba a la izquierda: Frecuencia (multiplicador de velocidad actual)
  const freq = (speed / BASE_SPEED).toFixed(1)
  const label = `Frecuencia: ${freq} GHz`
  g.font = `bold 16px ${mono}`
  const fw = g.measureText(label).width + 28
  hudPanel(g, pad, pad, fw, 40, css(theme.lane))
  g.shadowBlur = 0
  g.fillStyle = css(mixRGB(theme.lane, [255, 255, 255], 0.75))
  g.fillText(label, pad + 14, pad + 26)

  // Barra del multiplicador 1x → 3x (marca en 2x; el tramo final se desbloquea con 3,000 XP)
  const barY = pad + 48
  const barH = 8
  const frac = (speedMult - 1) / (MULT_CAP_LATE - 1)
  g.fillStyle = 'rgba(2, 10, 16, 0.78)'
  g.fillRect(pad, barY, fw, barH)
  const barGrad = g.createLinearGradient(pad, 0, pad + fw, 0)
  barGrad.addColorStop(0, css(theme.lane))
  barGrad.addColorStop(1, css(theme.accent))
  g.fillStyle = barGrad
  g.fillRect(pad, barY, fw * Math.min(1, frac), barH)
  g.fillStyle = 'rgba(255, 255, 255, 0.7)'
  g.fillRect(pad + fw * 0.5 - 1, barY - 2, 2, barH + 4) // marca de 2x
  g.strokeStyle = rgba(theme.lane, 0.8)
  g.lineWidth = 1
  g.strokeRect(pad + 0.5, barY + 0.5, fw - 1, barH - 1)
  if (score < MULT_UNLOCK_SCORE) {
    g.font = `11px ${mono}`
    g.fillStyle = rgba(theme.lane, 0.85)
    g.fillText(`3x se desbloquea en ${MULT_UNLOCK_SCORE - Math.floor(score)} XP`, pad, barY + barH + 15)
  } else if (speedMult >= MULT_CAP_LATE - 0.01) {
    g.font = `bold 11px ${mono}`
    g.fillStyle = css(theme.accent)
    g.fillText('VELOCIDAD MÁXIMA 3x', pad, barY + barH + 15)
  }

  // Cartel de nueva fase (cada 250 XP): aparece, se sostiene y se desvanece
  if (phaseBanner.t > 0) {
    const life = 2.2 - phaseBanner.t
    const a = Math.min(1, life / 0.15, phaseBanner.t / 0.6)
    const bw = Math.min(width - 40, 420)
    const by = Math.max(height * 0.2, 190) // debajo del HUD para no taparlo
    g.globalAlpha = a
    g.fillStyle = 'rgba(2, 10, 16, 0.7)'
    g.fillRect(width / 2 - bw / 2, by - 30, bw, 64)
    g.fillStyle = css(theme.accent)
    g.fillRect(width / 2 - bw / 2, by - 30, bw, 3)
    g.fillRect(width / 2 - bw / 2, by + 31, bw, 3)
    g.textAlign = 'center'
    g.font = `bold ${Math.max(18, Math.min(30, width / 34))}px ${mono}`
    g.fillStyle = css(mixRGB(theme.accent, [255, 255, 255], 0.55))
    g.fillText(phaseBanner.text, width / 2, by + 3)
    g.font = `bold 12px ${mono}`
    g.fillStyle = '#ffb300'
    g.fillText('+ OBSTÁCULOS', width / 2, by + 24)
    g.textAlign = 'left'
    g.globalAlpha = 1
  }
}

/** Destello + onda expansiva al cambiar de fase (cada 250 XP). */
function drawPhaseFlash(g: CanvasRenderingContext2D): void {
  if (themeFlash <= 0) return
  const cx = player.screenX + player.width / 2
  const cy = player.baseY - player.height / 2
  const reach = Math.max(width, height)

  const glow = g.createRadialGradient(cx, cy, 0, cx, cy, reach * 0.9)
  glow.addColorStop(0, rgba(theme.accent, 0.38 * themeFlash))
  glow.addColorStop(1, rgba(theme.accent, 0))
  g.fillStyle = glow
  g.fillRect(0, 0, width, height)

  g.strokeStyle = rgba(theme.accent, 0.85 * themeFlash)
  g.lineWidth = 2 + 6 * themeFlash
  g.beginPath()
  g.arc(cx, cy, (1 - themeFlash) * reach * 0.8, 0, Math.PI * 2)
  g.stroke()
}

function drawGameOver(g: CanvasRenderingContext2D): void {
  g.fillStyle = 'rgba(0, 0, 0, 0.78)'
  g.fillRect(0, 0, width, height)

  g.textAlign = 'center'
  g.shadowBlur = 0 // sin glow en los textos del Game Over
  // Título principal: grande, rojo y siempre en una sola línea (se ajusta al ancho disponible)
  const mono = 'ui-monospace, Consolas, monospace'
  const title = 'ERROR 404: INSTRUCCIÓN NO ENCONTRADA'
  let titleSize = Math.min(64, Math.max(16, width * 0.07))
  g.font = `bold ${titleSize}px ${mono}`
  const maxTitleW = width - 32
  const titleW = g.measureText(title).width
  if (titleW > maxTitleW) {
    titleSize = Math.max(12, titleSize * (maxTitleW / titleW))
    g.font = `bold ${titleSize}px ${mono}`
  }
  g.fillStyle = '#ff2a2a'
  g.fillText(title, width / 2, height / 2 - 10)

  // Causa de la derrota, discreta bajo el título
  g.fillStyle = 'rgba(255, 120, 120, 0.75)'
  g.font = `${Math.max(11, Math.min(16, width / 70))}px ${mono}`
  g.fillText(gameOverTitle, width / 2, height / 2 + 14)

  g.fillStyle = '#e8ffe0'
  g.font = `${Math.max(14, Math.min(22, width / 50))}px ui-monospace, Consolas, monospace`
  g.fillText(`Score Final: ${Math.floor(score)} - R: reiniciar · M: menú`, width / 2, height / 2 + 40)

  g.fillStyle = '#ffd700'
  g.fillText(`High Score (${cfg.label}): ${highScore}`, width / 2, height / 2 + 74)
  if (newRecord) {
    g.font = `bold ${Math.max(16, Math.min(26, width / 40))}px ui-monospace, Consolas, monospace`
    g.fillText('¡NUEVO RÉCORD!', width / 2, height / 2 + 112)
  }
  g.textAlign = 'start'
}

// ───────────────────────── Quiz (modal HTML) ─────────────────────────
const modal = document.querySelector<HTMLDivElement>('#quiz-modal')!
const quizTitle = document.querySelector<HTMLHeadingElement>('#quiz-title')!
const quizQuestion = document.querySelector<HTMLParagraphElement>('#quiz-question')!
const quizCounter = document.querySelector<HTMLSpanElement>('#quiz-counter')!
const optionButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('#quiz-options button'))

// Opción resaltada del quiz (0-3), controlada por teclado (W/S, ↑/↓) o por el mouse
let quizSelected = 0

function setQuizSelection(i: number): void {
  quizSelected = ((i % optionButtons.length) + optionButtons.length) % optionButtons.length
  optionButtons.forEach((btn, k) => btn.classList.toggle('is-selected', k === quizSelected))
  optionButtons[quizSelected].focus()
}

function moveQuizSelection(delta: number): void {
  setQuizSelection(quizSelected + delta)
}

let unanswered: number[] = questionBank.map((_, i) => i)
let currentQuestion: Question | null = null
let currentCorrectIndex = 0 // posición (0-3) de la respuesta correcta tras revolver las opciones

/** Fisher-Yates: devuelve una copia desordenada del arreglo. */
function shuffled<T>(items: readonly T[]): T[] {
  const a = items.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickQuestion(): Question {
  if (unanswered.length === 0) unanswered = questionBank.map((_, i) => i) // banco agotado: se rebaraja
  const pos = Math.floor(Math.random() * unanswered.length)
  const [index] = unanswered.splice(pos, 1)
  return questionBank[index]
}

let quizTimerId = 0

function openQuiz(): void {
  state = 'quiz'
  isModalOpen = true // desde ya el teclado queda aislado del juego
  isAnswering = false
  cancelAnimationFrame(gameLoopId) // detiene el game loop inmediatamente
  startEffectsLoop() // solo anima la explosión dorada; la lógica del juego sigue detenida

  // El modal aparece un instante después para que se vea la explosión
  window.clearTimeout(quizTimerId)
  quizTimerId = window.setTimeout(() => {
    if (state !== 'quiz') return
    const question = pickQuestion()
    currentQuestion = question
    const answered = questionBank.length - unanswered.length
    quizCounter.textContent = reviving
      ? `REVIVE ${MAX_LIVES - lives}/${MAX_REVIVES}` // lives ya descontó el choque actual
      : `PREGUNTA ${answered}/${questionBank.length}`
    quizTitle.textContent = reviving ? '> SISTEMA CAÍDO: RESPONDE PARA REVIVIR_' : '> INTERRUPCIÓN DE HARDWARE_'
    quizQuestion.textContent = question.pregunta
    // Las opciones se revuelven cada vez que sale la pregunta; se recalcula dónde quedó la correcta
    const order = shuffled([0, 1, 2, 3]) // order[i] = índice original de la opción mostrada en la posición i
    currentCorrectIndex = order.indexOf(question.respuestaCorrecta)
    optionButtons.forEach((btn, i) => {
      btn.textContent = `${'ABCD'[i]}) ${question.opciones[order[i]]}`
    })

    modal.classList.remove('hidden')
    setQuizSelection(0) // la primera opción queda resaltada; W/S o ↑/↓ + Enter para elegir
  }, QUIZ_MODAL_DELAY_MS)
}

function closeQuiz(): void {
  modal.classList.add('hidden')
  ;(document.activeElement as HTMLElement | null)?.blur()
}

function answerQuestion(index: number): void {
  // Una sola respuesta por modal: si ya hay una en curso (doble tecla, tecla + clic...) se descarta
  if (!isModalOpen || isAnswering || state !== 'quiz' || !currentQuestion) return
  isAnswering = true
  const correct = index === currentCorrectIndex
  const wasRevive = reviving
  reviving = false
  currentQuestion = null
  closeQuiz()

  if (correct && wasRevive) {
    revive() // sin bonus de puntos ni boost: solo se recupera la partida
  } else if (correct) {
    score += QUIZ_BONUS
    setSpeedMult(speedMult * SPEED_BOOST) // boost por eficiencia (respeta el tope 2x / 3x)
    // El bonus acelera el juego y los obstáculos ya en pantalla llegan más rápido de lo esperado:
    // unos segundos de invencibilidad (el cubo parpadea) dan tiempo de reaccionar.
    invuln = Math.max(invuln, QUIZ_INVULN)
    state = 'running'
    startLoop()
  } else {
    gameOver('Respuesta incorrecta') // loop detenido hasta pulsar R
  }

  // El modal ya está cerrado del todo: recién ahora se libera el teclado y se acepta otra respuesta
  isModalOpen = false
  isAnswering = false
}

optionButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => answerQuestion(i))
  btn.addEventListener('mouseenter', () => !isAnswering && setQuizSelection(i)) // el mouse y el teclado comparten selección
})

// ───────────────────────── Reinicio ─────────────────────────
/** Cancela todo bucle y temporizador vivo (juego, partículas, menú y apertura de quiz). */
function stopEverything(): void {
  if (gameLoopId) cancelAnimationFrame(gameLoopId)
  if (particleLoopId) cancelAnimationFrame(particleLoopId)
  if (menuLoopId) cancelAnimationFrame(menuLoopId)
  gameLoopId = 0
  particleLoopId = 0
  menuLoopId = 0
  window.clearTimeout(quizTimerId) // por si quedaba pendiente la apertura del modal
  closeQuiz()
  currentQuestion = null
  isModalOpen = false
  isAnswering = false
}

function restartGame(): void {
  // 1) Limpieza estricta ANTES de resetear nada: ningún bucle ni temporizador viejo puede quedar vivo
  stopEverything()
  // 2) Reset de variables
  resetRun()
  state = 'running'

  // 3) Un único bucle nuevo
  startLoop()
}

/** Deja todas las variables de la partida en su estado inicial (usa la dificultad elegida). */
function resetRun(): void {
  score = 0
  setSpeedMult(cfg.startMult)
  resetTheme()
  token = null
  nextTokenIn = 3
  obstacles = []
  nextWaveIn = 1.5
  particles = []
  playerHidden = false
  lives = MAX_LIVES
  glitchT = 0
  reviving = false
  invuln = 0
  newRecord = false
  gridOffset = 0
  unanswered = questionBank.map((_, i) => i)
  player = new Player() // estela y rotación nacen vacías
}

// ───────────────────────── Menú de inicio (dificultad) ─────────────────────────
const menuEl = document.querySelector<HTMLDivElement>('#menu')!
const menuButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('#menu button'))
const DIFFICULTY_ORDER: Difficulty[] = ['easy', 'normal', 'hard']
let menuLoopId = 0
let menuLastTime = 0

function menuFrame(now: number): void {
  if (state !== 'menu') return
  const dt = Math.max(0, Math.min((now - menuLastTime) / 1000, 0.05))
  menuLastTime = now
  updateBackground(dt) // el fondo sigue corriendo detrás del menú
  updateTheme(dt)
  render()
  menuLoopId = requestAnimationFrame(menuFrame)
}

function showMenu(): void {
  stopEverything()
  resetRun()
  state = 'menu'
  menuEl.classList.remove('hidden')
  menuButtons[DIFFICULTY_ORDER.indexOf(difficulty)]?.focus() // vuelve a marcar la última dificultad
  menuLastTime = performance.now()
  menuLoopId = requestAnimationFrame(menuFrame)
}

function startGame(d: Difficulty): void {
  difficulty = d
  cfg = DIFFICULTIES[d]
  highScore = loadHighScore() // cada dificultad guarda su propio récord
  menuEl.classList.add('hidden')
  ;(document.activeElement as HTMLElement | null)?.blur()
  restartGame()
}

menuButtons.forEach((btn, i) => btn.addEventListener('click', () => state === 'menu' && startGame(DIFFICULTY_ORDER[i])))

// ───────────────────────── Render y game loop ─────────────────────────
function render(): void {
  ctx.clearRect(0, 0, width, height)
  ctx.shadowBlur = 0 // estado limpio: el glow lo activa cada elemento por su cuenta
  drawBackground(ctx)
  drawLanes(ctx)
  for (const o of obstacles) o.draw(ctx)
  token?.draw(ctx)
  if (!playerHidden) {
    // Tras revivir el cubo parpadea mientras es invulnerable
    ctx.globalAlpha = invuln > 0 && Math.floor(invuln * 12) % 2 === 0 ? 0.3 : 1
    player.drawTrail(ctx)
    player.draw(ctx)
    ctx.globalAlpha = 1
    if (state === 'running') player.drawCooldown(ctx)
  }
  ctx.shadowBlur = 0
  drawParticles(ctx)
  ctx.shadowBlur = 0
  drawPhaseFlash(ctx)
  if (state !== 'menu') drawHud(ctx)
  if (state === 'gameover') drawGameOver(ctx)
  if (state === 'gameover' && glitchT > 0) applyGlitch(ctx) // post-proceso sobre TODO el dibujo
}

/**
 * Glitch global del Game Over (0.5 s): desplaza franjas horizontales del canvas a izquierda/derecha
 * y dibuja estática roja. Trabaja en píxeles de dispositivo sobre la imagen ya renderizada.
 */
function applyGlitch(g: CanvasRenderingContext2D): void {
  const k = Math.max(0, Math.min(1, glitchT / GLITCH_SECONDS)) // 1 al inicio → 0 al final
  const power = 0.35 + 0.65 * k
  const W = canvas.width
  const H = canvas.height
  const dpr = W / width
  const rand = (a: number, b: number): number => a + Math.random() * (b - a)

  g.save()
  g.setTransform(1, 0, 0, 1, 0, 0)
  g.shadowBlur = 0
  g.globalAlpha = 1

  // 1) Franjas desplazadas: se copia una tira de la propia imagen unos píxeles a un lado
  const strips = Math.round(8 + 16 * power)
  for (let i = 0; i < strips; i++) {
    const sh = Math.max(2, Math.floor(rand(4, 56) * dpr))
    const sy = Math.floor(rand(0, Math.max(1, H - sh)))
    const dx = Math.round(rand(-1, 1) * (8 + 34 * power) * dpr)
    g.drawImage(canvas, 0, sy, W, sh, dx, sy, W, sh)
  }

  // 2) Tinte rojo leve + bandas rojas horizontales
  g.fillStyle = `rgba(255, 0, 40, ${0.07 * power})`
  g.fillRect(0, 0, W, H)
  for (let i = 0; i < 3; i++) {
    g.fillStyle = `rgba(255, 20, 20, ${rand(0.12, 0.3) * power})`
    g.fillRect(0, rand(0, H), W, rand(2, 7) * dpr)
  }

  // 3) Estática roja: motas sueltas y pequeños trazos horizontales
  const specks = Math.round(260 + 520 * power)
  for (let i = 0; i < specks; i++) {
    const wide = Math.random() < 0.25
    g.fillStyle = `rgba(255, ${Math.floor(rand(0, 70))}, ${Math.floor(rand(0, 70))}, ${rand(0.35, 0.95)})`
    g.fillRect(rand(0, W), rand(0, H), (wide ? rand(6, 30) : rand(1, 3)) * dpr, rand(1, 2.5) * dpr)
  }
  g.restore()
}

let gameLoopId = 0
let lastTime = 0

function frame(now: number): void {
  if (state !== 'running') return // red de seguridad: un callback rezagado nunca debe mover el juego
  // Tope superior: evita saltos al cambiar de pestaña. Tope inferior: el timestamp de rAF puede ser
  // ligeramente anterior al performance.now() con el que se reinició `lastTime` tras una pausa.
  const dt = Math.max(0, Math.min((now - lastTime) / 1000, 0.05))
  lastTime = now

  // El multiplicador sube solo con el tiempo (1x → 2x; hasta 3x solo tras 3,000 puntos)
  setSpeedMult(speedMult + cfg.multRate * dt)

  updateBackground(dt)
  updateParticles(dt)
  player.update(dt)
  invuln = Math.max(0, invuln - dt)
  score += dt * 50
  updateTheme(dt) // cambia la paleta cada 500 XP
  updateObstacles(dt) // puede cambiar `state` a 'gameover' y cancelar el loop
  if (state === 'running') updateToken(dt) // puede cambiar `state` a 'quiz' y cancelar el loop

  render()

  if (state === 'running') gameLoopId = requestAnimationFrame(frame)
}

// Bucle de efectos: solo mueve partículas mientras el juego está en Game Over
// (la lógica del juego sigue detenida hasta pulsar R).
let particleLoopId = 0
let fxLastTime = 0

function effectsFrame(now: number): void {
  const dt = Math.max(0, Math.min((now - fxLastTime) / 1000, 0.05))
  fxLastTime = now
  updateParticles(dt)
  updateTheme(dt) // deja terminar el destello / la transición de color si estaban en curso
  glitchT = Math.max(0, glitchT - dt) // al llegar a 0 el último render sale limpio: pantalla congelada
  render()
  const animating = particles.length > 0 || glitchT > 0
  if ((state === 'gameover' || state === 'quiz') && animating) particleLoopId = requestAnimationFrame(effectsFrame)
}

function startEffectsLoop(): void {
  cancelAnimationFrame(particleLoopId)
  fxLastTime = performance.now()
  particleLoopId = requestAnimationFrame(effectsFrame)
}

function startLoop(): void {
  cancelAnimationFrame(particleLoopId)
  cancelAnimationFrame(gameLoopId)
  lastTime = performance.now() // reinicia el reloj: sin saltos bruscos ni colisiones letales tras el quiz / R
  gameLoopId = requestAnimationFrame(frame)
}

window.addEventListener('resize', resize)
resize()
showMenu() // el juego arranca en el menú; startGame() lanza la partida
