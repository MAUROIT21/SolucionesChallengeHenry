const  mayorMenosMenor  = require("../01.js");

describe('mayorMenosMayor', function() {
    it('no debería utilizar los métodos .min o .max de Math', function() {
        const doNotUse = [".min", ".max"];
        const mayorMenosMenorString = mayorMenosMenor.toString();
        doNotUse.forEach(func => {
            expect(mayorMenosMenorString.includes(func)).toBe(false);
        });
    });
    it('debería retornar el resultado de restar el menor del mayor para [20, 31, 11, 15, 32]', function() {
        expect(mayorMenosMenor([20, 31, 11, 15, 32])).toBe(21);
        expect(mayorMenosMenor([2, 3, 1, 5, 0, 32])).toBe(32);
    });
});