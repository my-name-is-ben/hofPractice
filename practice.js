// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multipleOfFive = [];

  _.each(numbers, function(item, index, collection) {
    if (item % 5 === 0) {
      multipleOfFive.push(item);
    }
  });

  return multipleOfFive.length;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  return _.filter(fruits, function(fruit) {
    return (fruit === targetFruit);
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(fruit) {
    return (fruit[0] === letter);
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  return _.filter(desserts, function(item) {
    return (item['type'] === 'cookie');
  });

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(total, item) {
    return total += Number(item.price.replace('$', ''));
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  var returnObj = {cake: 0, cookie: 0, pie: 0, drink: 0};

  returnObj.cake = _.reduce(desserts, function(total, dish) {
    if (dish.type === 'cake') {
      return total += 1;
    } else {
      return total;
    }
  }, 0);

  returnObj.cookie = _.reduce(desserts, function(total, dish) {
    if (dish.type === 'cookie') {
      return total += 1;
    } else {
      return total;
    }
  }, 0);

  returnObj.pie = _.reduce(desserts, function(total, dish) {
    if (dish.type === 'pie') {
      return total += 1;
    } else {
      return total;
    }
  }, 0);

  returnObj.drink = _.reduce(desserts, function(total, dish) {
    if (dish.type === 'drink') {
      return total += 1;
    } else {
      return total;
    }
  }, 0);

  return returnObj;

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  return _.reduce(movies, function(total, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      total.push(movie.title);
      return total;
    } else {
      return total;
    }
  }, []); // **NOTE: when using an array as accumulator, must initialize as an array, NOT 0

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
