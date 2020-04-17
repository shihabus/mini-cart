const Totalizer = (quantity, price) => {
  return parseFloat((parseFloat(quantity) * parseFloat(price)).toFixed(2));
};

export { Totalizer };
