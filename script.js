const NUMERO_WHATSAPP = "584242515196";
const MENSAJE_PREDETERMINADO = "Hola, estoy interesado en comprar el siguiente producto:%0A%0A";

const especificacionesProductos = {
    producto1: {
        id: "producto1",
        titulo: "Lápiz genérico universal para Android, Windows y iOS",
        precio: "$12.00",
        imagenes: [
            "5008172334224969068_119.jpg",
            "5008172334224969069_119.jpg",
        ],
        specs: [
            { nombre: "Marca", valor: "Genérica" },
            { nombre: "Compatibilidad", valor: "Android, Windows y iOS mediante bluetooth" },
            { nombre: "Funciones", valor: "Dibujo, escritura, toma de notas y navegacion táctil" },
            { nombre: "Batería", valor: "3-4 horas aproximadamente" },
            { nombre: "Incluye", valor: "Cable de carga tipo C y manual instructivo" },
            { nombre: "Colores disponibles", valor: "Blanco" }
        ]
    },
    producto2: {
        id: "producto2",
        titulo: "Control inalámbrico Gamepad X3",
        precio: "$20.00",
        imagenes: [
            "5008172334224969073_119.jpg",
            "5008172334224969071_119.jpg",
            "5008172334224969072_119.jpg",
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "Android, Windows y iOS" },
            { nombre: "Distancia", valor: "8 metros aproximadamente de conexión estable" },
            { nombre: "Incluye", valor: "Cable de carga tipo Micro USB, soporte para el teléfono y manual instructivo" }
        ]
    },
    producto3: {
        id: "producto3",
        titulo: "Fan cooler ajustable con gatillos gamer para teléfonos",
        precio: "$28.00",
        imagenes: [
            "5008172334224969080_119.jpg",
            "5008172334224969079_119.jpg",
            "5008172334224969078_119.jpg",
            "5008172334224969081_119.jpg",
        ],
        specs: [
            { nombre: "Funciones", valor: "Enfriamiento por ventilador de 3 velocidades y gatillos para disparo" },
            { nombre: "Incluye", valor: "Estuche protector, cable de carga tipo Micro USB y manual instructivo" },
            { nombre: "Colores disponibles", valor: "Negro con luces rgb" }
        ]
    },
    producto4: {
        id: "producto4",
        titulo: "Máquina de afeitar Kemei KM-1102",
        precio: "$28.00",
        imagenes: [
            "5008172334224969092_119.jpg",
            "5008172334224969088_119.jpg",
            "5008172334224969091_119.jpg",
            "5008172334224969089_119.jpg",
            "5008172334224969090_119.jpg",
        ],
        specs: [
            { nombre: "Funciones", valor: "Rasurado de cabeza (efecto calvo), perfilado de barba, patillas y bigote (incluye recortadora desplegable)" },
            { nombre: "Uso sugerido o tipo de piel", valor: "Apto para todo tipo de piel" },
            { nombre: "Voltaje y potencia", valor: "AC 110-220V (50/60Hz), 3W" },
            { nombre: "Incluye", valor: "Cable de carga, cepillo de limpieza, tapa protectora y funda de tela" },
            { nombre: "Tiempo de carga", valor: "7-8 horas aproximadamente" }
        ]
    },
    producto5: {
        id: "producto5",
        titulo: "Par de gatillos ajustables para teléfono con estuche protector",
        precio: "$6.00",
        imagenes: [
            "5064453224894500182_119.jpg"
        ],
        specs: [
            { nombre: "Cantidad", valor: "Cada estuche incluye 2 gatillos (1 par)" },
            { nombre: "Incluye", valor: "Estuche protector" },
            { nombre: "Colores disponibles", valor: "Gris" }
        ]
    },
    producto6: {
        id: "producto6",
        titulo: "Billetera de semicuero para caballero",
        precio: "$8.00",
        imagenes: [
            "5015185264200060166_119.jpg",
            "5015185264200060167_119.jpg",
            "5015185264200060169_119.jpg",
            "5015185264200060168_119.jpg",
        ],
        specs: [
            { nombre: "Material", valor: 'Semicuero' },
            { nombre: "Colores disponibles", valor: "Negro y Marrón" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
    producto7: {
        id: "producto7",
        titulo: "Cargador completo tipo C a C de 25W",
        precio: "$10.00",
        imagenes: [
            "5008172334224969094_119.jpg",
            "5008172334224969093_119.jpg",
        ],
        specs: [
            { nombre: "Función", valor: "Cargador completo (Taco y cable) de 1 metro con entrada y salida Tipo C-C de 25W" }
        ]
    },
    producto8: {
        id: "producto8",
        titulo: "Audífonos alámbricos (cableado) AK6",
        precio: "$10.00",
        imagenes: [
            "5008172334224969083_119.jpg",
            "5008172334224969082_119.jpg",
        ],
        specs: [
            { nombre: "Longitud del cable", valor: "Casi 1 metro aproximadamente" },
            { nombre: "Entrada", valor: "Tipo jack" },
            { nombre: "Incluye", valor: "Gomitas de respuestos, protector de oreja y estuche" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
    producto9: {
        id: "producto9",
        titulo: "Forro impermeable para teléfono",
        precio: "$4.00",
        imagenes: [
            "5064453224894500183_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: 'Universal' },
            { nombre: "Funciones", valor: "Protección contra agua (impermeable) polvo y arena, uso táctil de la pantalla a través del estuche" },
            { nombre: "Incluye", valor: "Colgante" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
    producto10: {
        id: "producto",
        titulo: "Plancha de aguacate Remington Shine Therapy",
        precio: "$40.00",
        imagenes: [
            ".jpg",
            ".jpg",
        ],
        specs: [
            { nombre: "Marca", valor: 'Remington Shine Therapy genérica AAA' },
            { nombre: "Funciones", valor: 'Alisado y modelado de cabello, aportando brillo, suavidad y sedosidad' },
            { nombre: "Control de temperatura", valor: "Pantalla digital con ajuste de temperatura regulable (150 °C, 230 °C / 300 °F, 450 °F)" },
            { nombre: "Temperatura máxima", valor: " Hasta 230 °C / 450 °F" },
            { nombre: "Tecnología de placas", valor: "Placas de cerámica avanzada con microacondicionadores de Vitamina E, aceite de aguacate y macadamia" },
            { nombre: "Cable", valor: "Giratorio" },
            { nombre: "Colores disponibles", valor: "Verde" }
        ]
    },
    producto11: {
        id: "producto11",
        titulo: "Forros transparentes con MagSafe para IPhone",
        precio: "$5.00",
        imagenes: [
            ".jpg",
            ".jpg",
        ],
        specs: [
            { nombre: "Modelos", valor: '12, 12 Pro, 12 Pro Max, 13, 13 Pro, 13 Pro Max, 14, 14 Pro, 14 Pro Max, 15, 15 Pro, 15 Pro Max, 16, 16 Pro, 16 Pro Max' },
            { nombre: "Material", valor: "Silicona" },
        ]
    },

    producto12: {
        id: "producto12",
        titulo: "Tensiómetro digital",
        precio: "$10.00",
        imagenes: [
            "5008172334224969083_119.jpg",
            "5008172334224969082_119.jpg",
        ],
        specs: [
            { nombre: "Precisión", valor: "±1 mmHg" },
            { nombre: "Pantalla", valor: "LCD de 1.5\" con retroiluminación" },
            { nombre: "Batería", valor: "2 pilas AAA" },
            { nombre: "Conexión", valor: "Bluetooth 5.0" },
        ]
    },
    producto13: {
        id: "producto13",
        titulo: "Audífonos inalámbricos M25",
        precio: "$10.00",
        imagenes: [

        ],
        specs: [
            { nombre: "Conectividad", valor: "Bluetooth 5.3 y alcance de transmisión de hasta 10 metros aproximadamente" },
            { nombre: "Pantalla del estuche", valor: "Pantalla con acabado mate que indica el porcentaje de batería" },
            { nombre: "Duración", valor: "3-4 horas de reproducción continua aproximadamente" },
            { nombre: "Tiempo de carga", valor: "2 horas" },
            { nombre: "Incluye", valor: "Cable de carga tipo C" },
        ]
    },
    producto14: {
        id: "producto14",
        titulo: "Tensiómetro digital",
        precio: "$10.00",
        imagenes: [
            "5008172334224969083_119.jpg",
            "5008172334224969082_119.jpg",
        ],
        specs: [
            { nombre: "Precisión", valor: "±1 mmHg" },
            { nombre: "Pantalla", valor: "LCD de 1.5\" con retroiluminación" },
            { nombre: "Batería", valor: "2 pilas AAA" },
            { nombre: "Conexión", valor: "Bluetooth 5.0" },
        ]
    },

    producto15: {
        id: "producto15",
        titulo: "Mini aspiradora recargable 3 en 1",
        precio: "$10.00",
        imagenes: [
            "5064453224894500189_119.jpg",
            "5064453224894500190_119.jpg",
        ],
        specs: [
            { nombre: "Uso", valor: "En automóviles, hogar, oficina y limpíeza de teclados o espacios reducidos" },
            { nombre: "Función", valor: "Aspirado de polvo/suciedad, soplado de aire y cepillado" },
            { nombre: "Incluye", valor: "Cable de carga Tipo C y manual instructivo" },
        ]
    },

    producto16: {
        id: "producto16",
        titulo: "Pechera para motorizdos",
        precio: "$15.00",
        imagenes: [
            "5064453224894500198_121.jpg",
            "5064453224894500199_121.jpg",
        ],
        specs: [
            { nombre: "Compartimientos", valor: "3 delante y 1 detrás para un total de 4 compartimientos" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
    producto17: {
        id: "producto17",
        titulo: "Repetidor de wifi",
        precio: "$12.00",
        imagenes: [
            "5064453224894500212_119.jpg",
            "5064453224894500213_119.jpg",
            "5064453224894500214_119.jpg",
            "5064453224894500215_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "Wi-Fi de 2.4 GHz" },
        ]
    },
    producto18: {
        id: "producto18",
        titulo: "Set de téclado y mouse gamer",
        precio: "$16.00",
        imagenes: [
            "5064453224894500193_119.jpg",
            "5064453224894500192_119.jpg",
            "5064453224894500194_119.jpg",
            "5064453224894500191_119.jpg"
        ],
        specs: [
            { nombre: "Entrada", valor: "USB" },
            { nombre: "Iluminación", valor: "Luces RGB  de colores fijos en teclado y dinámicos en mouse" },
            { nombre: "Idioma", valor: "Inglés" }
        ]
    },
    producto19: {
        id: "producto19",
        titulo: "Set de teclado inalámbrico y mouse de baterías",
        precio: "$12.00",
        imagenes: [
            "5055546244406643967_119.jpg",
            "5055546244406643966_119.jpg",
            "5055546244406643968_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "Android, Windows y IOS" },
            { nombre: "Funciones", valor: "Estritura, navegación, atajos multimedia y productividad" },
            { nombre: "Batería", valor: "Teclado recargable y mouse de pilas AAA" },
            { nombre: "Tiempo de carga del teclado", valor: "2-3h aproximadamente, con cable cargador tipo C (incluido)" },
        ]
    },
    producto20: {
        id: "producto20",
        titulo: "Picatodo recargable mini",
        precio: "$10.00",
        imagenes: [
            "5064453224894500184_119.jpg",
            "5064453224894500185_119.jpg",
            "5064453224894500186_119.jpg"
        ],
        specs: [
            { nombre: "Capacidad", valor: "250ml" },
            { nombre: "Cuchillas", valor: "3 láminas de acero inoxidable" },
            { nombre: "Carga", valor: "Recargable mediante cable de carga Micro USB (incluido)" }
        ]
    },
    producto21: {
        id: "producto21",
        titulo: "Audífonos alambricos gamer K19",
        precio: "$28.00",
        imagenes: [
            "5055546244406643976_119.jpg",
            "5055546244406643977_119.jpg",
            "5055546244406643979_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "PC, laptops, consolas o dispositivos con entrada 3.5mm" },
            { nombre: "Diseño", valor: "Gamer con iluminación LED, cable reforzado de 1.5 metros, micrófono con cancelación de ruido y control de volumen" },
            { nombre: "Incluye", valor: "Adaptador y manual de usuario" }
        ]
    },
    producto22: {
        id: "producto22",
        titulo: "Audífonos inalámbricos P9 plus",
        precio: "$12.00",
        imagenes: [
            "5055546244406643972_119.jpg",
            "5055546244406643974_119.jpg",
            "5055546244406643973_119.jpg",
        ],
        specs: [
            { nombre: "Conectividad", valor: "Bluetooth" },
            { nombre: "Diseño", valor: "Formal con almohadilla suaves y acolchonadas para la cabeza y orejas" },
            { nombre: "Batería", valor: "3-4 horas de reproducción aproximadamente" },
            { nombre: "Incluye", valor: "Cable de carga Tipo C" },
        ]
    },
    producto23: {
        id: "producto23",
        titulo: "Nivel con láser 3 en 1",
        precio: "$16.00",
        imagenes: [
            "5055546244406643971_119.jpg",
            "5055546244406643969_119.jpg",
            "5055546244406643970_119.jpg"
        ],
        specs: [
            { nombre: "Funciones", valor: "Nivel de burbuja y láser, contiene metro de 2.5 metros, regla en centímetros (15 cm) y pulgadas (6\")" },
            { nombre: "Incluye", valor: "Par de pilas AAA y trípode" },
        ]
    },
        producto24: {
        id: "producto24",
        titulo: "Dedales de tela gamer",
        precio: "$1.00",
        imagenes: [
            "5064453224894500209_119.jpg",
            "5064453224894500210_119.jpg"
        ],
        specs: [
            { nombre: "Cantidad", valor: "Cada sobre incluye 2 dedales (1 par)" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
        producto25: {
        id: "producto25",
        titulo: "Resma HP de 500 hojas blancas",
        precio: "$8.00",
        imagenes: [

        ],
        specs: [
            { nombre: "Marca", valor: "HP" },
            { nombre: "Cantidad", valor: "500 hojas blancas por resma" }
        ]
    },    
        producto26: {
        id: "producto26",
        titulo: "Regleta USB de 7 puertos 3.0",
        precio: "$15.00",
        imagenes: [
            "5064453224894500187_119.jpg",
            "5064453224894500188_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "Windows, MacOS, Linux y con dispositivos USB 2.0 y 1.1" },
            { nombre: "Funciones", valor: "Expansión de un puerto a 7 de 3.0" },
            { nombre: "Contiene", valor: "Interruptor de encendido/apagado independientes" }
        ]
    },
        producto27: {
        id: "producto27",
        titulo: "Regleta USB de 7 puertos 3.0",
        precio: "$15.00",
        imagenes: [
            "5064453224894500187_119.jpg",
            "5064453224894500188_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "Windows, MacOS, Linux y dispositivos USB 2.0 y 1.1" },
            { nombre: "Funciones", valor: "Expansión de un puerto a 7 de 3.0" },
            { nombre: "Contiene", valor: "Interruptor de encendido/apagado independientes" }
        ]
    },
        producto28: {
        id: "producto28",
        titulo: "Regleta USB de 7 puertos 3.0",
        precio: "$14.00",
        imagenes: [
            "5064453224894500187_119.jpg",
            "5064453224894500188_119.jpg"
        ],
        specs: [
            { nombre: "Cantidad", valor: "Cada sobre incluye 2 dedales (1 par)" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
        producto29: {
        id: "producto29",
        titulo: "Cable de carga magnético con puntas intercambiables",
        precio: "$5.00",
        imagenes: [
            "5100665240923344119_119.jpg",
            "5100665240923344120_119.jpg"
        ],
        specs: [
            { nombre: "Compatibilidad", valor: "Universal" },
            { nombre: "Contiene", valor: "Tres puntas intercambiables con conector magnético giratorio para entradas tipo Lightning, Micro USB y Tipo C" }
        ]
    },
        producto30: {
        id: "producto30",
        titulo: "Regleta USB de 7 puertos 3.0",
        precio: "$14.00",
        imagenes: [
            "5064453224894500187_119.jpg",
            "5064453224894500188_119.jpg"
        ],
        specs: [
            { nombre: "Cantidad", valor: "Cada sobre incluye 2 dedales (1 par)" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    },
        producto31: {
        id: "producto31",
        titulo: "Regleta USB de 7 puertos 3.0",
        precio: "$14.00",
        imagenes: [
            "5064453224894500187_119.jpg",
            "5064453224894500188_119.jpg"
        ],
        specs: [
            { nombre: "Cantidad", valor: "Cada sobre incluye 2 dedales (1 par)" },
            { nombre: "Colores disponibles", valor: "PREGUNTAR AL VENDEDOR LOS COLORES DISPONIBLES" }
        ]
    }
};

let productoActual = null;
let imagenActualIndex = 0;
let imagenGrandeIndex = 0;

function abrirModal(productoId) {
    const producto = especificacionesProductos[productoId];
    if (producto) {
        productoActual = producto;
        imagenActualIndex = 0;
        document.getElementById('modalTitulo').textContent = producto.titulo;
        document.getElementById('modalPrecio').textContent = producto.precio;
        cargarCarrusel();
        
        const listaEspecs = document.getElementById('modalEspecificacionesLista');
        listaEspecs.innerHTML = '';
        producto.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${spec.nombre}:</strong> <span>${spec.valor}</span>`;
            listaEspecs.appendChild(li);
        });
        
        document.getElementById('modalEspecificaciones').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function cargarCarrusel() {
    const slides = document.getElementById('carruselSlides');
    const indicadores = document.getElementById('carruselIndicadores');
    slides.innerHTML = '';
    indicadores.innerHTML = '';
    
    productoActual.imagenes.forEach((imagen, index) => {
        const slide = document.createElement('div');
        slide.className = 'carrusel-slide';
        slide.style.backgroundImage = `url('${imagen}')`;
        slide.onclick = () => abrirImagenGrande(index);
        slides.appendChild(slide);
        
        const indicador = document.createElement('div');
        indicador.className = `indicador ${index === 0 ? 'activo' : ''}`;
        indicador.onclick = () => irAImagen(index);
        indicadores.appendChild(indicador);
    });
    actualizarContador();
}

function cambiarImagen(direccion) {
    const total = productoActual.imagenes.length;
    imagenActualIndex = (imagenActualIndex + direccion + total) % total;
    document.getElementById('carruselSlides').style.transform = `translateX(-${imagenActualIndex * 100}%)`;
    
    document.querySelectorAll('.indicador').forEach((ind, idx) => {
        ind.className = `indicador ${idx === imagenActualIndex ? 'activo' : ''}`;
    });
    actualizarContador();
}

function irAImagen(index) {
    imagenActualIndex = index;
    document.getElementById('carruselSlides').style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.indicador').forEach((ind, idx) => {
        ind.className = `indicador ${idx === index ? 'activo' : ''}`;
    });
    actualizarContador();
}

function actualizarContador() {
    document.getElementById('contadorImagenes').textContent = 
        `${imagenActualIndex + 1}/${productoActual.imagenes.length}`;
}

function cerrarModal() {
    document.getElementById('modalEspecificaciones').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function abrirImagenGrande(index) {
    imagenGrandeIndex = index;
    document.getElementById('imagenAmpliada').src = productoActual.imagenes[index];
    document.getElementById('textoImagen').textContent = productoActual.titulo;
    document.getElementById('contadorImagenGrande').textContent = 
        `${index + 1}/${productoActual.imagenes.length}`;
    document.getElementById('modalImagenGrande').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrarImagenGrande() {
    document.getElementById('modalImagenGrande').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navegarImagenGrande(direccion) {
    const total = productoActual.imagenes.length;
    imagenGrandeIndex = (imagenGrandeIndex + direccion + total) % total;
    document.getElementById('imagenAmpliada').src = productoActual.imagenes[imagenGrandeIndex];
    document.getElementById('contadorImagenGrande').textContent = 
        `${imagenGrandeIndex + 1}/${total}`;
}

function comprarPorWhatsApp() {
    if (productoActual) {
        let mensaje = MENSAJE_PREDETERMINADO;
        mensaje += `*${productoActual.titulo}*%0A`;
        mensaje += `Precio: ${productoActual.precio}%0A%0A`;
        mensaje += `*Especificaciones:*%0A`;
        productoActual.specs.forEach(spec => {
            mensaje += `• ${spec.nombre}: ${spec.valor}%0A`;
        });
        mensaje += `%0A¿Podrían darme más información sobre las entregas personales?`;
        window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
        cerrarModal();
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modalEspecificaciones')) cerrarModal();
    if (event.target == document.getElementById('modalImagenGrande')) cerrarImagenGrande();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
        cerrarImagenGrande();
    }
    if (document.getElementById('modalImagenGrande').style.display === 'block') {
        if (event.key === 'ArrowLeft') navegarImagenGrande(-1);
        if (event.key === 'ArrowRight') navegarImagenGrande(1);
    }
});