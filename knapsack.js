const items = [
  { item: 1, weight: 10, value: 60 },
  { item: 2, weight: 20, value: 100 },
  { item: 3, weight: 30, value: 120 },
  { item: 4, weight: 5, value: 50 },
  { item: 5, weight: 15, value: 90 },
];
const maxweight = 50;

function knapsack(items, maxw) {
  let valueToWeight = [];
  let valWeight = 1;
  for (let data of items) {
    valWeight = data.value / data.weight;
    let arr = {
      item: data.item,
      weight: data.weight,
      value: data.value,
      valWeight,
    };
    valueToWeight.push(arr);
  }

  let profitValWeight = 0;
  let totalWeight = 0;
  const newSort = valueToWeight.sort((a, b) => {
    return b.valWeight - a.valWeight;
  });
  console.log(newSort);
  let selectedItems = [];
  for (let data of newSort) {
    if (totalWeight + data.weight > maxw) {
      totalWeight = totalWeight;
    } else {
      totalWeight += data.weight;
      profitValWeight += data.value;
      selectedItems.push(data.item);
    }
  }

  return { totalWeight, profitValWeight, selectedItems };
}
console.log(knapsack(items, maxweight));
