const nums=[3,2,1,4];
const concatArray=findConcatArray(nums);
console.log("This is the result:",concatArray);
function findConcatArray(nums){
    nums=nums.concat(nums);
    return nums
}