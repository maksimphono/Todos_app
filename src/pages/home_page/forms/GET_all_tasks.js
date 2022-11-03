import $ from "jquery"

export default function GET_all_tasks(data){
    const storage = window.localStorage;
    const todos = storage.getItem("todos") || "";

    return JSON.parse('[' + todos + ']').map(todo => (JSON.parse(todo)));;
}