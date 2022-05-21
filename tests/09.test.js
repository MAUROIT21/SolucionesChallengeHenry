const intercambio  = require("../09.js");


const personas = [
    {
        nombre: 'Toni',
        apellido: 'Tralice',
        invitado: true
    },
    {
        apellido: 'Rodriguez',
        invitado: true
    },
    {
        nombre: 'Matias',
        invitado: true
    },
    {
        nombre: 'Leandro',
        apellido: 'Dominguez'
    }
];

const estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
];

describe('intercambio', function() {
    it('no debería utilizar métodos de Object (.keys, .values, .entries)', function() {
        const doNotUse = [".keys", ".values", ".entries"]
        const intercambioString = intercambio.toString();
        doNotUse.forEach(func => {
            expect(intercambioString.includes(func)).toBe(false);
        });
    });
    it('debería retornar { Harry: "nombre", Potter: "apellido" } para { nombre: "Harry", apellido: "Potter" }', function() {
        expect(intercambio({ nombre: 'Harry', apellido: 'Potter' })).toEqual({ Harry: 'nombre', Potter: 'apellido' });
    });
    it('debería intercambiar correctamente los pares clave-valor', function() {
        expect(intercambio(personas[0])).toEqual({ Toni: 'nombre', Tralice: 'apellido', true: 'invitado' });
        expect(intercambio(estudiantes[0])).toEqual({ Mengano: 'nombre', Solis: 'apellido', 16: 'check1', 8: 'check2' });
    });
});