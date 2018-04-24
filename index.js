var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4['Dark Chocolate Crunchies']['cost'];
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  return store4['Berry Bites']['sold on'].length;
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  //create new empty array to hold the names of candies that cost more than $2.00
  let candiesThatCostOverTwoDollars = [];

  //for each key in store4(which is the name of a candy)
  for (let key in store4) {
    if (store4[key]['cost'] > 2) {
      candiesThatCostOverTwoDollars.push(key);
    }
  }
  return candiesThatCostOverTwoDollars;

  //if the value stored in the ['cost'] key is greater than 2.00, then push the name of that candy to return array

}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  //create an empty object to populate as we iterate over store4
  let candyCosts = {};

  //use for in loop to iterate over object keys which are the names of the candies and assign them as keys in the return Object
  //and assign the value stored in ['cost'] key as the value in the return Object
  for (let key in store4) {
    candyCosts[key] = store4[key]['cost'];
  }
  return candyCosts;
}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
function challenge1() {
  let ppAndCTRevenue = [];

  //rounding function
  function roundTo2Places(amount) {
    return Math.round(100 * amount)/100;
  }

  //calculate revenue made from Peppermint Poppers and round to 2 decimal points
  let revenueFromPP = store4['Peppermint Poppers']['cost'] * store4['Peppermint Poppers']['sold on'].length;
  revenueFromPP = roundTo2Places(revenueFromPP);

  //calculate revenue made from Caramel Twists and round to 2 decimal points
  let revenueFromCT = store4['Caramel Twists']['cost'] * store4['Caramel Twists']['sold on'].length;
  revenueFromCT = roundTo2Places(revenueFromCT);

  //push value of revenue made from each candy to new array;
  ppAndCTRevenue.push(revenueFromPP);
  ppAndCTRevenue.push(revenueFromCT);

  return ppAndCTRevenue;
}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {

  function roundTo2Places(number) {
    return Math.round(100 *number)/100;
  }

  let totalRevenueResult = 0;

  //use a for in loop to iterate through the keys in store4(which are the candy names)
  for (let key in store4) {
    let counter = 0;

    for (let i = 0; i < store4[key]['sold on'].length; i++) {
        if (store4[key]['sold on'][i] === '2015-01-09') {
          counter = counter + 1;
        }
      let individualCandyRevenue = counter *  store4[key]['cost'];
      totalRevenueResult = totalRevenueResult + individualCandyRevenue;
      console.log("Total Revenue Result: " + tvcxzotalRevenueResult);
    }
    totalRevenueResult = roundTo2Places(totalRevenueResult);

  return totalRevenueResult;
  }


  //then use a for loop to iterate through each index in the array of dates stored as the value assigned to the ['sold on'] key for each candy
  //set a counter variable to zero, which will increase by 1 each time an index in the array is equal to '2015-01-09'
  //once have iterated over each index in the array, multiply the counter variable by value stored in the key ['cost']
  //use accumulator pattern to update the totalRevenueOnJan9 variable after iterate over each key
  //

}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
