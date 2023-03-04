# [<img src="/assets/README/logo-white-bg.png" alt="Footstrap logo" width="50"/>](https://footstrap-ecommerce-production.up.railway.app/) Footstrap ecommerce 

<details>

  <summary>Español</summary>

  ## Ir al sitio
  
  Es muy probable que el hosting del sitio no funcione del todo bien. Esto se debe a que los hosting son gratuitos y es probable que si no se ha ingresado en un tiempo (bastante corto) tarde en responder el servidor:
  
   * Con [Railway](https://railway.app/) posiblemente aparezca un error, pero no quiere decir que no funcione. Puede entonces tardar entre un minuto o dos en responder para poder acceder desde la primera vez que se ingresa: [Ir al sitio en Railway](https://footstrap-ecommerce-production.up.railway.app/)
   
   * Con [Render](https://render.com/) es probable que tarde al rededor de 30 segundos en cargar la apicación, y una vez cargada suele andar mal un par de minutos: [Ir al sition en Render](https://footstrap.onrender.com/)

  ## Breve descripción

  Footstrap ecommerce es un sitio web para un comercio de zapatillas, donde los clientes pueden ver los productos en venta y el dueño de la tienda puede manejar que quiere mostrar. Por el momento, en el cliente es posible para el administrador elegir qué productos mostrar con ciertos detalles, modificarlos, agregar nuevos y eliminar otros. Del lado del servidor, la API permite manejar información para otras funcionalidades, como agregar y manejar marcas y el stock de cada producto.

  ## Motivación para el proyecto

  Este es un proyecto desarrollado para el desafío de la empresa [StoryDots](https://storydots.app/), donde quise poner en práctica lo ya aprendido y desafiarme a ser lo más efectivo posible. Como resultado, en menos de la mitad de tiempo que el último proyecto que desarollé por cuenta propia, similar a este, pude obtener un resultado notablemente mejor, lo cual me hizo sentir bastante satisfecho con la mejora en mis habilidades.

  ## Estado actual

  Al momento de la entrega, el proyecto se encuentra bastante incompleto en relación al potencial y los requerimientos básicos de un ecommerce, pero considero que cumple con creces lo solicitado para el desafío. Es posible obtener los productos que son guardados en una base de datos y verlos de distintas maneras, en listas, tarjetas o individualmente de forma más detallada. A su vez un usuario administrador puede crear productos nuevos, editar los productos ya existentes o eliminar el que quiera. Para los usuarios en general están desarolladas las funcionalidades básicas de registro, inicio de sesión, recuperación de contraseña, validación de correo electrónico, cambio de nombre, cambio de contraseña y eliminación de cuenta. Por el momento el registro de usuarios no tiene mucho sentido, ya que no hay grandes diferencias al tener una cuenta, pero abre el camino para desarrollar nuevas funcionalidades en un futuro. Con el correr del tiempo iré completando algunas cosas que me gustaría hacer en esta aplicación, en principio utilizar Docker y el servicio ECS de AWS. Luego, agregar la opción de filtrar los productos por marca, género y tipo, a la vez de poder ordenarlos por precio. Después, permitir al administrador agregar nuevas marcas y manejar el stock de los productos, pudiendo a su vez agregar ofertas para usuarios registrados. También desarrollar la posibilidad de que estos últimos puedan guardar en favoritos los productos que les hayan gustado, y hacer un carrito de compras y los formnularios de pagos. Sería importante también mejorar la vista de los productos, principalmente agregando la alguna fucionalidad para ver más fotos en la sección individual. Todas estas son cuestiones que podría resolver, incluso algunas ya están resueltas del lado del servidor, pero requieren de más tiempo para completarlas.

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
      
  9. Crear un archivo `.env` en el directorio `/client` con las siguientes variables:
				<pre>
					NODE_ENV = development
					DB_USER = < "postgres" (default) o tu nombre de usuario para la base de datos de PostgreSQL >
					DB_PASSWORD = < la contraseña para ese usuario de PostgreSQL >
					DB_NAME = < el nombre que elijas para tu base de datos PostgreSQL >
					DB_HOST = localhost
					DB_PORT = 5432
					JWT_SECRET = < una cadena que quieras usar como secreto para el token de JWT >
					MAILER_MAIL = < tu dirección de email de <em><strong>gmail</strong></em> >
					MAIL_PASSWORD" = < tu "contraseña de aplicación" generada desde google (no es la constraseña de tu email) >
					AWS_ACCESS_KEY = < tu llave de acceso AWS >
					AWS_SECRET_ACCESS_KEY = < tu llave de accesso secreta de AWS >
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

</details>

***

<details>

  <summary>English</summary>

  ## Go to site
  
  It is very likely that the hosting of the site is not working properly. This is because the hosting is free and it is probable that if the had not been used for a (fairly short) time, it will take a while for the server to respond:
  
   * With [Railway](https://railway.app/) you may possibly get an error, but it doesn't mean it won't work. It may then take a minute or two for the server to respond so that you can log in the first time: [Go to site on Railway](https://footstrap-ecommerce-production.up.railway.app/)
   
   * With [Render](https://render.com/) it is likely to take about 30 seconds to load the application, and once it is loaded it usually runs poorly for a couple of minutes: [Go to site in Render](https://footstrap.onrender.com/)

  ## Brief description

  Footstrap ecommerce is a website for a sneaker store, where customers can see the products for sale and the store owner can manage what he wants to display. At the moment, on the client side it is possible for the administrator to choose which products to display with certain details, modify them, add new ones and remove others. On the server side, the API allows to manage information for other functionalities, such as adding and managing brands and the stock of each product.

  ## Motivation for the project

  This is a project developed for the [StoryDots](https://storydots.app/) challenge, where I wanted to put into practice what I had already learned and challenge myself to be the most effective I could be. As a result, in less than half the time of the last project I developed on my own, similar to this one, I was able to get a noticeably better result, which made me feel quite satisfied with the improvement in my skills.

  ## Build status

  At the time of delivery, the project is quite incomplete in relation to the potential and the basic requirements of an ecommerce, but I consider that it is far better than what was requested for the challenge. It is possible to obtain the products that are stored in a database and view them in different ways, in lists, cards or individually in more detail. In sum, an administrator user can create new products, edit existing products or delete the ones he/she wants. For users in general the basic functionalities of registration, login, password recovery, email validation, name change, password change and account deletion are developed. For the moment the user registration does not make much sense, since there are no big differences in having an account, but it opens the road for developing new functionalities in the future. As time goes by I will complete some things I would like to do in this application, at first using Docker and the AWS ECS service. Then, add the option to filter products by brand, genre and type, and to sort them by price. Then, allow the administrator to add new brands and manage the stock of products, being able to add offers for registered users. Also develop the possibility for the latter to save in favorites the products they have liked, and make a shopping cart and payment forms. It would also be important to improve the view of the products, mainly by adding functionalities to see more photos individually. All these are issues that I could solve, even some of them are already solved on the server side, but they require more time to complete them.

  ## Installation

  To install this application and test it in development you need to have updated versions of `Node.js`, `NPM` and `Git` installed on your computer in order to be able to:

  1. Create and go to a new directory.
  2. Initialize a new repository with `git init` command.
  3. Obtain this repository with the command `git pull https://github.com/andressiri/footstrap-ecommerce`.
  4. Install root drectory dependencies with the `npm install` command.
  5. Move to `/client` directory and install the dependencies with the command `npm install` again.
  6. Move to `/server` directory and install the dependencies with the command `npm install` one last time.
  7. Create a bucket with the AWS S3 service.
  8. Create the required PostgreSQL database:

      <details>

        <summary>Install PostgreSQL server in your computer.</summary>

        - Download the installer at [official site](https://www.postgresql.org/download/).
        - In Windows consider you need to be logged as administrator or superuser to perform and installation. If needed, follow the [instructions provided at official site for Windows](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/02_installing_postgresql_with_the_graphical_installation_wizard/01_invoking_the_graphical_installer/).
        - In Mac OS consider you have to run the downloaded dmg package as administrator user. If needed, follow the [instructions provided at official site for Mac OS](https://www.enterprisedb.com/postgres-tutorials/installation-postgresql-mac-os).
        - In Ubuntu for Linux follow the [instructions provided at official site for Ubuntu](https://www.enterprisedb.com/postgres-tutorials/how-install-postgres-ubuntu).
        - You will need the password your enter in the installation to connect to the database.

      </details>
      
  9. Create a `.env` file at `/client` directory with the following variables:
				<pre>
					NODE_ENV = development
					DB_USER = < "postgres" (default) or your user name for the PostgreSQL database >
					DB_PASSWORD = < the password for that PostgreSQL user >
					DB_NAME = < a name of your choice for the PostgreSQL database >
					DB_HOST = localhost
					DB_PORT = 5432
					JWT_SECRET = < a string you want to use as secret for the JWT token >
					MAILER_MAIL = < your <em><strong>gmail</strong></em> email address >
  				        MAIL_PASSWORD" = < the "application password" generated with google > (not your email password)
					AWS_ACCESS_KEY = < your AWS access key >
					AWS_SECRET_ACCESS_KEY = < your secret AWS access key >
					AWS_BUCKET_NAME = < the name of the bucket from AWS S3 service >
				</pre>
      
      <details>

      <summary>How to generate application password</summary>

      To generate a new application password follow the next steps:

      1. In a new Chrome tab go to "Manage your Google Account".

          ![go to Manage your Google Account](/assets/README/gmail%20application%20password/1.%20Manage%20your%20google%20account.png)

      2. Go to "Signing in to Google" in the "Security" section and click into "App passwords". Notice you must have your 2-Step Verification activated in order to do this.

          ![go to app passwords](/assets/README/gmail%20application%20password/2.%20Go%20to%20app%20passwords.png)

      3. Create a new application password, you can name it as you want.

          ![create a new application password](/assets/README/gmail%20application%20password/3.%20Create%20a%20new%20application%20password.png)

      4. Get the new password created.

          ![get the new password](/assets/README/gmail%20application%20password/4.%20Get%20the%20new%20password.png)

      </details>
      
  10. Create the database, do the migrations and populate it with the `npm run createDatabase` command. This will run three Sequelize client commands. The first will create the database, the second will create the necessary tables with the necessary conditions for the API to work and the third will populate the database with products and users, including the user `admin@test.com` with password `123456`, which should be used to test the functionality of the application.
  11. Finally, to run the client on port 3000 use the `npm run client` command at the `/client` directory, and for the server on port 8080 use the `npm run server` command at the `/server` directory.

  ## API Documentation

  The API provided by the server, created for the application, is [documented and published with Postman](https://documenter.getpostman.com/view/16003276/UzJHQdAZ). There you can load and run the API in postman directly or use postman in the browser, using the "Run in Postman" button located in the upper right corner of the window.

  <details>

  <summary> <a href="https://documenter.getpostman.com/view/16003276/UzJHQdAZ"><img src="/assets/README/API/Run%20in%20postman%20button.png" alt="Run in Postman button" ></a> </summary>

  ![API postman documentation](/assets/README/API/API%20postman%20documentation.png)

  </details>

  ## Code arrangement
  
  The code is organized in files and directories taking in consideration the separation of interests as much as possible. In this way the files try to be as concise as possible and take care of just a single action if they can, even resulting in a really short file, like some controllers in the backend directory. But some of them should group several actions together to encapsulate a functionality or logic, even if they result in a really long file, like slices for state handling. That said, most of the frontend directory structure and names follow what is given by using `create-react-app` and the `react-redux` package included with `Redux Toolkit`.

  ## Technologies used

  This section lists technologies or frameworks that have been used to do the project, with a brief description and the reason or intention of using them.

  <details>

  <summary>Node JS</summary>

  [Node.js](https://nodejs.org/) is an asynchronous event-driven JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/) designed to build scalable network applications. Of course Node.js has many pros and cons compared with other copeting languages and frameworks, but the main reasons that explain why I chose it for this small project are, first, because of the "Javascript everywhere" advantage, as Node.js supports JavaScript both client-side and server-side, and second, the vast libraries repository you can access with the Node Package Manager.

  </details>

  <details>

  <summary>Express</summary>

  [Express](https://expressjs.com/) is a fast, unopinionated and minimalist web framework for Node.js that provides a robust set of features. The main reason I chose it is because, without adding many restrictions, it makes much more clear and easier to control requests and responses and to design routes with, as it says in it's official site, "a myriad of HTTP utility methods and middleware at your disposal".

  </details>
  
  <details>

  <summary>PostgreSQL</summary>

  [PostgreSQL](https://www.postgresql.org/) is a powerful object-relational database system. As it was required a relational database in the challenge I chose it, but one of the reasons for this decision over choosing other relational databases is that it is open-source with over 30 years of active and there is a wealth of information to be found describing how to install and use it through the official documentation. Other important reason is that some features, like create, update or delete, in my opinion, have better feedback or information returned after the action is done.

  </details>

  <details>

  <summary>Sequelize</summary>

  [Sequelize](https://sequelize.org/) is a modern Object Relational Mapper or ORM for TypeScript and Node.js in conjunction with PostgresSQL and other relational SQL databases. Being an ORM, Sequelize allows me to access the database using object-oriented logic with JavaScript, a great advantage. Using the sequelize client with migrations and seeders really makes it easy to create, work and test with the database.   

  </details>

  <details>

  <summary>Json Web Token</summary>

  [JSON Web Token (JWT)](https://jwt.io/) is an open standard ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair. I chose this to use for my authorization and authentication methods as it results in a pretty simple way of doing it, and having used [Passport](https://www.passportjs.org/) before, I wanted to learn something else. I found it better as it has less restrictions, besides Passport provides a middleware built on that I had to develop instead.

  </details>

  <details>

  <summary>React JS</summary>

  [React](https://reactjs.org/) is an efficient, declarative, and flexible open-source JavaScript library for building simple, fast, and scalable user interfaces for frontends of web applications. It uses JSX which is basic JavaScript that allows HTML quoting, what facilitates developing components. As I have chosen to first learn React in my path, I decided to use it again for this project to learn more about it and gain experience. I chose React because it had been recommended to me and I agree that it is easier to learn and use at start and has a giant potencial when learned in depth, it has a strong community support and is widely used in the IT market, with other technological advantages as fast rendering.

  </details>

  <details>

  <summary>Redux - Redux Toolkit</summary>

  [Redux](https://redux.js.org/) is a Predictable State Container for Javascript Apps that helps managing state and write applications that behave consistently. [Redux Toolkit](https://redux-toolkit.js.org/) is the official, opinionated, batteries-included toolset for efficient Redux development, built over Redux but with much more advantages. I decided to use them with the intention of learning more technologies, I knew Redux but never used it properly in a project before, it always seemed easier and a better option to use React context. But knowing about Redux Toolkit made me wanna try it, and I found out a fantastic technology. Still having a lot to learn, I found that it is great for managing queries to APIs with createAsyncThunk and a great way to boost the separation of concerns creating slices to manage the state.

  </details>

  <details>

  <summary>Material UI</summary>

  [Material UI](https://mui.com/) is an open source project that features React components that implement Google's Material Design. Some time ago I was determined to start my journey with frontend css frameworks and was going to build a small and simple React application, so in that situation I was attracted to Material UI, having in consideration [Bootstrap](https://getbootstrap.com/) to learn more. In that experience I realized the potential of MUI and that I could still learn a lot more, so I had plenty of reasons to use it again.

  </details>

  <details>

  <summary>Librerías extra</summary>

  - [bcryptjs](https://www.npmjs.com/package/bcryptjs): it is a library that helps hash passwords, for a better security.
  - [express-session](https://www.npmjs.com/package/express-session): helps create a session middleware, that I needed to store the code and the email address for user identity verification process.
  - [express-async-handler](https://www.npmjs.com/package/express-async-handler): Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers, which I used also because it results in a much cleaner code.
  - [express-validator](https://express-validator.github.io/docs/): a set of express middleware for request validation.
  - [express-fileupload](https://www.npmjs.com/package/express-fileupload): a package that allows easier access to the files sent in the request.
  - [nodemailer](https://nodemailer.com/about/): is a module for Node.js applications to allow easy as cake email sending.
  - [axios](https://axios-http.com/): is a promise-based HTTP Client for node.js and the browser, not that I really needed it, just trying to change from fetch and learn axios too.
  - [material-react-toastify](https://www.npmjs.com/package/material-react-toastify): it allows you to add notification snackbars to your app with ease, and it has been made in compliance with Material.io design spec-sheet.
  - [react-router-dom](https://v5.reactrouter.com/): is the standard routing library for React, it keeps your UI in sync with the URL and has a collection of navigational components.
  - [react-beforeunload](https://www.npmjs.com/package/react-beforeunload): React component and hook which listens to the beforeunload window event.
  - [react-spring](https://react-spring.dev/): a library that allows to handle animations and transitions in a simpler way.
  - [Formik](https://formik.org/): a React library that facilitates the creation of forms and the management of their state.
  - [yup](https://www.npmjs.com/package/yup): a package that allows you to define a scheme for parsing and validating values, in this case the values of the forms when they are submitted.
  - [ESlint](https://eslint.org/): a tool that statically analyzes code to find bugs quickly, which really boosts development.
  - [husky](https://www.npmjs.com/package/husky): a library that allows to foresee errors in the code before performing a git commit.
  - [aws-sdk](https://aws.amazon.com/sdk-for-javascript/): a library that facilitates the use of AWS services.
  - [AWS S3](https://aws.amazon.com/s3/): an AWS object storage service used to store the images.

  </details>

</details>
