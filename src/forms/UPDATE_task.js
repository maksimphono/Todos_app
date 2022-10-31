export default function UPDATE_task(data){
    const storage = window.localStorage;
    const todos = JSON.parse('[' + storage.getItem("todos") + ']');
    const index = +data.todoIndex;

    todos.splice(index, 1, {title : data.title, description : data.description});
    console.log(JSON.stringify(todos).slice(1, -1));
    //storage.setItem("todos", JSON.stringify(todos).slice(1, -1));
}