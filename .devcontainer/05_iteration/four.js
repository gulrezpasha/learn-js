const myNums=[1,2,3]

// const mytotal=myNums.reduce(function(accumulator,currval){
//     console.log(`accumulator:${accumulator} and curr:${currval}`);
//     return accumulator+currval
// },0)c

const mytotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(mytotal);

const shoppingcart=[
    {
        itemname:"js",
        price:1999
    },
    {
        itemname:"python",
        price:4999
    },
    {
        itemname:"data science",
        price:3999
    },
    {
        itemname:"web developement",
        price:9999
    },
]

const price =shoppingcart.reduce((acc,item)=>acc +item.price,0)
console.log(price);