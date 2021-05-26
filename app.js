    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        
    }
    
    const populateTodos = () => {
        let title = arrayOfTodos[0].title
        let list = document.getElementById('todo-list')
        let listItem = document.createElement('LI')
        let todo = document.createTextNode(title)
        
        listItem.appendChild(todo)
        list.appendChild(listItem)
    }