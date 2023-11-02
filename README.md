# Client
Carpeta con código del front

Funcionalidades MVP de Ecommerce **TRES GRUPO CREATIVO**

Página Web (A)
Cuenta Usuario (B)
Cuenta Administrador (C)
Motor de Búsqueda (D)
Reseñas (A.- 9)
Panel de Control Administrador (E)

**A.- Página Web**

    1. Interfaz para mobile y desktop.
    2. Listado de eventos con imágenes, fechas, horarios y ubicaciones.
        2.1. Secciones de eventos, próximos eventos y eventos recomendados.*
        2.2. Filtros y opciones de búsqueda para facilitar la exploración.
    3. Página dedicada a cada evento con información detallada, descripción y mapa de ubicación.
        3.1. Disponibilidad de asientos y planos de localización.
        3.2. Interfaz interactiva que permite a los usuarios seleccionar sus asientos preferidos.
        3.3. Visualización en tiempo real de los asientos disponibles y ocupados.
    4. Capacidad para agregar y eliminar boletas del carrito de compra.
    5. Resumen de costos, incluyendo boletas, impuestos y tarifas.
    6. Confirmación inmediata de la compra con un número de referencia y boletas electrónicas.
    7. Vista detallada de todas las boletas vendidas para cada evento.
    8. Envío automático de confirmación de compra y boletas electrónicas por correo electrónico.
    9. Espacio para que los usuarios dejen reseñas y califiquen eventos después de asistir.
    10. Sección de contacto con formulario de correo electrónico y numero de contacto.

**B.- Cuenta Usuario**

    1. Crear usuario
        1.1. Posibilidad de registrarse a partir de su cuenta de google o correo electrónico. 
        En caso de utilizar su correo electrónico debe verificarlo con un correo enviado a sucasilla.
        1.2. Cargar información personal
    2. Iniciar sesión
    3. Buscar eventos
    4. Visualizar información sobre los eventos
    5. Realizar reseñas (deseable)
    6. Poseer panel de actualización de datos, perfil personal
    7. Posibilidad de ver, imprimir o descargar boletas electrónicas desde la cuenta del usuario.
    8. Formulario de contacto o chat en vivo para resolver preguntas y problemas de los usuarios.
    9. Acceso a solicitudes de soporte y consultas de usuarios para una respuesta rápida.
    10. Registro de compras anteriores y acceso rápido a eventos futuros.

**C.- Cuenta Administrador**

    1. Para Usuarios:
        1.1. Bloquear y desbloquear usuarios
        1.2. Visualizar, añadir, eliminar y editar eventos (precio, descripción, imagen, asientos,
        fecha y categoría)
        1.3. Capacidad para agregar, editar y eliminar eventos desde el panel de administración.
        1.4. Configuración de opciones de pago y cuentas bancarias para recibir los ingresos de las ventas.
    2. Acceso a base de datos con la información detallada de:
        2.1. Usuarios
        2.2. Eventos
        2.3. Compras
    3. Generación de informes y estadísticas sobre ventas y desempeño de eventos.
    4. Posibilidad de exportar datos de ventas y asistencia para su análisis externo.

**D.- Motor de Búsqueda**

    1. Nombre
    2. Filtros
        2.1. Categoría
        2.2. Precio
        2.3. Fecha
        2.4. Localización
    3. Visualización de resultados
        3.1. Listado de eventos ordenados según: Relevancia, Fecha o Precios
        3.2. Visualizar Nombre, Precio, Imagen y Fecha

**Aclaraciones:**

La página contará con la posibilidad de ser navegada sin requerir crear cuenta, pero a la
hora de realizar alguna compra será obligatorio el crear una cuenta.

La pagina referente a eventos únicamente va a mostrar los eventos disponibles en la
web, sin alguna clase de filtro. Próximos eventos va a hacer el filtro en base a la fecha más
próxima, y recomendados, de ser posible, que lo haga en base al numero de vistas para el
evento.

Se requiere pasarela de pagos para las personas que adquieran boletas para los eventos,
en diferentes medios de pago como lo son:
- Epayco. *queda como única pasarela para los medios de pago

**E.- Panel de control de administrador:**

    1. Administrar pagos: Permitir al administrador ver las donaciones realizadas, su monto, fecha
        y otras informaciones, así como descargar y exportar informes en formato Excel.

    2. Administrar eventos: Permitir al administrador agregar, editar y eliminar eventos, incluyendo
        su descripción, fotos, información sobre los costos, los resultados y los impactos.
    3. Administrar preguntas frecuentes: Permitir al administrador agregar, editar y eliminar
        preguntas frecuentes y sus respuestas.
    4. Administrar información de contacto: Permitir al administrador actualizar la información de
        contacto de la empresa, como la dirección, el número de teléfono, el correo electrónico y los
        horarios de atención al público.
