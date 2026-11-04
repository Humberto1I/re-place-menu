# Re Place
Menú estático en español (México), con buscador, categorías y fotografías. No requiere frameworks ni compilación.

## Editar el menú
En `script.js`, cambia `CONFIG.perfilUrl` por el enlace real de tus redes. Por ahora conserva `#PERFIL`.
`CONFIG.nombre` controla el nombre usado en el título del navegador y Open Graph. La identidad gráfica RE PLACE y los textos de marca están en `index.html`.
Los precios se editan en `MENU`: cada producto tiene un precio en MXN o variantes con tamaño y precio. En las listas creadas con `items`, el segundo valor es el precio. Cada categoría define su foto en `imagen`.

## Redes y datos del local
Conserva las claves existentes de `CONFIG` y completa únicamente los datos reales. Ejemplo:

```js
const CONFIG = {
  nombre: "Re Place",
  perfilUrl: "#PERFIL",
  perfilTexto: "Síguenos",
  redes: {
    facebook: "https://www.facebook.com/tu-perfil",
    instagram: "https://www.instagram.com/tu-perfil/",
    tiktok: "https://www.tiktok.com/@tu-perfil"
  },
  ubicacion: {
    direccion: "Av. Siempre Viva 123, Col. Centro, Ciudad",
    mapaUrl: "", // Enlace de Google Maps para Cómo llegar.
    mapaEmbed: "", // URL del src del iframe de Google Maps; no pegar HTML.
    horario: [
      ["Lunes a jueves", "1:00 pm – 11:00 pm"],
      ["Viernes a domingo", "1:00 pm – 1:00 am"]
    ],
    telefono: "+52 55 1234 5678",
    whatsapp: "5215512345678" // Solo dígitos, con lada.
  }
};
```

Los valores vacíos no generan enlaces sociales ni datos de contacto. Si faltan dirección, horario y contacto, Conócenos muestra una invitación a consultar el perfil. El mapa es opcional y carga de forma diferida. Los textos configurables se insertan mediante `textContent`. El botón flotante usa Instagram cuando está configurado; en otro caso usa `perfilUrl`. WhatsApp es un enlace de contacto.

## Secciones nuevas
- **Explora la carta**: ocho mosaicos generados desde `MENU`, con cantidad de productos y precio mínimo entre todas las variantes, sin contar extras.
- **Los imperdibles de Re Place**: seis recomendaciones cuyos precios se consultan por categoría y nombre. Piña Colada usa la variante Litro. Si falta un producto o variante, se omite su diapositiva.
- El carrusel admite deslizamiento, flechas y puntos. Avanza cada cinco segundos y se pausa al pasar el cursor, enfocar, tocar, ocultar la pestaña o salir de pantalla. También incluye Pausar/Reanudar y respeta movimiento reducido.
- **Conócenos**: historia, conteos calculados de productos, salsas y categorías, datos del local y mapa opcional.
- Navegación de escritorio y pie con categorías, datos de visita, iconos sociales y botón para volver arriba.

La búsqueda conserva su ubicación y solo filtra el menú; las secciones de descubrimiento permanecen visibles. Las fotos nuevas reutilizan los marcos, carga diferida, skeleton y respaldo con emoji existentes.

## Ver localmente
Abre `index.html` en el navegador. También puedes servir esta carpeta con `python -m http.server 8000` y entrar a `http://localhost:8000`.
Las fotos están en `img/`; las fuentes de Google requieren conexión. El aviso sin conexión no implica que exista una caché para visitas nuevas.

## Créditos de fotos
Fotos de Unsplash, bajo Unsplash License. Los siguientes son identificadores de imágenes:
- Hero: https://images.unsplash.com/photo-1607013251379-e6eecfffe234
- Hamburguesas: https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5
- Hot dogs: https://images.unsplash.com/photo-1624772413714-7e1ea3fbfeaf
- Tacos: https://images.unsplash.com/photo-1599974579688-8dbdd335c77f
- Snacks: https://images.unsplash.com/photo-1639024471283-03518883512d
- Alitas: https://images.unsplash.com/photo-1608039755401-742074f0548d
- Nachos: https://images.unsplash.com/photo-1768252688649-13d169feadc0
- Bebidas: https://images.unsplash.com/photo-1572490122747-3968b75cc699
- Coctelería: https://images.unsplash.com/photo-1596392301391-e8622b210bd4
- Mojitos: https://images.unsplash.com/photo-1653542772393-71ffa417b1c4

