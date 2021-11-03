/* JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. */
function findPrime(...numbers) {
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        for (let index = 2; index < number; index++) {
            if (number % index == 0) {
                counter++
            }
        }
        if (counter == 0) {
            console.log(numbers[i] + " Sayısı asaldır")
        }
        else {
            console.log(numbers[i] + " Sayısı asal değildir")
        }
        counter = 0;
    }
}

findPrime(2, 5, 8, 21, 13)

/* Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. */
function friendNumbers(num1, num2) {
    let sum1 = 0;
    let sum2 = 0;


    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            sum1 += i
        }
    }
    for (let x = 1; x < num2; x++) {
        if (num2 % x == 0) {
            sum2 += x
        }
    }

    if (sum1 == num2 && sum2 == num1) {
        console.log("Arkadaş Sayılar")
    } else {
        console.log("Arkadaş Sayı Değiller")
    }

}

friendNumbers(220, 284)

/* 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız. */
function perfectNumbers(number) {
    for (let i = 1; i < number; i++) {
        let count = 0;
        for (let x = 1; x < i; x++) {
            if (i % x == 0) {
                count += x;
            }
        }
        if (count == i) {
            console.log(i)
        }
    }
}
perfectNumbers(1000)


/* 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */
function asalNumber(numbers) {
    for (let i = 1; i < numbers; i++) {
        let counter = 0;
        for (let index = 2; index < i; index++)
            if (i % index == 0) {
                counter += 1;
            }
        if (counter < 1) {
            console.log(i);
        }
    }
}
asalNumber(1000)






