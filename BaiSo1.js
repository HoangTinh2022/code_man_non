// Compare the triplets
// paremetter a is point of Alice, b is point of Bob
function compareTriplets(a, b) {
  // Check if input arrays are of length 3
  if (a.length !== 3 || b.length !== 3) {
    throw new Error("Input arrays must have exactly 3 elements.");
  }

  // Check if all elements are within the range 1 ≤ a[i], b[i] ≤ 100
  const isValid = (arr) => arr.every((value) => value >= 1 && value <= 100);

  if (!isValid(a) || !isValid(b)) {
    throw new Error("All elements must be between 1 and 100.");
  }

  // Initialize points
  let alicePoints = 0;
  let bobPoints = 0;

  // Loop to compare each pair of values
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }

  return [alicePoints, bobPoints];
}

// Example
const a = [5, 6, 7];
const b = [3, 6, 10];
const result = compareTriplets(a, b);
console.log(result);  // Result is 1 1

// Sample Input
a: 1 2 3
b: 4 5 6

a: 5 6 7
b: 8 9 10

a: 17 18 30
b: 19 16 8

a: 1 2 3
b:  3 2 1

a: 10 20 30
b: 10 20 30

a: 70 90 80
b: 80 90 60

a: 50 50 50
b: 50 50 50

a: 1 2 3
b: 1 1 4

a: 19 91 99
b: 18 81 18

a: 23 45 67
b: 23 45 68

// Sample output
0 3
0 3
2 1
1 1
0 0
1 1
0 0
1 1
3 0
0 1
