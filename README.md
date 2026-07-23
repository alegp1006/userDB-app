---
🟢 Básico (funcionalidad esencial)
1. Abrir la app y verificar que la tabla se renderiza con 100 usuarios. ✅
2. Validar que cada fila muestra nombre, país y demás datos esperados.
3. Comprobar que las filas tienen colores alternos (ej. zebra striping).
4. Hacer clic en el encabezado “País” y confirmar que la tabla se ordena.
5. Buscar un país específico en el filtro y validar que solo aparecen usuarios de ese país.
6. Eliminar una fila y confirmar que desaparece de la tabla.
7. Restaurar el estado inicial y validar que vuelven los 100 usuarios.
---

🟡 Intermedio (flujo y lógica) 8. Ordenar por país y verificar que el orden es alfabético ascendente.  
9. Ordenar dos veces y confirmar que cambia a descendente.  
10. Filtrar por un país inexistente y validar que la tabla queda vacía.  
11. Eliminar varias filas y comprobar que el contador de usuarios se actualiza.  
12. Restaurar después de múltiples eliminaciones y validar que todo vuelve al inicio.  
13. Probar que el filtro no afecta al orden actual de la tabla.  
14. Validar que el input de filtro mantiene el valor tras aplicar búsqueda.

---

🔴 Avanzado (robustez y edge cases) 15. Simular fallo de la API y comprobar que se muestra mensaje de error.  
16. Probar que al recargar la página se vuelve a cargar la tabla inicial.  
17. Validar que el orden se mantiene tras aplicar un filtro.  
18. Filtrar y luego eliminar filas, confirmar que ambas acciones se combinan correctamente.  
19. Restaurar después de aplicar filtro y validar que se muestran los 100 usuarios.  
20. Probar que el ordenamiento funciona con países con caracteres especiales (ej. “España”).  
21. Validar que la app no se rompe si la API devuelve menos de 100 usuarios.

---

🚀 Experto (flujo completo y accesibilidad) 22. Simular flujo completo: cargar → ordenar → filtrar → eliminar → restaurar.  
23. Validar que la tabla se renderiza en menos de X segundos (performance).  
24. Probar que los encabezados de la tabla tienen roles accesibles (aria-sort).  
25. Navegar con teclado (Tab/Enter) y confirmar que se puede ordenar sin mouse.  
26. Validar que los mensajes de error son legibles por screen readers.  
27. Probar que el layout de la tabla se adapta en pantallas pequeñas (responsive).  
28. Simular múltiples usuarios cargando la app al mismo tiempo (concurrent requests).  
29. Validar que no se hacen llamadas duplicadas a la API al recargar rápido.  
30. Probar que se puede copiar el nombre de un usuario desde la tabla (usabilidad).

---
