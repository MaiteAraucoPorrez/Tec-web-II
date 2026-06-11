# Documentación de mejoras UX/UI
## Información general

Proyecto: Formulario de registro
Fecha: 22/03/2026

# Mejora 1: Feedback al enviar formulario
## 1. Problema identificado
El formulario no mostraba ningún tipo de retroalimentación al enviarse.

## 2. Impacto
ALTO – El usuario no sabe si la acción fue ejecutada.

## 3. Principio UX/UI
Visibilidad del estado del sistema

## 4. Solución implementada
Se agregó un mensaje dinámico indicando estados como “Enviando…” y “Formulario enviado correctamente”.

## 5. Código
mensaje.textContent = "Enviando...";

setTimeout(() => {
  mensaje.textContent = "Formulario enviado correctamente";
}, 2000);

## 6. Resultado
El usuario recibe feedback inmediato, reduciendo incertidumbre y mejorando la experiencia.

# Mejora 2: Validación en tiempo real
## 1. Problema identificado
El formulario permitía enviar datos vacíos o incorrectos.

## 2. Impacto
ALTO – Alta probabilidad de errores de entrada.

## 3. Principio UX/UI
Prevención de errores

## 4. Solución implementada
Se implementó validación en tiempo real para nombre y correo usando JavaScript.

## 5. Código
nombre.addEventListener("input", () => {
  if (nombre.value.trim() === "") {
    nombre.style.border = "2px solid red";
  } else {
    nombre.style.border = "2px solid green";
  }
});

correo.addEventListener("input", () => {
  if (!correo.value.includes("@")) {
    correo.style.border = "2px solid red";
  } else {
    correo.style.border = "2px solid green";
  }
});
## 6. Resultado
Se reducen errores y el usuario recibe guía inmediata al completar el formulario.

# Mejora 3: Mejora en comprensión de campos
## 1. Problema identificado
Los campos del formulario no tenían etiquetas ni ejemplos claros.

## 2. Impacto
MEDIO – Dificultad para entender qué información ingresar.

## 3. Principio UX/UI
Reconocimiento en lugar de recuerdo

## 4. Solución implementada
Se añadieron etiquetas <label> y placeholders con ejemplos.

## 5. Código
<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" placeholder="Ej: Juan Pérez">

<label for="correo">Correo electrónico</label>
<input type="email" id="correo" placeholder="Ej: correo@gmail.com">

## 6. Resultado
El usuario comprende mejor qué debe ingresar, reduciendo dudas y errores.

# Mejora 4: Control del usuario
## 1. Problema identificado
El usuario no tenía opción para cancelar o limpiar el formulario.

## 2. Impacto
MEDIO – Sensación de falta de control.

## 3. Principio UX/UI
Control y libertad del usuario

## 4. Solución implementada
Se agregó un botón de tipo reset para permitir reiniciar el formulario.

## 5. Código
<button type="reset">Cancelar</button>
document.querySelector("button[type='reset']")
  .addEventListener("click", () => {
    mensaje.textContent = "Formulario reiniciado";
});

## 6. Resultado
El usuario puede corregir fácilmente errores y controlar su interacción.

# Mejora 5: Rediseño visual (Mobile First)
## 1. Problema identificado
La interfaz era básica, sin jerarquía visual ni diseño atractivo.

## 2. Impacto
MEDIO – Experiencia poco clara y poco atractiva.

## 3. Principio UX/UI
Diseño estético y minimalista

## 4. Solución implementada
Se rediseñó la interfaz usando SCSS con enfoque mobile-first, mejorando espaciado, tipografía y estilos.

## 5. Código
form {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

button[type="submit"] {
  background: #4f46e5;
  color: white;
}

## 6. Resultado
Interfaz más moderna, clara y fácil de usar, mejorando la percepción del sistema.