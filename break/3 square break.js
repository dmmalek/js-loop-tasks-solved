/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 === 0) { // Check if the square root is an integer
        console.log("The first square number is:", i);
        break;
    }
}