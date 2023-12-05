export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const newSet = set;
  for (const item of set) {
    if (item.startsWith(startString)) {
      newSet.delete(item);
    }
  }
  return newSet;
}
