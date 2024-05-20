
let tasks = [
    'https://fakestoreapi.com/products',
    'https://rickandmortyapi.com/api/character',
    'https://jsonplaceholder.typicode.com/todos/'
]

const executeTask = async (url) => {
    let res = await fetch(url)
    let data = await res.json()
    return data
}

const executeAllAsyncTasks = async () => {
    let response = await Promise.all(
        tasks.map((url) => {
            return executeTask(url)
        })
    )
    console.log('response::',response)
    return response
}

executeAllAsyncTasks()