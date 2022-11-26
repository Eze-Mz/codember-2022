function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
const numbers = range(11098, 98123);
const stringNumbers = numbers.map((num) => num.toString());
//Given that the numbers are in ascending order, we can just check if it includes "55"
const numbersWithTwo5 = stringNumbers.filter((num) => num.includes("55"));

const numbersAscendingOrder = numbersWithTwo5.filter((num) => {
  return (
    num[0] <= num[1] && num[1] <= num[2] && num[2] <= num[3] && num[3] <= num[4]
  );
});
//I really like this option: if (i.toString().split('').sort().join('') !== i.toString())

console.log(`${numbersAscendingOrder.length}-${numbersAscendingOrder[55]}`);
