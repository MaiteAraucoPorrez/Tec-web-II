# CHANGELOG — Refinamiento de Portafolio Web Personal
**Autora:** Gabriela Arauco
**Proyecto:** Portafolio Personal UX/UI
**Fecha:** 2026-03-30

## Resumen
Se aplicaron mejoras de UX/UI sobre el portafolio personal, incorporando diseño Mobile First, responsive design y funcionalidades JavaScript. A continuación se documenta cada mejora con su justificación en las heurísticas de Nielsen.

## Mejora 1 — Diseño Mobile First y Responsive

**Problema identificado:**
El sitio estaba diseñado para escritorio. En móviles el menú bloqueaba el contenido y el layout no se adaptaba correctamente.

**Impacto:**
La mayoría del tráfico web viene de dispositivos móviles. Un sitio que no funciona bien en móvil pierde visitantes.

**Heurística de Nielsen:** #4 Consistencia y estándares — seguir las convenciones de cada plataforma.

**Solución implementada:**
Se reescribió el SCSS usando enfoque Mobile First: los estilos base son para pantallas pequeñas y se escalan con `@media (min-width)`.

```scss
/* Mobile: columna única */
.layout {
    display: flex;
    flex-direction: column;
}

/* Tablet: nav horizontal */
@media (min-width: 768px) {
    .nav {
        display: flex;
        flex-direction: row;
    }
}

/* Desktop: grid con sidebar */
@media (min-width: 1024px) {
    .layout {
        display: grid;
        grid-template-columns: 220px 1fr;
        grid-template-areas:
            "header   header"
            "nav      contenido"
            "footer   footer";
    }
}
```

**Resultado:** El sitio funciona correctamente en móvil, tablet y desktop.

## Mejora 2 — Menú Hamburguesa (navegación móvil)

**Problema identificado:**
En móvil no había una forma de acceder a la navegación sin ocupar espacio en pantalla constantemente.

**Impacto:**
El usuario no podía navegar entre secciones en móvil de forma cómoda.

**Heurística de Nielsen:** #1 Visibilidad del estado del sistema — el usuario debe saber si el menú está abierto o cerrado.

**Solución implementada:**
Se agregó un botón hamburguesa que alterna la clase `.activo` en el nav. El nav está oculto por defecto (`display: none`) y se muestra cuando tiene la clase.

```javascript
const btnHamburguesa = document.getElementById("btn-hamburguesa");
const nav = document.getElementById("nav");

btnHamburguesa.addEventListener("click", function() {
    nav.classList.toggle("activo");
});
```

```scss
.nav {
    display: none; // oculto en móvil

    &.activo {
        display: block; // se muestra al hacer clic
    }
}
```

**Resultado:** Navegación accesible en móvil con un solo clic.

## Mejora 3 — Modo Oscuro / Claro

**Problema identificado:**
El sitio solo tenía modo oscuro. Usuarios en ambientes iluminados o con preferencia por modo claro no tenían opción.

**Impacto:**
Limita la comodidad del usuario en diferentes contextos de uso.

**Heurística de Nielsen:** #3 Control y libertad del usuario — permitir que el usuario controle su entorno visual.

**Solución implementada:**
Un botón alterna la clase `.claro` en el body. Se usa `localStorage` para recordar la preferencia entre sesiones.

```javascript
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        iconoTema.textContent = "🌙";
        localStorage.setItem("tema", "claro");
    } else {
        iconoTema.textContent = "☀️";
        localStorage.setItem("tema", "oscuro");
    }
});
```

```scss
// Modo claro — activado desde JS
body.claro {
    --fondo:     #f5f3ff;
    --texto:     #1e1b4b;
    --tarjeta:   #ffffff;
}
```

**Resultado:** El usuario puede cambiar el tema y su preferencia se recuerda en visitas futuras.

## Mejora 4 — Validación en Tiempo Real del Formulario

**Problema identificado:**
El formulario no tenía validación en el cliente. El usuario solo se enteraba de errores al hacer clic en "Enviar".

**Impacto:**
Genera fricción y frustración. El usuario no sabe qué está mal mientras escribe.

**Heurística de Nielsen:** #9 Ayuda a reconocer, diagnosticar y recuperarse de errores — mensajes claros que expliquen el problema.

**Solución implementada:**
Se valida cada campo mientras el usuario escribe, cambiando el color del borde y mostrando mensajes descriptivos.

```javascript
inputNombre.addEventListener("input", function() {
    if (inputNombre.value.length < 3) {
        inputNombre.style.borderColor = "red";
        msgNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        msgNombre.style.color = "red";
    } else {
        inputNombre.style.borderColor = "green";
        msgNombre.textContent = "Nombre válido ✓";
        msgNombre.style.color = "green";
    }
});
```

**Resultado:** El usuario recibe retroalimentación inmediata y puede corregir errores mientras escribe.

## Mejora 5 — Botón Volver Arriba

**Problema identificado:**
El portafolio tiene varias secciones largas. Volver al inicio requería hacer scroll manual extenso.

**Impacto:**
Experiencia incómoda en páginas largas. El usuario tarda más en navegar.

**Heurística de Nielsen:** #3 Control y libertad del usuario — el usuario puede volver a un estado anterior sin esfuerzo.

**Solución implementada:**
Un botón fijo aparece cuando el usuario hace scroll más de 200px y desaparece al estar arriba.

```javascript
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});

btnArriba.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
```

**Resultado:** El usuario puede volver al inicio con un clic desde cualquier punto de la página.

## Mejora 6 — Filtro de Proyectos

**Problema identificado:**
Todos los proyectos se mostraban juntos sin categorías. Un reclutador interesado en proyectos web tenía que revisar todos.

**Impacto:**
Sobrecarga cognitiva. El usuario gasta más tiempo buscando lo relevante para él.

**Heurística de Nielsen:** #6 Reconocimiento en lugar de recuerdo — mostrar las opciones disponibles claramente.

**Solución implementada:**
Botones de filtro con `data-categoria`. Al hacer clic se ocultan/muestran las tarjetas correspondientes usando la clase `.oculta`.

```javascript
botonesFilter.forEach(function(boton) {
    boton.addEventListener("click", function() {
        var categoria = boton.dataset.categoria;

        tarjetasProyecto.forEach(function(tarjeta) {
            if (categoria === "todos" || tarjeta.dataset.categoria === categoria) {
                tarjeta.classList.remove("oculta");
            } else {
                tarjeta.classList.add("oculta");
            }
        });
    });
});
```

**Resultado:** El usuario puede explorar proyectos por categoría de forma rápida e intuitiva.

## Mejora 7 — Modal de Detalles de Proyecto

**Problema identificado:**
Las tarjetas de proyectos tenían descripciones cortas. Para ver más info el usuario era enviado a GitHub, perdiendo el contexto del portafolio.

**Impacto:**
El usuario abandona el sitio antes de explorar todos los proyectos.

**Heurística de Nielsen:** #2 Coincidencia con el mundo real — mostrar información donde el usuario la espera, sin saltos de contexto bruscos.

**Solución implementada:**
Al hacer clic en "Ver detalles" se abre un modal con la descripción completa y tecnologías.

```javascript
botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {
        var proyecto = proyectos[parseInt(boton.dataset.index)];

        modalCuerpo.innerHTML =
            "<h3>" + proyecto.titulo + "</h3>" +
            "<p>" + proyecto.descripcion + "</p>" + ...;

        modal.style.display = "flex";
    });
});

btnCerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});
```

**Resultado:** El usuario puede ver los detalles de cada proyecto sin salir del portafolio.

## Mejora 8 — Cotizador de Servicios

**Problema identificado:**
No había forma de que clientes potenciales estimaran el costo de un proyecto antes de contactar. Esto aumentaba la barrera de entrada.

**Impacto:**
Clientes interesados se iban sin tener idea del presupuesto necesario.

**Heurística de Nielsen:** #1 Visibilidad del estado del sistema — el total se actualiza en tiempo real conforme el usuario selecciona opciones.

**Solución implementada:**
Un módulo de cotización con select de servicio, slider de páginas y checkboxes de extras. El total se recalcula en tiempo real.

```javascript
function calcularTotal() {
    var precioBase = parseInt(selectServicio.value) || 0;
    var paginas    = parseInt(rangePageinas.value);
    var extras     = 0;

    checkboxExtras.forEach(function(cb) {
        if (cb.checked) extras += parseInt(cb.value);
    });

    resultadoTotal.textContent = "$" + ((precioBase * paginas) + extras);
}

selectServicio.addEventListener("change", calcularTotal);
rangePageinas.addEventListener("input", calcularTotal);
checkboxExtras.forEach(function(cb) {
    cb.addEventListener("change", calcularTotal);
});
```

**Resultado:** Los visitantes pueden estimar el costo de su proyecto de forma autónoma antes de contactar.
