# Base de datos de usuarios

## Descripción

Esta aplicación muestra una tabla interactiva con datos de usuarios obtenidos desde la API pública `randomuser.me`. El objetivo es proporcionar una interfaz web clara para filtrar, ordenar, borrar y restaurar una lista de usuarios en tiempo real.

## Qué hace

- Carga una lista de 100 usuarios usando `fetch` desde `https://randomuser.me/api/?results=100`.
- Muestra cada usuario con foto, nombre, apellido y país en una tabla.
- Permite ordenar la tabla por nombre, apellido o país haciendo clic en los encabezados.
- Incluye un filtro por país que actualiza los resultados en vivo.
- Permite borrar filas individuales y restaurar la lista original con un botón.
- Ofrece una opción para alternar colores de fila y mejorar la legibilidad.

## Arquitectura y técnicas aplicadas

- React + TypeScript: aplicación SPA tipada con componentes funcionales.
- Vite: bundler moderno para desarrollo rápido y despliegue eficiente.
- Custom hooks: lógica separada en hooks reutilizables para:
  - obtener usuarios (`useUsers`)
  - filtrar por país (`useFilterCountry`)
  - ordenar por país (`useSortByCountry`)
  - ordenar por valor dinámico (`useSortBy`)
  - alternar estilos de fila (`useSwitchColors`)
- `useMemo`: memoización para evitar cálculos innecesarios durante filtrado y ordenamiento.
- `useEffect`: fetch de datos al montar el componente principal.
- `useRef`: conserva el estado original de la lista para restauraciones sin recargar la página.
- Componentización: separación de la lógica de presentación y de datos en `Button`, `Input` y `UsersList`.
- Manejo de estado con `useState` y control de errores en peticiones asíncronas.

## Recursos utilizados

- `React 19` y `ReactDOM`.
- `TypeScript 7` para seguridad de tipos en toda la aplicación.
- `Vite` como herramienta de construcción y servidor de desarrollo.
- `ESLint` con configuración básica para mantener calidad de código.
- API pública `randomuser.me` para obtener datos reales de usuarios de ejemplo.
- CSS global sencillo en `src/App.css` y `src/index.css` sin dependencias de CSS frameworks externos.

## Estructura principal

- `src/App.tsx`: componente principal que orquesta filtros, ordenamiento y acciones.
- `src/components/UsersList.tsx`: tabla de visualización de usuarios.
- `src/components/Button.tsx`: botón reutilizable.
- `src/components/Input.tsx`: campo de texto controlado.
- `src/hooks/useUsers.ts`: fetch, estado de usuario y restauración.
- `src/hooks/useFilterCountry.ts`: lógica de filtrado por país.
- `src/hooks/useSortByCountry.ts`: ordenamiento por país.
- `src/hooks/useSortBy.ts`: ordenamiento por nombre/apellido/país según input.
- `src/hooks/useSwitchColors.ts`: activar/desactivar colores en filas.
- `src/services/users.ts`: capa de servicio para la llamada a la API.
- `src/models/users.ts`: definición del tipo `Users`.

## Cómo correr el proyecto

1. Instalar dependencias:
   ```bash
   pnpm install
   ```
2. Iniciar en modo desarrollo:
   ```bash
   pnpm dev
   ```
3. Abrir el navegador en la URL que indique Vite.

## Valor para reclutadores

Este proyecto demuestra habilidades prácticas en React y TypeScript, capacidad para diseñar una UI interactiva con filtros y ordenamiento, y buenas prácticas al separar responsabilidades mediante hooks y servicios.
