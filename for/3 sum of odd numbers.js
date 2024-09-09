

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for (let num = 0; num < 200; num++) {
    if (num >= 91 && num <= 129 && num % 2 === 1) {
        console.log(num);
        sum = sum + num;
    }
}
console.log('Total Odd Number is =', sum);
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let evenSum = 0;
for (let evenNum = 0; evenNum < 200; evenNum++) {
    if (evenNum >= 51 && evenNum <= 85 && evenNum % 2 === 0) {
        console.log(evenNum);
        evenSum = evenSum + evenNum;
    }
}
console.log('Total Even Number is =', evenSum);
/*programming hero*/