function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.error('Помилка todo:', error));
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.error('Помилка user:', error));
}

const allPromises = Promise.all([getTodo(), getUser()])
    .then(results => {
        const [todo, user] = results;
        console.log('Promise.all - Todo:', todo);
        console.log('Promise.all - User:', user);
    });

const racePromise = Promise.race([getTodo(), getUser()])
    .then(winner => {
        console.log('Promise.race - Переможець:', winner);
    });
