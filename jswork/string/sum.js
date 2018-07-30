/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[]
    for(let i=0;i<nums.length;i++) {
        let redu = target-nums[i]
        if(nums.indexOf(redu) !== -1) {
            arr.push(i)
        }
    }
    return arr
};
twoSum([1,2,3], 5)