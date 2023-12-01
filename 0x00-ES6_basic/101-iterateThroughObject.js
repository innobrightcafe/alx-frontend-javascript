const iterateThroughObject = (reportWithIterator) => {
  let separate = '';
  for (const e of reportWithIterator) {
    separate += `${e} ' | '`;
  }
  separate = separate.slice(0, -3);
  return separate;
};

export default iterateThroughObject;
