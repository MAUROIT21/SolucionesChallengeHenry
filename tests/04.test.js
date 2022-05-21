const  obtenerSoloLosMejores  = require("../04.js");

const estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
];

describe('obtenerSoloLosMejores', function() {
    it('debería retornar un array con los nombres de los alumnos cuyas notas sean mayor o iguales a 15', function() {
        expect(obtenerSoloLosMejores(estudiantes, 15, 15)).toEqual(["Fulano Rodriguez", "Perengano Leiria"]);
    });
    it('debería retornar un array con los nombres de los alumnos cuya nota para check1 sea mayor o igual a nota1 y para check2, mayor o igual a nota2', function() {
        expect(obtenerSoloLosMejores(estudiantes, 15, 7)).toEqual(["Mengano Solis", "Fulano Rodriguez", "Perengano Leiria"]);
        expect(obtenerSoloLosMejores(estudiantes, 20, 20)).toEqual(["Fulano Rodriguez"]);
    });
});
