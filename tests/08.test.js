const crearClaseAlumno = require('../06-07-08.js');


describe('crearClaseAlumno', function() {
  it('debería retornar un array con las notas de los alumnos', function() {
    const Alumno = crearClaseAlumno();
    const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
    alumno.addNota(15);
    expect(alumno.obtenerNotas()).toEqual([15]);
    alumno.addNota(20);
    expect(alumno.obtenerNotas()).toEqual([15, 20]);
  });
  it('debería retornar una presentación correcta', function() {
      const Alumno = crearClaseAlumno();
      const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
      const alumno2 = new Alumno('Ron', 'Weasley', 1, [{nombre: 'Harry', apellido: 'Potter', cohorte: 1}], []);
      expect(alumno.presentacion()).toBe('Hola, soy el alumno Harry Potter del cohorte 1');
      expect(alumno2.presentacion()).toBe('Hola, soy el alumno Ron Weasley del cohorte 1');
  });
});