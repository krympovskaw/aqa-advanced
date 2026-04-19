async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function showData() {
    const todo = await fetchTodo();
    const user = await fetchUser();
    console.log('Async/Await - Todo:', todo);
    console.log('Async/Await - User:', user);
}

showData();
