//find two numbers that add up to a given target
// input :[1,2,3,4,6], target=6, output:[1,3]
//so, output is the returned index, we solve this using two-pointers-problem

// note , input arr must be in sorted order or else , this algorithm will not work 
function TwoSum(arr,target){
    //goal O(n) notation time complexity
    // left and right are two pointers
    let left=0;
    let right=arr.length-1;
    while (left <right){
        let sum=arr[left]+arr[right];
        if(sum==target){
             return ([left,right]);
        }
        else if (sum>target){
             right--;
        }
        else{
            left++  ;
        }

    }
}
//if no data found it return undefined, we assumed that our input are already sorted .
console.log(TwoSum([1,2,3,4,6],6));
console.log(TwoSum([2,3,4,11,22,34,12],33));