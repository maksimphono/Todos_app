export default function UPDATE_task(data){
    const storage = window.localStorage;
    const todos = JSON.parse('[' + storage.getItem("todos") + ']');
    const index = +data.todoIndex;

    todos[index] = JSON.stringify({...JSON.parse(todos[index]), title : data.title, description : data.description});
    storage.setItem("todos", JSON.stringify(todos).slice(1, -1));
}