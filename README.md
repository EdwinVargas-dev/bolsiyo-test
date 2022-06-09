# Bolsiyo Technology

Es un proyecto creado en Angular version 13.1.2 cuyo objetivo principal es el de crear un visualizador de imagenes donde se pueda establecer conocimiento adquirido sobre diseño, usabilidad, navegación, responsive y estados de una aplicación SPA.

Puedes visualizar el proyecto funcionando en: https://bolsiyotechnology.netlify.app/

## Estructura del proyecto
~~~

|- <src>
|     |----- <components>
|     |       |-------- <filter> // Contiene el componente de filtrado, este comparte los resultados al resto de la aplicación.
|     |       |-------- <hero> // Contiene el componente que no solo muestra la información inicial sino tambien el detalle de la imagen seleccionada.
|     |       |-------- <photos-list> // Trae de manera autonoma la lista de fotos y recibe las filtradas por el modulo <filter>.
|     |
|     |----- <core>
|     |       |-------- <main.reducer> // Corresponde al reductor de estado aplicado para el paso y alamacenamiento de datos entre los componentes.
|     |       |-------- <main.service> // Contiene las peticiones a la base de datos y funciones reutilizables. 
|     |
|     |----- <pages> // Contiene el modulo y componentes ordenados para permitir el crecimiento de la aplicación.
|     |       |-------- <home> // Es el componente que contiene la pagina principal o landing page de la aplicación.
|     |
|     |----- <shared> // Componentes compartidos, pensados para el crecimiento de la aplicación.
|     |       |-------- <footer>
|     |       |-------- <navbar>

~~~

## Lanzamiento del servidor

Corre `ng serve` para crear un servidor local. Usa la url `http://localhost:4200/` para visualizar los cambios aplicables en tiempo real.

## Uso de Angular CLI

Escribe en consola `ng generate component my-component` para generar un nuevo componente. También puedes crear mas elementos con Angular CLI `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Corre `ng build` para construir el proyecto. El resultado se encuentra ubicado en la carpeta `dist/`.
