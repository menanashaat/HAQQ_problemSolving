const fs = require('fs');
const csv = require('csv-parser');

const results = [];

const filePath = './prediction.csv';

// Read the CSV file
fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log('CSV Data:', results);
    console.log(getProbabilityToBeatBoss("Hearts", "Lion", "Mango" , results)); // Pass results here

  })
  .on('error', (err) => {
    console.error('Error reading the file:', err);
  });

  // Function to calculate probabilities 
function getProbabilityToBeatBoss(suit, animal, fruit, data) {
  let suitW = 0, suitT = 0;
  let animalW = 0, animalT = 0;
  let fruitW = 0, fruitT = 0;

  data.forEach(entry => {
    if (entry.suit === suit) { 
      suitT++;
      if (entry.result === 'True') suitW++; // Adjust according to how 'result' is stored in CSV
    }
    if (entry.animal === animal) {
      animalT++;
      if (entry.result === 'True') animalW++; // Adjust according to how 'result' is stored in CSV
    }
    if (entry.fruit === fruit) {
      fruitT++;
      if (entry.result === 'True') fruitW++; // Adjust according to how 'result' is stored in CSV
    }
  });
  // Calculate probabilities for each characteristic
  const suitProb = suitT > 0 ? suitW / suitT : 0;
  const animalProb = animalT > 0 ? animalW / animalT : 0;
  const fruitProb = fruitT > 0 ? fruitW / fruitT : 0;
  
  console.log('suitProb ', suitProb);
  console.log('animalProb ', animalProb);
  console.log('fruitProb ', fruitProb);

  // Multiply probabilities
  const finalProbability = suitProb * animalProb * fruitProb;
  console.log('finalProbability ', finalProbability);

  if (suitT === 0 || animalT === 0 || fruitT === 0) {
    return "0.00%";
  }

  // Return final result in percentage format
  return (finalProbability * 100).toFixed(2) + "%";
}