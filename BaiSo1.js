// Compare the triplets
function compareTriplets(a, b) {
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

// Convert the values from [1 2 3] to [1, 2, 3]
function convertValues(value) {
  return {
    a: value.a.split(" ").map(Number),
    b: value.b.split(" ").map(Number),
  };
}

// Initial values in the given format
const initialValues = [
  { a: "1 2 3", b: "4 5 6" },
  { a: "5 6 7", b: "8 9 10" },
  { a: "17 18 30", b: "19 16 8" },
  { a: "1 2 3", b: "3 2 1" },
  { a: "10 20 30", b: "10 20 30" },
  { a: "70 90 80", b: "80 90 60" },
  { a: "50 50 50", b: "50 50 50" },
  { a: "1 2 3", b: "1 1 4" },
  { a: "19 91 99", b: "18 81 18" },
  { a: "23 45 67", b: "23 45 68" },
];

// Convert initial values to the required format
const newValues = initialValues.map(convertValues);

// Run the comparison on all values
function run() {
  newValues.map((e, idx) => {
    const result = compareTriplets(e.a, e.b);
    console.log(`Result ${idx + 1}`, result);
  });
}

// Call the function to run the code
run();
