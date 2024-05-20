
 let cars =  [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]

  
let res = cars.map((car,i) => {
  return {
    id:i,
    name:car.name
  }
})

console.log('res::',res)

const sree = require('./script5');

console.log('1',sree.add(1,2))

