const isHappyTicket = (str) => {
  //сумма цифр первой половины числа
  let sum1 = 0;
  //сумма цифр второй половины числа
  let sum2 = 0;
  //счётчик
  let i = 0;

  while (i < str.length / 2) {
    sum1 += Number(str[i]);
    sum2 += Number(str[str.length - 1 - i]);
    i += 1;
  }

  return sum1 === sum2;
};

export { isHappyTicket };