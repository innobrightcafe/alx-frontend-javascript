export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let numOfCalls = weakMap.get(endpoint) || 0;
  numOfCalls += 1;
  weakMap.set(endpoint, numOfCalls);
  if (numOfCalls >= 5) {
    throw Error('Endpoint load is high');
  }
}
