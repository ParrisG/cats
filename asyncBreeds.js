const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    
    if (!error) functionToRunWhenThingsAreDone(data);
  });
  
};

//Change 1: Moved the console.log into a new function:
const printOutCatBreed = breedInfo => {
  console.log('Return Value: ', breedInfo);
};

//Change 2: we're now passing two artuments into breedDetailsFromFile: breed string and a callback function.

breedDetailsFromFile('Bombay', printOutCatBreed)