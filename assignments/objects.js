const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// ==============================================
// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys

let arr = [];
function keys(obj) {
  for (let key in obj) {
    arr.push(key);
  }
}
keys(testObject);
console.log(arr.toString());
// ===================================
// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

function values(obj) {
  const values = [];
  for (let value in obj) {
    typeof obj[value] === "function" ? null : values.push(obj[value]);
  }
  return values;
}
console.log(values(testObject));

// Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
// http://underscorejs.org/#mapObject
cb = (value) => "mapped: " + value;
function mapObject(obj, cb) {
  const mapped = {};
  for (let value in obj) {
    mapped[value] = cb(obj[value]);
  }
  return mapped;
}

console.log(mapObject(testObject, cb));
// =================================================
// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs
function pairs(obj) {
  for (const [key, value] of Object.entries(obj))
    console.log(`${key}: ${value}`);
}
pairs(testObject);
/* STRETCH PROBLEMS */
// =======================================================
// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert
function invert(obj) {
  const inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }

  return inverted;
}
console.log(invert(testObject));
// ==========================================================
// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults
function defaults(obj, defaultProps) {
  obj = testObject.location;
  defaultProps = "Located In";
  return obj + ":" + defaultProps;
}
console.log(defaults(testObject));
