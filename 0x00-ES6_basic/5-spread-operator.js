export default function concatArrays(array1, array2, string) {
  const concatenatedArray = [...array1, ...array2, ...string];
  return concatenatedArray;
}
