class TodoService {
    async getById(id) {
        const response = await fetch(`https://typicode.com{id}`);
        return await response.json();
    }
}

class UserService {
    async getById(id) {
        const response = await fetch(`https://typicode.com{id}`);
        return await response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

(async () => {
    const todo = await todoService.getById(1);
    const user = await userService.getById(1);
    console.log('Class Todo:', todo);
    console.log('Class User:', user);
})();
