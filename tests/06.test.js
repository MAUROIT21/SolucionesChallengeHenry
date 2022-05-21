const crearClaseAlumno = require('../06-07-08.js');


describe('crearClaseAlumno', function() {
  it('debería tener un constructor que construya correctamente una instancia', function() {
    const Alumno = crearClaseAlumno();
    const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
    expect(alumno.nombre).toBe('Harry');
    expect(alumno.apellido).toBe('Potter');
    expect(alumno.cohorte).toBe(1);
    expect(alumno.grupoDeAmigos[0].nombre).toBe('Ron');
  });
  it('debería añadir amigos correctamente', function() {
    const Alumno = crearClaseAlumno();
    const alumno = new Alumno('Harry', 'Potter', 1, [{nombre: 'Ron', apellido: 'Weasley', cohorte: 1}], []);
    alumno.addAmigos('Hermione', 'Granger');
    alumno.addAmigos('Neville','Longbottom');
    expect(alumno.grupoDeAmigos[1]).toEqual({nombre: 'Hermione', apellido: 'Granger', cohorte: 1})
    expect(alumno.grupoDeAmigos[2]).toEqual({nombre: 'Neville', apellido: 'Longbottom', cohorte: 1})
  });
});