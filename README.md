# [<img src="/client/public/logo512.png" alt="Footstrap logo" width="30"/>](#) Footstrap ecommerce 

* [Ir al sitio de Footstrap](https://footstrap.herokuapp.com/)

***

  Footstrap ecommerce es un sitio web para un comercio de zapatillas, donde los clientes pueden ver los productos en venta y el dueño de la tienda puede manejar que quiere mostrar. Por el momento, en el cliente es posible para el administrador elegir qué productos mostrar con ciertos detalles, modificarlos, agregar nuevos y eliminar otros. Del lado del servidor, la API permite manejar información para otras funcionalidades, como agregar y manejar marcas y el stock de cada producto.

  ## Motivación para el proyecto

  Este es un proyecto desarrollado para el desafío de la empresa [StoryDots](https://storydots.app/), donde quise poner en práctica lo ya aprendido y desafiarme a ser lo más efectivo posible. Como resultado, en menos de la mitad de tiempo que el último proyecto que desarollé por cuenta propia, similar a este, pude obtener un resultado notablemente mejor, lo cual me hizo sentir bastante satisfecho con la mejora en mis habilidades.

  ## Estado actual

  Al momento de la entrega, el proyecto se encuentra bastante incompleto en relación al potencial y los requerimientos básicos de un ecommerce, pero considero que cumple con creces lo solicitado para el desafío. Es posible obtener los productos que son guardados en una base de dato y verlos de distintas maneras, en listas, tarjetas o de manera más detallada. A su vez un usuario administrador puede crear productos nuevos, editar los productos ya existentes o eliminar el que quiera. Para los usuarios en general están desarolladas las funcionalidades básicas de registro, inicio de sesión, recuperación de contraseña, validación de correo electrónico, cambio de nombre, cambio de contraseña y eliminación de cuenta. Por el momento el registro de usuarios no tiene mucho sentido, ya que no hay grandes diferencias al tener una cuenta, pero abre la posibilidad de desarrollar nuevas funcionalidades en un futuro. Con el correr del tiempo iré completando algunas cosas que me gustaría hacer en esta aplicación, en principio utilizar Docker y el servicio ECS de AWS. Luego, agregar la posibilidad de filtrar los productos por marca, género y tipo, a la vez de poder ordenarlos por precio. Después, la posibilidad para el administrador de agregar nuevas marcas y manejar el stock de los productos, pudiendo a su vez agregar ofertas para usuarios registrados. También desarrollar la posibilidad de que estos últimos puedan guardar en favoritos los productos que les hayan gustado, y hacer un carrito de compras y los formnularios de pagos. Sería importante también mejorar la vista de los productos, principalmente agregando la posibilidad de ver más fotos. Todas estas son cuestiones que podría resolver, incluso algunas ya están resueltas del lado del servidor, pero requieren de más tiempo para completarlas.

  ## Instalación

  Para instalar esta aplicación y probarla en desarrollo necesitas tener instaladas en tu computadora versiones actualizadas de `Node.js`, `NPM` y `Git` para poder:

  1. Crear e ir a un nuevo directorio.
  2. Inicializar un nuevo repositorio con el comando `git init`.
  3. Obtener este repositorio remoto con el comando `git pull https://github.com/andressiri/footstrap-ecommerce`.
  4. Instalar las dependencias del directorio raíz con el comando `npm install`.
  5. Ir al directorio `/client` e instalar las dependencias con el comando `npm install` nuevamente.
  6. Ir al directorio `/server` e instalar las dependencias con el comando `npm install` una vez más.
  7. Crear un bucket con el servicio S3 de AWS.
  8. Crear la base de datos PostgreSQL requerida:

      <details>

        <summary>Instalar el servidor PostgreSQL en tu computadora.</summary>

        - Descargar el instalador en [el sitio oficial](https://www.postgresql.org/download/).
        - En Windows considerar que es necesario haber ingresado como administrador o superusuario para realizar la instalación. De ser necesario, se recomienda seguir [las instrucciones para Windows provistas en el sitio oficial](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/02_installing_postgresql_with_the_graphical_installation_wizard/01_invoking_the_graphical_installer/).
        - En Mac OS considerar que hay que correr el paquete dmg descargado como usuario administrador. De ser necesario, se recomienda seguir [las instrucciones para Mac OS provistas en el sitio oficial](https://www.enterprisedb.com/postgres-tutorials/installation-postgresql-mac-os).
        - En Ubuntu para Linux seguir [ las instrucciones provistas en el sitio oficial para Ubuntu](https://www.enterprisedb.com/postgres-tutorials/how-install-postgres-ubuntu).
        - Necesitarás la constraseña que ingreses en la instalación para conectarte a la base de datos.

      </details>
      
  9. Crear un archivo .env en el directorio raíz con las siguientes variables:
				<pre>
					NODE_ENV = development
					DB_USER = < "postgres" (default) o tu nombre de usuario para esa base de datos de PostgreSQL >
					DB_PASSWORD = < la para ese usuario de PostgreSQL >
					DB_NAME = < el nombre que elijas para tu base de datos PostgreSQL >
					DB_HOST = localhost
					DB_PORT = 5432
					JWT_SECRET = < una cadena que quieras usar como secreto para el token de JWT >
					MAILER_MAIL = < tu dirección de email de <em><strong>gmail</strong></em> >
					MAIL_PASSWORD" = < tu "contraseña de aplicación" generada desde google (no es la constraseña de tu email) >
					AWS_ACCESS_KEY = < tu llave de acceso AWS >
					AWS_SECRET_ACCES_KEY = < tu llave de accesso secreta de AWS >
					AWS_BUCKET_NAME = < el nombre del bucket del servicio S3 de AWS >
				</pre>
      
      <details>

      <summary>Cómo generar una contraseña de aplicación en Google</summary>

      Para generar una nueva contraseña de aplicación seguir los siguientes pasos:

      1. En una nueva pestaña de Chrome ir a "Gestionar tu cuenta de Google".

          ![gestionar tu cuenta de google](/assets/README/gmail%20application%20password/1.%20Gestionar%20tu%20cuenta%20de%20Google.png)

      2. Ir a "Iniciar sesión en Google" en la sección de "Seguridad" y clickear en "Contraseñas de aplicaciones". Notar que es necesario tener la verificación en dos pasos activada para poder hacer esto.

          ![ir a contraseñas de aplicaciones](/assets/README/gmail%20application%20password/2.%20Ir%20a%20contrase%C3%B1as%20de%20aplicaciones.png)

      3. Crear una nueva constraseña de aplicación, el nombre es indistinto.

          ![crear una nueva constraseña de aplicación](/assets/README/gmail%20application%20password/3.%20Crear%20una%20nueva%20contrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

      4. Obtener la nueva contraseña de aplicación creada.

          ![obtener la nueva contraseña de aplicación](/assets/README/gmail%20application%20password/4.%20Obtener%20la%20constrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

      </details>
      
  10. Crear la base de datos, hacer las migraciones y poblarla con el comando `npm run createDatabase`. Esto correrá tres comandos del cliente de Sequelize. El primero creará la base de datos, el segundo creará las tablas necesarias con las condiciones necesarias para el funcionamiento de la API y el tercero poblará la base de datos con productos y usuarios, entre ellos el usuario `admin@test.com` con contraseña `123456`, que servirá para probar las funcionalidades de la aplicación.
  11. Finalmente, para correr el cliente en el puerto 3000 usar el comando `npm run client` en el directorio `/client`, y para el servidor en el puerto 8080 usar el comando `npm run server` en el directorio `/server`.

  ## Documentación de la API

  La API que brinda el servidor, creada para la aplicación, está [documentada y publicada con Postman](https://documenter.getpostman.com/view/16003276/UzJHQdAZ). Ahí puedes cargar y correr la API en postman directamente o usar postman en el navegador, utilizando el botón que dice "Run in Postman" ubicado en la esquina superior derecha de la ventana.

  <details>

  <summary> <a href="https://documenter.getpostman.com/view/16003276/UzJHQdAZ"><img src="/assets/README/API/Run%20in%20postman%20button.png" alt="Run in Postman button" ></a> </summary>

  ![API postman documentation](/assets/README/API/API%20postman%20documentation.png)

  </details>

  ## Organización del código
  
  El código está organizado en archivos y directorios teniendo en cuenta la separación de intereses lo más posible. De esta manera los archivos tratan de ser lo más concisos que puedan y hacerse cargo de una sola acción de ser posible, incluso dando como resultado un archivo realmente corto, como algunos controladores en el directorio backend. Pero algunos de ellos deben agrupar varias acciones para encapsular una funcionalidad o una lógica, incluso si resultan en un archivo realmente largo, como los "slices" para el manejo de estados. Dicho esto, la mayor parte de la estructura y los nombres de los directorios en frontend siguen lo que es dado al usar `create-react-app` y el paquete `react-redux` que incluye Redux Toolkit.

  ## Tecnologías utilizadas

  Esta sección lista las tecnologías o frameworks que fueron utilizados para hacer le proyecto, con una breve descripción y la razón o intención de utlizarlas.

  <details>

  <summary>Node JS</summary>

  [Node.js](https://nodejs.org/es) es un entorno de ejecución orientado a eventos asíncronos para JavaScript construido con [V8, motor de JavaScript de Chrome](https://v8.dev/), y diseñado para crear aplicaciones network escalables. Por supuesto Node.js tiene varios pros y contras comparado con otros lenguajes y frameworks con los que compite, pero las principales razones que explican por qué lo elegí para este pequeño proyecto son, primero, por la ventaja de poder utilizar "Javascript en todos lados", siendo que Node.js soporta Javascript tanto en el lado del cliente como en el lado del servidor, y segundo, el vasto repositorio de librerías al que se tiene acceso con Node Package Manager.

  </details>

  <details>

  <summary>Express</summary>

  [Express](https://expressjs.com/es) es una infraestructura web rápida, minimalista y flexible para Node.js que proporciona un conjunto sólido de prestaciones. La principal razón por la cual la elegí es que, sin agregar muchas restricciones, hace mucho más claro y fácil el control de las peticiones y las respuestas y el diseño de rutas con, como dice en su sitio oficial, "con miles de métodos de programa de utilidad HTTP y middleware a su disposición".

  </details>
  
  <details>

  <summary>PostgreSQL</summary>

  [PostgreSQL](https://www.postgresql.org/) es un poderoso sistema de bases de datos objeto-relacional. Como fue sugerida una base de datos relacional para parte el desafío la elegí, pero una de las razones para tomar esta decisión en lugar de elegir otra base de datos relacional es que es de código abierto con más de 30 años de actividad y hay una gran cantidad de información fácil de encontrar que describe cómo instalarla y utilizarla en la documentación oficial. Otra razón importante es que algunas funciones, como crear, actualizar o eliminar, en mi opinión, tienen un mejor retorno de información luego de que la acción es realizada.

  </details>

  <details>

  <summary>Sequelize</summary>

  [Sequelize](https://sequelize.org/) es un moderno Mapeador de Objetos Relacionales u ORM (por las siglas en inglés de Object Relational Mapping) para TypeScript y Node.js en conjunto con PostgresSQL y otras bases de datos relacionales SQL. Siendo un ORM, Sequelize me permite acceder a la base de datos usando una lógica orientada a objetos con Javascript, una gran ventaja. La utilización del cliente de sequelize con las migraciones y los seeders realmente facilita la creación, el trabajo y las pruebas con la base de datos.  

  </details>

  <details>

  <summary>Json Web Token</summary>

  [JSON Web Token (JWT)](https://jwt.io/) es un estándar abierto ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) que define una forma compacta y contenida en sí misma de transmitir de forma segura información entre dos partes en formato de objeto JSON. Esta información puede ser verificada y es confiable porque está cifrada digitalmente, ya que los tokens pueden ser cifrados utilizando un secreto o un par de llaves público/privado. Elegí esto para mis métodos de autorización y autenticación porque resulta en una manera bastante sencilla de llevarlos a cabo. Me parece mejor que otras opciones, como Passport, esto debido a que encuentro menos restricciones, pese a que Passport provea un middleware ya incluído que tuve que desarrollar en este caso.

  </details>

  <details>

  <summary>React JS</summary>

  [React](https://es.reactjs.org/) es una librería de Javascript de código abierto eficiente, declarativa, y flexible para construir interfaces de usuario simples, rápidas, y escalables para el frontend de aplicaciones web. Utiliza JSX que es una extensión de sintaxis de JavaScript que permite mezclar HTML, lo que facilita el desarrollo de componentes. Como yo ya he elegido aprender React primero en mi proceso de aprendizaje, decidí utilizarlo nuevamente para este proyecto para aprender más y ganar experiencia. Elegí React en su momento por recomendaciones, siendo que estoy de acuerdo con las razones que me dieron: que es más fácil de aprender y usar en un principio y que tiene un enorme potencial cuando se lo aprende en profundidad, que tiene un gran apoyo de la comunidad y que es empleado ampliamente en el mercado laboral IT; junto con otras ventajas tecnológicas como un renderizado rápido.

  </details>

  <details>

  <summary>Redux - Redux Toolkit</summary>

  [Redux](https://es.redux.js.org/) es un contenedor predecible del estado de aplicaciones JavaScript que ayuda a manejarlo y escribir aplicaciones que se comporten consistentemente. [Redux Toolkit](https://redux-toolkit.js.org/) es el set de herramientas oficial, estructurado y con baterías incluídas para un desarrollo eficiente con Redux, construído sobre Redux pero con muchas más ventajas. Decidí utilizarlos con la intención de aprender más tecnologías, conocía Redux pero nunca la había implementado en un proyecto, siempre me pareció correcto y más fácil y mejor usar el contexto de React. Pero el conocer Redux Toolkit me hizo querer probarlos, y encontré una tecnología fantástica. Aún teniendo mucho que aprender, me resultan excelentes para manejar las peticiones a APIs con createAsyncThunk y una gran manera de mejorar la separación de intereses creando fragmentos ( o rebanadas - slices) del estado para manejarlo.

  </details>

  <details>

  <summary>Material UI</summary>

  [Material UI](https://mui.com/) es un proyecto de código abierto que cuenta con componentes de React que implementan Material Design de Google. Tiempo atrás estaba decidido a empezar mi viaje con los frameworks de css para frontend e iba a construir una aplicación de React pequeña y simple, entonces en esa situación me vi atraído hacia Material UI, teniendo en consderación [Bootstrap](https://getbootstrap.com/) para aprender más adelante. En esa experiencia me di cuenta del potencial de MUI y que aún podía aprender mucho más, motivos de sobra para volver a utilizarlo.

  </details>

  <details>

  <summary>Librerías extra</summary>

  - [bcryptjs](https://www.npmjs.com/package/bcryptjs): es una librería que ayuda a encriptar las constraseñas, para una mejor seguridad.
  - [express-session](https://www.npmjs.com/package/express-session): ayuda a crear un middleware de sesión, que necesitaba para poder almacenar el código y la dirección de correo electrónico para el proceso de verificación de identidad del usuario.
  - [express-async-handler](https://www.npmjs.com/package/express-async-handler): un middleware simple para manejar excepciones dentro de una ruta asíncrona de express y pasarlas a un controlador de error de express, que también usé porque resulta en un código mucho más claro y limpio.
  - [express-validator](https://express-validator.github.io/docs/): un conjunto de middlewares de express para la validación de peticiones.
  - [express-fileupload](https://www.npmjs.com/package/express-fileupload): un paquete que permite acceder de manera más simple a los archivos enviados en la petición.
  - [nodemailer](https://nodemailer.com/about/): es un módulo para aplicaciones de Node.js que permite enviar correos elctrónicos de manera muy fácil.
  - [axios](https://axios-http.com/): es un cliente HTTP basado en promesas para node.js y el navegador, no es que lo necesitara realmente, solo intenté cambiar fetch y aprender axios también.
  - [material-react-toastify](https://www.npmjs.com/package/material-react-toastify): permite agregar barritas de notificaciones a la aplicación de manera sencilla, y está creada en cumplimiento con la hoja de especificaciones de diseño de Material.io.
  - [react-router-dom](https://v5.reactrouter.com/): es la librería de mapeo de rutas de React estándar, mantiene la Interfaz de Usuario en sintonía con la URL y tiene una colección de componentes de navegación.
  - [react-beforeunload](https://www.npmjs.com/package/react-beforeunload): Un componente y hook de React que escucha el evento beforeunload de la ventana.
  - [react-spring](https://react-spring.dev/): una librería que permite manejar animaciones y transiciones de manerá más simple.
  - [Formik](https://formik.org/): una librería de React que facilita la creación de formularios y el manejo de su estado.
  - [yup](https://www.npmjs.com/package/yup): un paquete que permite definir un esquema para analizar y validar valores, en este caso los valores de los formularios al ser enviados.
  - [ESlint](https://eslint.org/): una herramienta que analiza estáticamente el código para encontrar errores rápidamente, lo que realmente potencia el desarrollo.
  - [husky](https://www.npmjs.com/package/husky): una libreria que permite preveer errores en el código antes de realizar un git commit.
  - [aws-sdk](https://aws.amazon.com/es/sdk-for-javascript/): una librería que facilita la utilización de los servicios AWS.
  - [AWS S3](https://aws.amazon.com/es/s3/): un servicio de almacenamiento de objetos de AWS, utilizado para almacenar las imágenes.

  </details>
