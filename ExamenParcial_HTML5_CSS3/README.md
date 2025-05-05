# 🌿 Claudia Flowers - Página Web Responsiva

Este proyecto es una página web ficticia para una empresa dedicada a la venta y decoración con plantas, llamada **Claudia Flowers**. Fue desarrollado como parte de un examen parcial usando **HTML5** y **CSS3**.

## 📄 Estructura del sitio

La página está compuesta por tres secciones principales:

- **Página de inicio (index.html)**: Contiene información sobre la empresa, proyectos realizados y quiénes somos.
- **Página de contactos (contactos.html)**: Con un formulario para que los usuarios puedan enviar mensajes.
- **Página de pedidos (pedidos.html)**: Permite realizar pedidos personalizados a través de un formulario detallado.

Todas las páginas incluyen:

- Una **cabecera** con logo, título y menú de navegación.
- Un **menú** accesible con enlaces a las tres páginas.
- Un **pie de página** con datos de contacto y un botón para volver al inicio de la página.

---

## 📱 Estrategia de diseño adaptable (Responsive Design)

Para asegurar que el sitio funcione correctamente en **ordenadores, tablets y móviles**, se utilizó una combinación de diseño flexible y media queries en CSS:

# 1. Flexbox (Diseño flexible por defecto)
Se usa display: flex en el header y en otras secciones como .proyecto para que los elementos se distribuyan de forma automática según el espacio disponible.
header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
Esto permite que los elementos (logo, menú, título) se alineen horizontalmente en pantallas grandes y salten en vertical si no hay espacio (como en móviles).

# 2. Unidades relativas
En lugar de usar píxeles fijos, se usan unidades como %, em o rem, que se adaptan mejor al tamaño del dispositivo:
padding: 1em;
width: 100%;
font-size: 1em;

# 3. Media Queries
Se utilizan reglas condicionales para cambiar el diseño si el ancho de la pantalla es menor a cierto valor, como 768px (tablets y móviles):
Gracias a esto:
- El header se reorganiza en columna.

- El menú se muestra  en vertical  en pantallas pequeñas.

- Las imágenes de proyectos pasan arriba del texto.

# 4. Imágenes escalables
Se usa max-width: 100% y height: auto para que las imágenes se adapten al ancho del contenedor, sin desbordarse:
.proyecto img {
  max-width: 300px;
  width: 100%;
  height: auto;
}

📱 Resultado:
- En ordenador, todo se ve en horizontal y distribuido.

- En tablet, el diseño se reorganiza sin romperse.

- En móvil, el contenido se apila verticalmente y sigue siendo legible y navegable.


### 🔧 Media Queries

Se implementaron reglas CSS que se activan según el tamaño de la pantalla. Por ejemplo:

```css
@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  .nav ul {
    flex-direction: column;
    gap: 1em;
  }

  .proyecto {
    flex-direction: column;
  }

  .proyecto img {
    margin-right: 0;
    margin-bottom: 1em;
  }
}
