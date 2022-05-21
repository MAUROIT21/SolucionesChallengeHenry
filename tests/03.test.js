const  bienvenidoSr  = require("../03.js");

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

describe('bienvenidoSr', function() {
    it('debería retornar un saludo apropiado cuando tiene todas las propiedades', function() {
        expect(bienvenidoSr(personas[0])).toBe('Toni Tralice, un gusto tenerlo nuevamente! Bienvenido');
    });
    it('debería retornar un saludo apropiado cuando tiene apellido y está invitado', function() {
        expect(bienvenidoSr(personas[1])).toBe('Bienvenido Sr. Rodriguez');
    });
    it('debería retornar un saludo apropiado cuando tiene nombre y está invitado', function() {
        expect(bienvenidoSr(personas[2])).toBe('Hola Matias, tu mesa está lista');
    });
    it('debería retornar un mensaje indicando que no está invitado', function() {
        expect(bienvenidoSr(personas[3])).toBe('Disculpe señor, no está invitado a la fiesta');
    });
});