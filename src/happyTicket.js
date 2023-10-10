const isHappyTicket = (str) => {
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;

    while (i < str.length / 2) {
        sum1 += Number(str[i]);
        sum2 += Number(str[str.length-1-i]);
        i += 1;
    }

    return sum1 === sum2;
};

export { isHappyTicket };