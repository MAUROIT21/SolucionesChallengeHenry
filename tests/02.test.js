const  ingredienteEnMalEstado  = require("../02.js");

const menuDelDia = {
    raviolesConSalsa: ['Harina', 'Sal', 'Huevos', 'Aceite', 'Peceto', 'Ricota'],
    bagnaCauda: ['Ajo', 'Anchoas', 'Aceite', 'Crema', 'Papas', 'Zanahorias'],
    tallarines: ['Harina', 'Pollo', 'Aceite', 'Huevos', 'Tomates', 'Cebolla']
};

describe('ingredienteEnMalEstado', function() {
    it('no debería utilizar el método .includes', function() {
        const doNotUse = [".includes"];
        const ingredienteEnMalEstadoString = ingredienteEnMalEstado.toString();
        doNotUse.forEach(func => {
            expect(ingredienteEnMalEstadoString.includes(func)).toBe(false);
        });
    });
    it('debería retornar ["Ajo", "Anchoas", "Aceite"]', function() {
        expect(ingredienteEnMalEstado(menuDelDia, 'bagnaCauda', 'Anchoas')).toEqual(['Ajo', 'Anchoas', 'Aceite']);
    });
    it('debería retornar ["Huevos", "Tomates", "Cebolla"]', function() {
        expect(ingredienteEnMalEstado(menuDelDia, 'tallarines', 'Tomates')).toEqual(['Huevos', 'Tomates', 'Cebolla']);
    });
});