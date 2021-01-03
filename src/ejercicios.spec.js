import * as fns from './ejercicios';

describe('Tests', () => {
  it('fibo devuelve el numero de fibonacci en la posición n', () => {
    expect(fns.fibo(1)).toEqual(1);
    expect(fns.fibo(2)).toEqual(1);
    expect(fns.fibo(3)).toEqual(2);
    expect(fns.fibo(4)).toEqual(3);
    expect(fns.fibo(10)).toEqual(55);
    expect(fns.fibo(15)).toEqual(610);
    // si pasan los tests anteriores, descomenten este y vuelvan a correrlo
    // si la función no termina, están calculando el resultado de una manera muy poco eficiente.
    expect(fns.fibo(100)).toEqual(354224848179262000000);
  });

  it('factorial devuelve valores correctos', () => {
    expect(fns.factorial(3)).toEqual(6); // 3 * 2 * 1 === 6
    expect(fns.factorial(4)).toEqual(24); // 4 * 3 * 2 * 1 === 24
    expect(fns.factorial(5)).toEqual(120); // 5 * 4 * 3 * 2 * 1 === 120
    expect(fns.factorial(6)).toEqual(720); // 6 * 5 * 4 * 3 * 2 * 1 === 720
  });

  it('multiplicacion devuelve valores correctos', () => {
    expect(fns.multiplicacion([5, 7, 4])).toEqual(140); // 5 * 7 * 4 === 140
    expect(fns.multiplicacion([3, 12, 2])).toEqual(72); // 3 * 12 * 2 === 72
    expect(fns.multiplicacion([9, 2, 6])).toEqual(108); // 9 * 2 * 6 === 108
    expect(fns.multiplicacion([10, 9, 1, 5])).toEqual(450); // 10 * 9 * 1 * 5 === 450
  });

  it('atributo nos devuelve una función para sacar un atributo de un objeto', () => {
    const obtenerNombre = fns.atributo('nombre');

    // si llamamos a atributo con el parametro que tenemos, nos tiene que devolver una función
    expect(typeof obtenerNombre).toEqual('function');

    // si llamamos a la función que conseguimos antes con un objeto, nos tiene que devolver el parametro que pedimos antes
    expect(obtenerNombre({ nombre: 'Julian', pais: 'Alemania' })).toEqual('Julian');
    expect(obtenerNombre({ nombre: 'Fabricio', pais: 'Australia' })).toEqual('Fabricio');
    expect(obtenerNombre({ pais: 'Argentina' })).toBeFalsy();
  });

  it('multiplicarAtributo es una función con curry aplicado que multiplica los numeros en un atributo de un objeto', () => {
    const multiplicarDias = fns.multiplicarAtributo('dias');

    expect(typeof multiplicarDias).toEqual('function');

    expect(multiplicarDias({ dias: [1] })).toEqual(1);
    expect(multiplicarDias({ dias: [3, 2, 5] })).toEqual(30); // 3 * 2 * 5 === 30
    expect(fns.multiplicarAtributo('dias', { dias: [9, 2, 6] })).toEqual(108); // 9 * 2 * 6 === 108
  });

  it('ordenarPor es una función con curry aplicado que ordena un array de objetos por el atributo que le pasamos (de mayor a menor)', () => {
    const ordenarPorEdad = fns.ordenarPor('edad');

    expect(typeof ordenarPorEdad).toEqual('function');

    expect(
      ordenarPorEdad([
        { nombre: 'Jorge', edad: 16 },
        { nombre: 'Silvia', edad: 27 },
        { nombre: 'Maria', edad: 31 },
      ]),
    ).toEqual([
      { nombre: 'Maria', edad: 31 },
      { nombre: 'Silvia', edad: 27 },
      { nombre: 'Jorge', edad: 16 },
    ]);
    expect(
      fns.ordenarPor('dni', [
        { nombre: 'Alberto', dni: 25_342_522 },
        { nombre: 'Martin', dni: 47_394_321 },
        { nombre: 'Lucia', dni: 42_439_214 },
      ]),
    ).toEqual([
      { nombre: 'Martin', dni: 47_394_321 },
      { nombre: 'Lucia', dni: 42_439_214 },
      { nombre: 'Alberto', dni: 25_342_522 },
    ]);
  });

  it('mayorPersona nos devuelve el NOMBRE de la persona de mayor edad en el array que pasamos', () => {
    expect(
      fns.mayorPersona([
        { nombre: 'Jorge', edad: 16 },
        { nombre: 'Silvia', edad: 27 },
        { nombre: 'Maria', edad: 31 },
      ]),
    ).toEqual('Maria');

    expect(
      fns.mayorPersona([
        { nombre: 'Alberto', edad: 63 },
        { nombre: 'Martin', edad: 12 },
        { nombre: 'Lucia', edad: 14 },
      ]),
    ).toEqual('Alberto');
  });
});
