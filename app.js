

// ES2015 Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


// findMin 
const min = function() {
	const args = Array.from(arguments);
	return args.reduce((min, currVal) => {
		return currVal < min ? currVal : min;
	});
};

function findMin(...min){
	return min.reduce((min, n) => min);
}

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)];

// SLICE AND DICE 
const removeRandom = items => {
	let idx = Math.floor(Math.random() * items.length);
	return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }


  const extend = (array1, array2) => {
	return [...array1, ...array2];
  }


  const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
  }

  const removeKey = (obj, key) => {
	let newObj = { ...obj }
	delete newObj[key];
	return newObj;
  }

  const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
  }


  const update = (obj, key, val) => {
	let newObj = { ...obj }
	newObj[key] = val;
	return newObj;
  }