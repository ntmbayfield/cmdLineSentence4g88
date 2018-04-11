function sc(array){
  //sort indexes in array by value from low to high

  let sortedArray = array.sort(function(a,b) {
    return a-b;
  });
  console.log(sortedArray);

  let oddsArray = [];
  let evensArray = [];
  //Use a for loop to iterate over indexes in sortedArray
  //use push method to put all of the odd indexes into "startArr" array
  //use push method to put all of the even indexes into "endArr" array
  for (let i =0; i < sortedArray.length; i++) {
    if (i % 2 === 0) {
      evensArray.push(sortedArray[i]);
    } else {
      oddsArray.push(sortedArray[i]);
    }
  }

  //use the reverse method on the evens array to reverse the order of the items in it
  let endArray = oddsArray.reverse();

  let symmetricSortArray = evensArray.concat(endArray);

  return symmetricSortArray;
}
