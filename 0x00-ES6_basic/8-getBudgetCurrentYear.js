const getBudgetForCurrentYear = (income, gdp, capita) => {
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
  return budget;
};

export default getBudgetForCurrentYear;
