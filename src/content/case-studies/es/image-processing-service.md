---
title: Focal
summary: Un pipeline asíncrono de procesamiento de imágenes, desarrollado en Java con Spring Boot.
role: Diseño y desarrollo
team: Proyecto individual
when: "2026"
stack: Java 21, Spring Boot, Spring Cloud Gateway, RabbitMQ, PostgreSQL, Supabase, Docker
result: Un pipeline de imágenes funcional, construido por mí en cuatro servicios, que recorta, redimensiona, desenfoca y filtra imágenes.
code: https://github.com/xbanchon/Focal
order: 2
draft: false
---

## El problema

Construí Focal para obligarme a aprender y consolidar conceptos avanzados de backend, y para familiarizarme con soluciones en la nube.

## Lo que construí

Focal está dividido en cuatro servicios: un API gateway, un servicio de usuarios, un servicio de metadatos de imágenes y un worker de procesamiento.

Una solicitud entra por el gateway, que se encarga de la autenticación con JWT. Luego, el servicio de metadatos coloca un trabajo en una cola de RabbitMQ, y el worker lo toma, procesa la imagen y guarda el resultado en Supabase. PostgreSQL almacena los datos de la aplicación, y Docker Compose ejecuta todo el sistema.

Todavía no está desplegado.

## La decisión difícil

La gran decisión fue la arquitectura. Con tantos puntos de falla posibles, dividir el sistema en microservicios me pareció la opción correcta para mantenerlo funcionando de la forma más confiable posible.

## Lo que cambiaría

Empezaría con algo simple e iría iterando. Me apresuré a construir algo complejo antes de comprobar si realmente funcionaba a menor escala.
