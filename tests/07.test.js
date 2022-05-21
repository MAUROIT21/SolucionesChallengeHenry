const crearClaseAlumno = require('../06-07-08.js');

describe('crearClaseAlumno', function() {
  it('debería retornar cantidad de amigos del alumno', function() {
    const Alumno = crearClaseAlumno();
    const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
    expect(alumno.obtenerAmigos()).toBe(1);
    alumno.addAmigos('Neville','Longbottom');
    alumno.addAmigos('Hermione', 'Granger');
    expect(alumno.grupoDeAmigos[1].cohorte).toBe(1);
    expect(alumno.obtenerAmigos()).toBe(3);
  });
  it('debería añadir correctamente una nueva nota en el arreglo notasCheckpoint del alumno', function() {
      const Alumno = crearClaseAlumno();
      const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
      alumno.addNota(15);
      expect(alumno.notasCheckpoints[0]).toBe(15);
      alumno.addNota(20);
      expect(alumno.notasCheckpoints[1]).toBe(20);
  });
});