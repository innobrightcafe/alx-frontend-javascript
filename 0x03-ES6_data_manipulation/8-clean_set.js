export default function cleanSet(inputSet, startString) {
  const cleanedValues = Array.from(inputSet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return cleanedValues.join("-");
}
