let Util = {};

Util.factorial = (n) => {
    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};


/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {

    if (n < 2) {
        return false;
    }

    if (!(typeof n === "number")) {
        throw 'Unable to compute factorial of non numerical values'
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {

    if (n < 2) {
        return 0;
    }

    if (!(typeof n === "number")) {
        throw 'Unable to compute factorial of non numerical values'
    }


    let answer = 0;
    if (Util.isPrime(n)) {
        n++;
    }
    for(let i=2; i < n; i++){

        //sum only prime numbers, skip all others
        if(Util.isPrime(i)){
            answer += i;
        }
    }
    return answer;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

    if (n < 0) {
        throw 'Unable to compute negative values'
    }

    if (n === 0) {
        return [];
    }

    let ret = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            ret.push("FizzBuzz");
        } else if (i % 3 === 0) {
            ret.push("Fizz");
        } else if (i % 5 === 0) {
            ret.push("Buzz");
        } else {
            ret.push(i)
        }
    }
    return ret;

};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    let ret = "";
    if (!(typeof phrase === "string")) {
        throw 'Unable to compute factorial of non integer values'
    }

    for (let i = 0; i <= phrase.length; ++i) {
        if (phrase.charAt(i) === ' ') {
            ret += " ";
        } else if (phrase.charAt(i) === 'z') {
            ret += "a";
        } else if (phrase.charAt(i) === 'Z') {
            ret += "A";
        } else {
            ret += String.fromCharCode(phrase.charCodeAt(i) + 1)
        }
    }
    return ret
};


module.exports = Util;

