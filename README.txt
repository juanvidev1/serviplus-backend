ESTE DOCUMENTO TIENE LOS PASOS Y GENERALIDADES DE LAS CONFIGURACIONES BÁSICAS PARA EL DESARROLLO 
DEL BACKEND DE UNA APP WEB NODEJS INCLUYENDO EL MANEJO DEL REPOSITORIO EN GITHUB.

Para guithub lo primero es tener una cuenta en www.github.com y clonar este repositorio en local para lo que estemos trabajando, o queramos trabajar.

ES MUY IMPORTANTE CREAR UNA RAMA PROPIA PARA PODER TRABAJAR Y SUBIR CAMBIOS QUE PUEDAN SER REVISADOS ANTES DE AÑADIRLOS AL PROYECTO PRINCIPAL.

Lo primero es copiar el link de del repositorio sobre el que queremos trabajar.

Pasos para desarrollo de backend con NodeJs:
    
    1. Instalar NodeJs, npm y npx.

    2. Crear la carpeta backend del proyecto que se quiere desarrollar.

    3. En VSCode o en la terminal, dentro de la carpeta backend del proyecto, ejecutar el comando npm init.

    4. El anterior comando nos ayudará a hacer la configuración básica del proyecto creando el archivo package.json

    5. Lo siguiente es instalar las dependencias necesarias con el comando npm install <dependencia> --save.
       Mirar el archivo package.json en la sección "dependencies" para ver las dependencias utilizadas en este proyecto

    6. Lo siguiente es crear el archivo index.js; este archivo es clave porque es el punto de entrada y arranque
       de nuestra aplicación web.

    7. Una vez se cree el archivo index.js se deben importar las librerías necesarias que vienen en las dependencias
       instaladas. En el archivo index están especificadas cada una de las líneas de código necesarias.

    8. Ahora debemos crear una cuenta en Atlas para poder acceder a un cluster y crear bases de datos en MongoDB.
       Es importante generar credenciales fáciles de recordar porque las necesitaremos más adelante para conectarnos
       a la base de datos desde nuestra app.
    
    9. Lo siguiente es crear un archivo llamado conexión, connect o cualquier palabra que indique con facilidad
       que es el archivo de conexión.

    10. Una vez creado el archivo de conexión se debe ingresar al cluster creado en  Mongo y en la sección llamada "connect"
       seleccionar la opción "Connect your aplication" y copiar el string de conexión que aparece allí. Debe verse
       algo así: mongodb+srv://user:<password>@personalcluster.qrxfpac.mongodb.net/?retryWrites=true&w=majority.
    
    11. Luego hay que configurar el archivo de conexión. En este ejercicio lo tenemos marcado como "connect.js" para
        que puedan ver los detalles de su configuración y las líneas de código necesarias para su funcionamiento.

    12. En este punto tenemos lista la base para poder empezar a trabajar con datos. Para probar que todo va
        en orden ejecutaremos en nuestra terminal, dentro de la carpeta backend del proyecto, el comando npm start.
        Es importante que si nos sale el error Missing script: "start" vayamos al archivo package.json y en la 
        sección "scripts" incluyamos la siguiente línea: "start": "nodemon index.js" para que npm start sea 
        reconocido.

    13. Ahora podemos iniciar con la parte de la creación de modelos para nuestros registros. En este ejemplo tendremos el modelo ClientModel.js que se
        debería crear dentro de una carpeta específica para los modelos. En este proyecto se llama Models.

    14. Una vez creamos el archivo del modelo, se crea el código necesario para modelar los datos. Ver el archivo
        ClientModel.js para ver el detalle de su desarrollo.
    
    15. Ahora vamos a crear una carpeta llamada operations para las operaciones CRUD en nuestro modelo cliente.
        Dentro de esa carpeta crearemos un archivo llamado ClientOperations.js
    
    16. Para este punto sólo montamos la operación de listar clientes. Ver el archivo ClientOperations.js en la operación "Crear"
        para ver los detalles del código.

    17. Ahora vamos a crear una carpeta llamada routers para generar las peticiones a nuestra app para poder ver
        los datos de los clientes que tengamos en la base de datos.
    
    18. Dentro de la carpeta crearemos un archivo llamado ClientRouter.js en donde codificaremos las peticiones 

    19. Una vez tengamos el archivo de router, codificamos nuestras peticiones (ver el archivo ClientRouter.js)

    20. Si no tenemos corriendo el servidor ejecutamos npm start y una vez arranque vamos a la ruta especificada 
        en la línea final del index. En el caso de este proyecto la ruta sería localhost:8080/clients para poder
        ver el listado de clientes.
