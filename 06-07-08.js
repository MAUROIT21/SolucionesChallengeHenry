/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicializar las propiedades del alumno con los valores recibidos como argumento.
            //
            // Tu código:
            this.nombre = nombre;
            this.apellido = apellido;
            this.cohorte = cohorte;
            this.grupoDeAmigos = grupoDeAmigos;
            this.notasCheckpoints = notasCheckpoints;
        };
  
        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:
            this.grupoDeAmigos.push({nombre: nombre, apellido: apellido, cohorte: this.cohorte});
            
        };
  
        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            //
            // Tu código:
            return this.grupoDeAmigos.length;
        };
  
        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //
            // Tu código:
            this.notasCheckpoints.push(nota);
        };
  
        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
            return this.notasCheckpoints;
            
        };
  
        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
            let str = 'Hola, soy el alumno ' + this.nombre + ' ' + this.apellido + ' del cohorte ' + this.cohorte;
            return str; 
        };
        
    };
  
    return Alumno;
  };

// No modifiques nada debajo de esta linea //

module.exports = crearClaseAlumno