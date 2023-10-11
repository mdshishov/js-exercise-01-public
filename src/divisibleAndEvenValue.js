const isDivisibleBy5AndEven = (num) => { 
  const result = ((num % 5 === 0) && (num % 2 === 0));
  return result;
};

export { isDivisibleBy5AndEven };