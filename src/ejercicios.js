import fp from 'lodash/fp';

export const fibo = function() {
    let cache = [];
    return function fib(n) {
    if (cache[n]) {
        return cache[n]
    } else if (n < 2) {
        return n
    } else {
        cache[n] = fib(n - 1) + fib(n - 2)
    }
    return cache[n];
  }
}();

export const factorial = n => {
    if (n < 1) {
        return 1
    }
    return n * factorial(n - 1);
};

export const multiplicacion = arr => {
    return arr.reduce((acc, num) => acc * num);
};

// Funciones de lodash/fp que les pueden ser útiles a partir de este punto:
// Las vistas en la clase (particularmente fp.flow y fp.curry)
// fp.sortBy (para ordenar un array)
// fp.reverse (para dar vuelta un array)
// fp.first (para obtener el primer valor de un array)

export const atributo = prop => obj => obj[prop];

export const multiplicarAtributo = fp.curry((prop, obj) => {
    return multiplicacion(atributo(prop)(obj))
});

export const ordenarPor = fp.curry((attr, arr) => {
    return fp.reverse(fp.sortBy(element => element[attr], arr))
});

export const mayorPersona = arr => {
    const firstElement = fp.first(ordenarPor('edad')(arr))
    return atributo('nombre')(firstElement);
};
