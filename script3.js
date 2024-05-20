
// // console.log('a::','vasu')

// let arr = ['a','b','c','d','e','f'];

// let res = arr.reduce((acc,curr,i) => ({
//   ...acc,[i]:curr
// }),{})

// console.log('res::',res)

const tasks = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

const executeAsyncTasks = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    // console.log('data::', data);
    return data;
}

const executeAllAsyncTasks = async () => {
    let response = await Promise.all(
        tasks.map((url) => {
            return executeAsyncTasks(url);
        })
    );
    console.log('response', response);
    return response;
}

// // Option 1: Using an async function with await
// (async () => {
//     const allTasks = await executeAllAsyncTasks();
//     console.log('allTasks', allTasks);
// })();

// // Option 2: Using .then()
// executeAllAsyncTasks().then(allTasks => {
//     console.log('allTasks', allTasks);
// });

console.log('response',executeAllAsyncTasks())
