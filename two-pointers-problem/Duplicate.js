// this is the problem of removing duplicates from the sorted array 
//@ Remove duplicates in-place and return the length of the new array

//input : [1,1,2,2,3,4,4];
//output: new Length=4,array after removal=[1,2,3,4,_,_,_];

function duplicates(arr){
  let left=0;
  let right=1;
  while(right < arr.length){
     if(arr[left]!==arr[right]){
        left++;
        arr[left]=arr[right];
     }
     right++;
  }
  let newLength=left+1;
  while((newLength) < arr.length){
      arr[newLength]="_";
      newLength++;
  }
 console.log(`new length=${newLength},array after removal=[${arr}]`);
}

(duplicates([1,1,2,2,3,4,4]));