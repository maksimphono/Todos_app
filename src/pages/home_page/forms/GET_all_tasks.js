import $ from "jquery"

export default function GET_all_tasks(data){
    console.log("MEthod GET");
    const storage = window.localStorage;
    const todos = storage.getItem("todos") || "";

    const result = JSON.parse('[' + todos + ']').map(todo => (JSON.parse(todo)));
    console.info("Local Storage : ", storage);
    console.log("GET Todos : ", todos);

    console.log("Value to return from GET : ", result);
    return result;
}