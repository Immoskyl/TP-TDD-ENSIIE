const math = require('../../math');

describe('Factorial', function () {

    test.each([
        [0, 1],
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
    ])(
        'Factorial %i equals to %i',
        (n, expected) => {
            expect(math.factorial(n)).toBe(expected);
        },
    );

    test('Factorial of negative integers throws exception', () => {
        expect(()=> {math.factorial(-10)}).toThrow();
    });
});


describe('isPrime', function () {

    test.each([
        2,
        3,
        5,
        7
    ])(
        '%i is prime? %i',
        (n) => {
            expect(math.isPrime(n)).toBeTruthy();
        },
    );


    test.each([
        0,
        1,
        4,
        6
    ])(
        '%i is prime? %i',
        (n) => {
            expect(math.isPrime(n)).toBeFalsy();
        },
    );


    test('negative integers are not prime', () => {
        expect(math.isPrime(-10)).toBe(false);
    });


    test('Factorial of not numerical types throws exception', () => {
        expect(()=> {math.factorial(true)}).toThrow();
    });
});


describe('subPrime', function () {

    test.each([
        [6, 10],
        [8, 17],
        [11, 28],
    ])(
        'sumprime of %i equals to %i',
        (n, expected) => {
            expect(math.sumPrime(n)).toBe(expected);
        },
    );


    test('2 is equal to 2', () => {
        expect(math.sumPrime(2)).toBe(2);
    });

    test('negative integers are equal to 0', () => {
        expect(math.sumPrime(-2)).toBe(0);
    });

});


describe('fizzBuzz', function () {

    test('fizzbuzz(0)', () => {
        expect(math.fizzBuzz(0)).toEqual([]);
    });

    test('fizzbuzz(15)', () => {
        expect(math.fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });

    test('fizzbuzz of negatives throws exception', () => {
        expect(()=> {math.factorial(-1)}).toThrow();
    });

});

describe('cipher', function () {

    test('ciphering "Test Unitaire"', () => {
        expect(math.cipher("Test Unitaire")).toMatch("Uftu Vojubjsf");
    });

    test('ciphering "z"', () => {
        expect(math.cipher("z")).toMatch("a");
    });

    test('ciphering numbers should throw', () => {
        expect(()=> {math.cipher(-1)}).toThrow();
    });

});
