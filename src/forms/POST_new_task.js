export default function POST_new_task(data){
    const storage = window.localStorage;
    const todos = storage.getItem("todos");

    if (todos)
        storage.setItem("todos", todos + ',' + JSON.stringify(data));
    else
        storage.setItem("todos", JSON.stringify(data));
    
}