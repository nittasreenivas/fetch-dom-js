// console.log('1','vasu')

// let arr = [1,2,3,4]

// arr.forEach((num) => {
//     console.log('2::',num)
// })


// setTimeout(() => {
//     console.log('3::','sree')
// })


// console.log('4::','rishi')


const API = async () => {
    try{
     const res = await fetch("https://dummyjson.com/products?limit=100")
     const data = await res.json()
     let fdata = data.products.slice(0,20).map((p) => {
        const {id,title,price} = p;
        return {
            id:id,
            title:title,
            price:price
        }
     })
     console.log('fdata::',fdata)
     return fdata
    }catch(err){
        console.log(`API got some error ${err.message}`)
    }
}

API()