
const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    n = Number(n);

    let result = [];
    let chunk = [];
    let sum = 0;

    for (let num of arr) {
        if (sum + num > n) {
            result.push(chunk);
            chunk = [];
            sum = 0;
        }

        chunk.push(num);
        sum += num;
    }

    if (chunk.length > 0) {
        result.push(chunk);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
