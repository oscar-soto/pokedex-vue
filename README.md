## Tecnologías Utilizadas

Para este proyecto, utilicé las siguientes tecnologías:

- **Vue.js version 3:** Fue el framework principal para realizar esta actividad, específicamente utilizando la *"composition API"*. Decidí utilizar esta técnica por ser la más reciente en Vue.

- **Vite:** Como compilador, además del empaquetador yarn.

- **Axios:** Biblioteca para realizar las peticiones HTTP y obtener los datos de la API de Pokémon.

- **CSS:** Utilicé CSS3 aplicando algunas reglas del framework tailwind.css, estableciendo unidades "rem" para definir los valores de padding, margin y font-size, además de la nomenclatura BEM para nombrar las clases.

## Resumen del Proyecto

Para este proyecto, utilicé las tecnologías antes mencionadas, siempre pensando en el principio DRY (Don't Repeat Yourself). Por esto, dividí el proyecto en 3 vistas: Home, AllList y FavoriteList, ya que son las vistas principales de la aplicación, además de un router simple para la navegación.

Agregué un loader para cuando se realiza la llamada a la API, ya que es una API muy ligera, y se agrega un setTimeOut simplemente para hacer el loader un poco más llamativo.

Creé componentes como Footer, botones, página de no encontrado, entre otros, ya que son componentes que se repiten en la mayoría de las páginas, lo que facilita el mantenimiento en el futuro.

Se creó un pequeño store para que los datos de los Pokémon favoritos puedan persistir mientras la aplicación no se reinicie. Además, quiero mencionar que todo fue realizado de manera nativa para evitar el uso de bibliotecas o librerías como Vuex o Vue Router, principalmente debido al tamaño reducido de la aplicación y para mantenerla simple. Lo mismo aplica para CSS.

## Instalación

Requisito: tener yarn instalado.

Para ejecutar la aplicación, sigue estos pasos:

1. Ejecuta el siguiente comando para instalar las dependencias:
  * yarn
2. Luego, inicia la aplicación con el siguiente comando:
	* yarn dev
