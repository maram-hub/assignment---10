let arr=[1,0,9,4,3,-4,55,-6,7,23,11,53,-11,10,31,13,565,1,4,7];
let big = arr[0];
for (let i = 0 ; i < 20; i++){
if(arr[i] > big)
{big = arr[i];

}
}
console.log("The largest number is :" + big);
