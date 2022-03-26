const charCost = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export const romanToInteger = (str) =>
    [...str].reduce((sum, cur, index) => {
        const currentValue = charCost[cur];
        const prevValue = charCost[str[index - 1]];
        const res = sum + currentValue;
        return index && prevValue < currentValue ? res - prevValue * 2 : res;
    }, 0);
