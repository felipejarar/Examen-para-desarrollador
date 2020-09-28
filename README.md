Aplicación pequeña con Angular (2+) u Spring Boot del tipo "TODO List", esto es, un sistema que cuenta con un listado de actividades por hacer, que es compartida entre varios usuarios.

La aplicación debe tener como mínimo:
- Login básico para al menos 3 usuarios distintos. No se solicita un mantenedor de usuarios (puede ser un listado estático de tres personas).
- Cada usuario puede ingresar una nueva tarea.
- Cada usuario puede asignar tareas a un usuario existente (especificando el usuario).
- Cada usuario puede marcar tareas como completadas.
- Cada usuario puede editar una tarea.
- Cada usuario puede eliminar una tarea.
- Al ingresar una tarea y no especificar una persona, el sistema debe asignarla automáticamente al usuario menos sobrecargado en cuanto a tareas.

Lo que continua debajo del documento corresponde al desarrollo de la solución solicitada.

# Planificación

## Alcances y Suposiciones
- El sistema considera una sola lista de actividades. Dicho de otro modo, no aborda la creación de diferentes listas de actividades para diferentes proyectos.
- El sistema considera que el peso de una tarea (el esfuerzo) es igual para todos. Dicho de otro modo, cada tarea equivale a una sola "unidad de esfuerzo". Esto para la asignación automática en base al usuario menos sobrecargado en cuanto a tareas.
- El sistema no aborda la fecha de inicio y termino de una tarea, ni tampoco de su duración en horas.
- El sistema considera al usuario menos sobrecargado como al usuario con la menor cantidad de tareas.
- Una tarea puede ser asignada a varios usuarios.
- Solo los usuarios con permiso de escritura (write_access = true) pueden crear y asignar tareas.
- Los usuarios sin permiso de escritura (write_access = false) están limitados a visualizar tareas.
- Los estados de una tarea son: TODO (status = 0), IN PROGRESS (status = 1), DONE (status = 2).

## Historias de usuario

### Login de usuario
Como un usuario no autenticado del sistema, quiero ingresar a la aplicación mediante la declaración de mis credenciales de usuario (nombre de usuario y contraseña) en un formulario de login. 
Esto de acuerdo a los siguientes criterios de aceptación: 
- Success
  - Asumiendo que las credenciales sean válidas (username y password pertenecen a un usuario), el sistema debe autenticar al usuario y redirigirlo a la página principal de la aplicación
- Failure
  - Asumiendo que las credenciales sean no válidas, el sistema debe desplegar un mensaje de error anunciando que el nombre de usuario y la contraseña no coinciden.

# Esquema de los datos

## Usuario

```
user = {
  username: string,
  password: string,
  write_access: boolean
}
```

## Tarea

```
task = {
  taskname: string,
  description: string,
  status: number,
  users : [ user 1, user 2, ..., user n]
}
```
