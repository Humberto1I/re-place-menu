# Re Place
Menú estático en español (México), con buscador, categorías y fotografías. No requiere frameworks ni compilación.

## Editar el menú
En `script.js`, cambia `CONFIG.perfilUrl` por el enlace real de tus redes. Por ahora conserva `#PERFIL`.
`CONFIG.nombre` controla el nombre usado en el título del navegador y Open Graph. La identidad gráfica RE PLACE y los textos de marca están en `index.html`.
Los precios se editan en `MENU`: cada producto tiene un precio en MXN o variantes con tamaño y precio. En las listas creadas con `items`, el segundo valor es el precio. Cada categoría define su foto en `imagen`.

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

