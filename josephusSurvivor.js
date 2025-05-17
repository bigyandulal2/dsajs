let counter = 0;
let newArr = [];
let arr = [1, 2, 3, 4, 5, 6, 7];
function josephusSurvivor(n, k) {
  //your code here

  let length = n - 1;
  let itemRmv = k - 1;

  if (itemRmv < length) {
    newArr = arr.filter((item, index) => {
      return itemRmv != index;
    });
  }
  while (true) {
    // console.log("inside loop=",newArr);

    itemRmv += k - 1;
    if (newArr.length == 1) {
      break;
    }
    if (itemRmv < newArr.length) {
      newArr = newArr.filter((item, index) => {
        return itemRmv != index;
      });
      itemRmv += k - 1;
    }

    console.log("newArr=", newArr);

    console.log("newArr=index", itemRmv);

    if (itemRmv > newArr.length) {
      itemRmv = itemRmv % newArr.length;

      if (itemRmv >= 0) {
        //   console.log("i am here itemRemove",itemRmv)
        newArr = newArr.filter((item, index) => {
          return itemRmv != index;
        });
      }
    }
  }
}

josephusSurvivor(arr.length, 6);
