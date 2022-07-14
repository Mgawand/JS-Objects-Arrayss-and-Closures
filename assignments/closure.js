// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
function counterFactory() {
  let counter = 5;
  function increment() {
    return ++counter;
  }
  function decrement() {
    return --counter;
  }
  return { increment, decrement };
}
console.log(counterFactory().increment());
console.log(counterFactory().decrement());
// =====================================================================================
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned
function cb() {
  console.log("Cb invoke");
}
function limitFunctionCallCount(cb, n) {
  let counter = n;
  function invoke() {
    counter-- > 0 ? cb() : console.log(`cb is called for ${n} times `);
  }
  return { invoke };
}
let num = limitFunctionCallCount(cb, 2);
num.invoke();
num.invoke();
num.invoke();
// ===================================================================================================
// Should return a function that invokes `cb`.
// A cache (object) should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.
cb = (x) => ` argument ${x} was not used`;
function cacheFunction(cb) {
  const cache = new Set();

  function cbInvoke(count) {
    if (!cache.has(count)) {
      console.log(cache);
      cache.add(count);
      return cb(count);
    } else {
      console.log(cache);
      return cache;
    }
  }
  return { cbInvoke };
}
let arguments = cacheFunction(cb);
console.log(arguments.cbInvoke("X"));
console.log(arguments.cbInvoke("Y"));
console.log(arguments.cbInvoke("X"));
