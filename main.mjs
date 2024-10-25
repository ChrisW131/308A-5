for (let i = 1; i <= 100; i++){
    if (i % 15 === 0) {
        console.log(`FizzBuzz`)
    } 
    else if (i % 5 === 0){
        console.log(`Buzz`)
    } 
    else if (i % 3 === 0){
        console.log(`Fizz`)
    }
    else {
    console.log(i)
    }
}

//Export Added for script.js
export function printPrimeNumbers(n) {
    Array.from({length: n}, (_, i) => i + 1)
         .filter(isPrime)
         .forEach(prime => console.log(prime));
}

function isPrime(num) {
    return num > 1 && Array.from(
        {length: Math.sqrt(num)}, (_, i) => i + 2)
        .every(divisor => num % divisor !== 0);
}

printPrimeNumbers(100);


let n = 100
while (true) {
    n++
    let isPrime = true
    let div = 50
    while (div <= n / 2) {
        if (n % div == 0) {
            isPrime = false
            break
        }
        div++
    }
    if (isPrime) {
        console.log(n)
        break
    }
}