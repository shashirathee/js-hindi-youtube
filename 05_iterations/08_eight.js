const myNums =[1, 2, 3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce((acc, curr)=> acc+curr,0)
console.log(myTotal);

const shoppingcart =[{
    itemName: "js course",
    price: 2999
},
{
    itemName: "web dev",
    price: 999
},
{
    itemName: "phython",
    price: 5999
},]

const priceToPay =shoppingcart.reduce((acc, item)=>acc + item.price,0)

console.log(priceToPay);