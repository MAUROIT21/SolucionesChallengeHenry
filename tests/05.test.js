const  buscaDestruye  = require("../05.js");

describe('buscaDestruye', function() {
    it('debería eliminar 2 de [1, 2, 7, 3, 9] y retornar [1, 7, 3, 9]', function() {
        expect(buscaDestruye([1, 2, 7, 3, 9], 2)).toEqual([1, 7, 3, 9]);
    });
    it('debería eliminar 1 de [1, 2, 4, 2, 3, 1, 1, 5, 7] y retornar [2, 4, 2, 3, 5, 7]', function() {
      expect(buscaDestruye([1, 2, 4, 2, 3, 1, 1, 5, 7], 1)).toEqual([2, 4, 2, 3, 5, 7]);
    });
});