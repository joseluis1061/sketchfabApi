# Sketchfab api demo

En este demo, hemos creado una aplicación web que te permite buscar y visualizar modelos 3D desde Sketchfab directamente en tu navegador. Utilizamos la API de Sketchfab para obtener modelos basados en criterios de búsqueda. La aplicación te permite buscar modelos, ver miniaturas y hacer clic en ellas para cargar el visor 3D interactivo de Sketchfab.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto de manera local:

1. Clona este repositorio: `git clone <URL del repositorio>`
2. Navega al directorio del proyecto: `cd nombre-del-proyecto`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `ng serve`
5. Abre tu navegador y ve a: `http://localhost:4200/`

## Agrega tu api key
1. Abre el archivo src/environments/environment.ts.
3. En caso de no tenerlo crea la carpeta environments en la raíz de src y dentro crea el archivo environment.ts
2. Agrega una propiedad para la API Key dentro del objeto environment:

export const environment = {
  production: false,
  sketchfabApiKey: 'TU_API_KEY_AQUI' // Reemplaza TU_API_KEY_AQUI con tu propia API Key de Sketchfab
};

## Tecnologías Utilizadas
Angular: Framework de desarrollo web.
TypeScript: Lenguaje de programación.
Sketchfab API: API v3 para obtener modelos 3D desde Sketchfab https://api.sketchfab.com/v3/.

## Versiones de las Librerías

A continuación se detallan las versiones de las principales librerías utilizadas en este proyecto:

### Angular:
- Animations: 16.2.0
- Common: 16.2.0
- Compiler: 16.2.0
- Core: 16.2.0
- Forms: 16.2.0
- Platform-browser: 16.2.0
- Platform-browser-dynamic: 16.2.0
- Router: 16.2.0
- Bootstrap: 5.3.1

- Ngx-bootstrap: 11.0.2

- RxJS: 7.8.0

- tslib: 2.3.0

- zone.js: 0.13.- 0

### Dependencias de Desarrollo
- Angular DevKit/CLI: 16.2.0

- Angular Compiler CLI: 16.2.0

- Typescript: 5.1.3

- Jasmine:

- Jasmine-core: 4.6.0
- @types/jasmine: 4.3.0
- Karma:

- Karma-chrome-launcher: 3.2.0
- Karma-coverage: 2.2.0
- Karma-jasmine: 5.1.0
- Karma-jasmine-html-reporter: 2.1.0

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama: `git checkout -b nombre-de-la-rama`
3. Realiza tus cambios y commits: `git commit -m "Descripción del cambio"`
4. Envía tus cambios al fork: `git push origin nombre-de-la-rama`
5. Crea un Pull Request explicando tus cambios.

## Problemas y Soporte

Si encuentras problemas o tienes preguntas, crea un issue en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Créditos

Jose Luis Zúñiga.
