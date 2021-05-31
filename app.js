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

    
    
    let filterTodos = () => {
        let userId = parseInt(document.getElementById('user-id').value)
        
        setUserId(userId)
        
        filteredArray = arrayOfTodos.filter(todo => parseInt(todo.userId) === userId)
        populateTodos(filteredArray)
    }

    let setUserId = (id) => {
        let userSelection = document.getElementById('user-selection')
        userSelection.innerHTML = ''
        let selectionText = document.createTextNode('Filtered By: ' + id)
        userSelection.appendChild(selectionText)
        console.log('userId', id)
    }

    const clearList =() => {
        let list = document.getElementById('todo-list')
        list.innerHTML = ''
    }
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)    
    }
    
    const populateTodos = (data) => {
        clearList()

        if(typeof data == 'undefined') {
            data = arrayOfTodos
        }

        for (i = 0; i < data.length; i++) {
            let title = data[i].title
            let list = document.getElementById('todo-list')
            let listItem = document.createElement('LI')
            let todo = document.createTextNode(title)
            
            listItem.appendChild(todo)
            list.appendChild(listItem)
        }
        console.log('data', data)
    }